import type { QuizFill, QuizItem, QuizMcq } from '../types'

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, ' ')
}

function normalizeTight(value: string): string {
  return value.trim().replace(/\s+/g, '')
}

export function checkQuizItem(
  item: QuizItem,
  answer: string | number | null,
): boolean {
  if (item.type === 'mcq') {
    return answer === item.correctIndex
  }

  if (typeof answer !== 'string') return false
  const accepted = [item.answer, ...(item.accept ?? [])]
  const givenTight = normalizeTight(answer)
  const givenSoft = normalize(answer)

  return accepted.some((a) => {
    const tight = normalizeTight(a)
    const soft = normalize(a)
    return givenTight === tight || givenSoft === soft
  })
}

export function isMcq(item: QuizItem): item is QuizMcq {
  return item.type === 'mcq'
}

export function isFill(item: QuizItem): item is QuizFill {
  return item.type === 'fill'
}
