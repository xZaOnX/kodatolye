import { useMemo, useState } from 'react'
import { exercises } from './data/exercises'
import { getAllExamPacks, getExamPack } from './data/examPacks'
import {
  getFirstLesson,
  getNextLesson,
  lessons,
} from './data/lessons'
import { Home } from './components/Home'
import { ExamPicker } from './components/ExamPicker'
import { ExamBrief } from './components/ExamBrief'
import { ExamSession } from './components/ExamSession'
import { LessonView } from './components/LessonView'
import type { ExamSessionItem, Lesson } from './types'

type Screen = 'home' | 'lesson' | 'exam-picker' | 'exam-brief' | 'exam-session'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [currentLesson, setCurrentLesson] = useState<Lesson>(getFirstLesson())
  const [activeExamId, setActiveExamId] = useState<string | null>(null)
  const [doneLessons, setDoneLessons] = useState<string[]>([])
  const [solvedQuestionIds, setSolvedQuestionIds] = useState<string[]>([])

  const packs = getAllExamPacks()
  const lessonIndex = lessons.findIndex((l) => l.id === currentLesson.id)
  const nextLesson = getNextLesson(currentLesson.id)

  const totalQuestions = useMemo(() => {
    return packs.reduce((n, p) => {
      const blanks = exercises.filter((e) => e.examId === p.examId).length
      return n + p.mcqs.length + blanks
    }, 0)
  }, [packs])

  const progressByExam = useMemo(() => {
    const map: Record<string, number> = {}
    for (const p of packs) {
      const ids = [
        ...p.mcqs.map((m) => m.id),
        ...exercises.filter((e) => e.examId === p.examId).map((e) => e.id),
      ]
      map[p.examId] = ids.filter((id) => solvedQuestionIds.includes(id)).length
    }
    return map
  }, [packs, solvedQuestionIds])

  const activePack = activeExamId ? getExamPack(activeExamId) : undefined
  const activeBlanks = activeExamId
    ? exercises.filter((e) => e.examId === activeExamId)
    : []

  const sessionItems: ExamSessionItem[] = useMemo(() => {
    if (!activePack) return []
    return [
      ...activePack.mcqs.map((m) => ({ kind: 'mcq' as const, data: m })),
      ...activeBlanks.map((b) => ({ kind: 'blank' as const, data: b })),
    ]
  }, [activePack, activeBlanks])

  function startBasics() {
    setCurrentLesson(getFirstLesson())
    setScreen('lesson')
  }

  function startExamPrep() {
    setScreen('exam-picker')
  }

  function pickExam(examId: string) {
    setActiveExamId(examId)
    setScreen('exam-brief')
  }

  function startSession() {
    setScreen('exam-session')
  }

  function completeLesson(id: string) {
    setDoneLessons((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  function goNextLesson(fromId: string) {
    const next = getNextLesson(fromId)
    if (!next) {
      setScreen('home')
      return
    }
    setCurrentLesson(next)
  }

  function markSolved(id: string) {
    setSolvedQuestionIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <div className="shell">
      <div className="atmosphere" aria-hidden />
      <main className="frame">
        {screen === 'home' && (
          <Home
            lessonCount={lessons.length}
            examCount={packs.length}
            questionCount={totalQuestions}
            lessonsDone={doneLessons.length}
            questionsDone={solvedQuestionIds.length}
            onStartBasics={startBasics}
            onStartExamPrep={startExamPrep}
          />
        )}
        {screen === 'lesson' && (
          <LessonView
            key={currentLesson.id}
            lesson={currentLesson}
            index={Math.max(0, lessonIndex)}
            total={lessons.length}
            onBack={() => setScreen('home')}
            onCompleted={completeLesson}
            onNext={goNextLesson}
            hasNext={Boolean(nextLesson)}
          />
        )}
        {screen === 'exam-picker' && (
          <ExamPicker
            packs={packs}
            progress={progressByExam}
            onBack={() => setScreen('home')}
            onPick={pickExam}
          />
        )}
        {screen === 'exam-brief' && activePack && (
          <ExamBrief
            pack={activePack}
            blankCount={activeBlanks.length}
            onBack={() => setScreen('exam-picker')}
            onStart={startSession}
          />
        )}
        {screen === 'exam-session' && activePack && (
          <ExamSession
            key={activePack.examId}
            examTitle={activePack.examTitle}
            items={sessionItems}
            onBack={() => setScreen('exam-brief')}
            onItemSolved={markSolved}
            onFinished={() => setScreen('exam-picker')}
          />
        )}
      </main>
      <footer className="foot">
        <span>KodAtölye</span>
        <span>
          {doneLessons.length} ders · {solvedQuestionIds.length} soru
        </span>
      </footer>
    </div>
  )
}
