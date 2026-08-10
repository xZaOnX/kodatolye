import type { Exercise } from '../types'

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, '')
}

export function checkAnswers(
  exercise: Exercise,
  answers: Record<string, string>,
): { ok: boolean; wrong: string[] } {
  const wrong: string[] = []

  for (const blank of exercise.blanks) {
    const given = normalize(answers[blank.id] ?? '')
    const accepted = [blank.answer, ...(blank.accept ?? [])].map(normalize)
    if (!accepted.includes(given)) {
      wrong.push(blank.id)
    }
  }

  return { ok: wrong.length === 0, wrong }
}
