import type { PyodideAPI } from 'pyodide'

const DEFAULT_TIMEOUT_MS = 8_000

export type RunResult = {
  stdout: string
  stderr: string
  ok: boolean
  timedOut?: boolean
}

let pyodidePromise: Promise<PyodideAPI> | null = null

async function loadRuntime(): Promise<PyodideAPI> {
  const { loadPyodide, version } = await import('pyodide')
  return loadPyodide({
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${version}/full/`,
  })
}

export function ensurePyodide(): Promise<PyodideAPI> {
  if (!pyodidePromise) {
    pyodidePromise = loadRuntime().catch((err) => {
      pyodidePromise = null
      throw err
    })
  }
  return pyodidePromise
}

export async function runPython(
  code: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<RunResult> {
  const pyodide = await ensurePyodide()

  const stdoutChunks: string[] = []
  const stderrChunks: string[] = []

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

  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    await Promise.race([
      pyodide.runPythonAsync(code),
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
          reject(new Error('TIMEOUT'))
        }, timeoutMs)
      }),
    ])
    return {
      stdout: stdoutChunks.join('\n'),
      stderr: stderrChunks.join('\n'),
      ok: true,
    }
  } catch (err) {
    if (err instanceof Error && err.message === 'TIMEOUT') {
      return {
        stdout: stdoutChunks.join('\n'),
        stderr: '',
        ok: false,
        timedOut: true,
      }
    }
    const message =
      err instanceof Error ? err.message : String(err ?? 'Unknown error')
    const fromStderr = stderrChunks.join('\n')
    return {
      stdout: stdoutChunks.join('\n'),
      stderr: fromStderr ? `${fromStderr}\n${message}` : message,
      ok: false,
    }
  } finally {
    if (timer) clearTimeout(timer)
  }
}
