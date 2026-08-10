/**
 * Offline verification: every exercise's official answers must pass the checker.
 */
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Use ts via vite-node? Simpler: duplicate normalize logic against JSON
import { readFileSync } from 'node:fs'

const root = path.dirname(fileURLToPath(import.meta.url))
const exercises = JSON.parse(
  readFileSync(path.join(root, 'exercises.json'), 'utf8'),
)

function normalize(value) {
  return value.trim().replace(/\s+/g, '')
}

function checkAnswers(exercise, answers) {
  const wrong = []
  for (const blank of exercise.blanks) {
    const given = normalize(answers[blank.id] ?? '')
    const accepted = [blank.answer, ...(blank.accept ?? [])].map(normalize)
    if (!accepted.includes(given)) wrong.push(blank.id)
  }
  return { ok: wrong.length === 0, wrong }
}

let fail = 0
const byExam = {}
for (const e of exercises) {
  byExam[e.examId] = (byExam[e.examId] ?? 0) + 1
  const answers = Object.fromEntries(e.blanks.map((b) => [b.id, b.answer]))
  const r = checkAnswers(e, answers)
  if (!r.ok) {
    fail++
    console.error('FAIL', e.id, r.wrong)
  }
  // wrong answer should fail
  const bad = Object.fromEntries(e.blanks.map((b) => [b.id, '__wrong__']))
  const r2 = checkAnswers(e, bad)
  if (r2.ok) {
    fail++
    console.error('FALSE POSITIVE', e.id)
  }
}

console.log('exams', Object.keys(byExam).length)
console.log('total', exercises.length)
console.log(
  Object.entries(byExam)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n'),
)
console.log(fail === 0 ? 'CHECKER OK' : `CHECKER FAILURES: ${fail}`)
process.exit(fail === 0 ? 0 : 1)
