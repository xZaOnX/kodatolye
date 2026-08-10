import type { PyodideAPI } from 'pyodide'
import type { CodingChallenge, FullProgramChallenge } from '../types'
import { ensurePyodide } from './pyodideRunner'

const DEFAULT_TIMEOUT_MS = 12_000

export type TestCaseResult = {
  name: string
  ok: boolean
  detail?: string
}

export type ChallengeRunResult = {
  ok: boolean
  timedOut?: boolean
  results: TestCaseResult[]
  stdout?: string
  stderr?: string
}

function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('TIMEOUT')), timeoutMs)
    promise.then(
      (v) => {
        clearTimeout(timer)
        resolve(v)
      },
      (err) => {
        clearTimeout(timer)
        reject(err)
      },
    )
  })
}

async function resetFs(pyodide: PyodideAPI, files: Record<string, string>) {
  // Best-effort cleanup of known challenge paths, then write inputs.
  for (const name of Object.keys(files)) {
    try {
      pyodide.FS.unlink(name)
    } catch {
      /* missing is fine */
    }
  }
  for (const [name, content] of Object.entries(files)) {
    pyodide.FS.writeFile(name, content)
  }
}

function normalizeText(text: string): string {
  return text.replace(/\r\n/g, '\n').replace(/\s+$/g, '').trimEnd()
}

export async function runCodingChallenge(
  challenge: CodingChallenge,
  studentCode: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<ChallengeRunResult> {
  const pyodide = await ensurePyodide()
  const results: TestCaseResult[] = []

  try {
    await withTimeout(
      pyodide.runPythonAsync(studentCode),
      timeoutMs,
    )
  } catch (err) {
    if (err instanceof Error && err.message === 'TIMEOUT') {
      return { ok: false, timedOut: true, results: [] }
    }
    const message = err instanceof Error ? err.message : String(err)
    return {
      ok: false,
      results: [{ name: 'load', ok: false, detail: message }],
      stderr: message,
    }
  }

  for (const test of challenge.tests) {
    try {
      await withTimeout(
        pyodide.runPythonAsync(test.assertCode),
        timeoutMs,
      )
      results.push({ name: test.name, ok: true })
    } catch (err) {
      if (err instanceof Error && err.message === 'TIMEOUT') {
        return { ok: false, timedOut: true, results }
      }
      const message = err instanceof Error ? err.message : String(err)
      results.push({ name: test.name, ok: false, detail: message })
    }
  }

  return { ok: results.every((r) => r.ok), results }
}

export async function runFullProgramChallenge(
  challenge: FullProgramChallenge,
  studentCode: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<ChallengeRunResult> {
  const pyodide = await ensurePyodide()
  const results: TestCaseResult[] = []
  const stdoutChunks: string[] = []
  const stderrChunks: string[] = []

  await resetFs(pyodide, challenge.inputFiles)

  // Clear expected output files if they might already exist.
  if (challenge.expectedFiles) {
    for (const name of Object.keys(challenge.expectedFiles)) {
      try {
        pyodide.FS.unlink(name)
      } catch {
        /* ok */
      }
    }
  }

  const stdin = challenge.stdin ?? ''
  const prelude = `
import sys
from io import StringIO
sys.stdin = StringIO(${JSON.stringify(stdin)})
`

  pyodide.setStdout({
    batched: (text) => {
      stdoutChunks.push(text)
    },
  })
  pyodide.setStderr({
    batched: (text) => {
      stderrChunks.push(text)
    },
  })

  try {
    await withTimeout(
      pyodide.runPythonAsync(`${prelude}\n${studentCode}`),
      timeoutMs,
    )
  } catch (err) {
    if (err instanceof Error && err.message === 'TIMEOUT') {
      return { ok: false, timedOut: true, results: [], stdout: stdoutChunks.join('\n') }
    }
    const message = err instanceof Error ? err.message : String(err)
    const fromStderr = stderrChunks.join('\n')
    return {
      ok: false,
      results: [{ name: 'run', ok: false, detail: message }],
      stdout: stdoutChunks.join('\n'),
      stderr: fromStderr ? `${fromStderr}\n${message}` : message,
    }
  }

  const stdout = stdoutChunks.join('\n')

  if (challenge.expectedStdout !== undefined) {
    const got = normalizeText(stdout)
    const want = normalizeText(challenge.expectedStdout)
    const ok = got === want
    results.push({
      name: 'stdout',
      ok,
      detail: ok
        ? undefined
        : `Beklenen çıktı eşleşmedi.\n--- beklenen ---\n${want}\n--- alınan ---\n${got}`,
    })
  }

  if (challenge.expectedFiles) {
    for (const [name, expected] of Object.entries(challenge.expectedFiles)) {
      try {
        const raw = pyodide.FS.readFile(name, { encoding: 'utf8' }) as string
        const got = normalizeText(raw)
        const want = normalizeText(expected)
        const ok = got === want
        results.push({
          name: `file:${name}`,
          ok,
          detail: ok
            ? undefined
            : `${name} içeriği eşleşmedi.\n--- beklenen ---\n${want}\n--- alınan ---\n${got}`,
        })
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err)
        results.push({
          name: `file:${name}`,
          ok: false,
          detail: `Dosya okunamadı: ${message}`,
        })
      }
    }
  }

  if (results.length === 0) {
    results.push({
      name: 'checks',
      ok: false,
      detail: 'Bu challenge için beklenen çıktı tanımlı değil.',
    })
  }

  return {
    ok: results.every((r) => r.ok),
    results,
    stdout,
    stderr: stderrChunks.join('\n') || undefined,
  }
}
