export type BlankId = string

export type Exercise = {
  id: string
  examId: string
  examTitle: string
  level: number
  title: string
  goal: string
  hint: string
  /** Code template. Use {{blankId}} for fill-in slots. */
  template: string
  blanks: {
    id: BlankId
    answer: string
    /** Alternative accepted answers (normalized). */
    accept?: string[]
  }[]
}

export type ExerciseResult = {
  exerciseId: string
  correct: boolean
  checkedAt: number
}

export type LessonBlock =
  | { type: 'text'; body: string }
  | { type: 'code'; code: string; caption?: string }
  | { type: 'callout'; title: string; body: string }

export type QuizMcq = {
  type: 'mcq'
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type QuizFill = {
  type: 'fill'
  id: string
  question: string
  placeholder?: string
  answer: string
  accept?: string[]
  explanation: string
}

export type QuizItem = QuizMcq | QuizFill

export type Lesson = {
  id: string
  order: number
  title: string
  subtitle: string
  blocks: LessonBlock[]
  quiz: QuizItem[]
}

export type ExamMcq = {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type ExamPack = {
  examId: string
  examTitle: string
  summary: string
  goalBullets: string[]
  mcqs: ExamMcq[]
}

export type FunctionExample = {
  call: string
  result: string
}

export type FunctionDrill = {
  id: string
  examId: string
  examTitle: string
  functionName: string
  purpose: string
  examples: FunctionExample[]
  signature: string
  whyItMatters: string
  template: string
  blanks: {
    id: BlankId
    answer: string
    accept?: string[]
  }[]
  hint: string
}

/** Unified item in an exam study session */
export type ExamSessionItem =
  | { kind: 'mcq'; data: ExamMcq }
  | { kind: 'function'; data: FunctionDrill }
  | { kind: 'blank'; data: Exercise }

export type ExamTrack = 'beginner' | 'intermediate'

export type FunctionTestCase = {
  name: string
  /** Python statements; student-defined names are already in scope. */
  assertCode: string
}

/** Intermediate: write a function from scratch (no blanks). */
export type CodingChallenge = {
  id: string
  examId: string
  examTitle: string
  title: string
  purpose: string
  signature: string
  examples: FunctionExample[]
  starterCode: string
  tests: FunctionTestCase[]
  hint?: string
}

/** Intermediate: write a full program; checked via files / stdout. */
export type FullProgramChallenge = {
  id: string
  examId: string
  examTitle: string
  title: string
  brief: string
  goalBullets: string[]
  starterCode: string
  inputFiles: Record<string, string>
  stdin?: string
  expectedStdout?: string
  expectedFiles?: Record<string, string>
  hint?: string
  rubricNotes?: string
}

export type IntermediatePack = {
  examId: string
  examTitle: string
  summary: string
  functions: CodingChallenge[]
  fullProgram: FullProgramChallenge
}

export type IntermediateSessionItem =
  | { kind: 'coding'; data: CodingChallenge }
  | { kind: 'full'; data: FullProgramChallenge }
