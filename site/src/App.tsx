import { useEffect, useMemo, useState } from 'react'
import { getExercises, getExercisesForExam } from './data/exercises'
import { getAllExamPacks, getExamPack } from './data/examPacks'
import { getFunctionDrillsForExam } from './data/functionDrills'
import {
  getFirstLesson,
  getLessons,
  getNextLesson,
} from './data/lessons'
import { Home } from './components/Home'
import { ExamPicker } from './components/ExamPicker'
import { ExamBrief } from './components/ExamBrief'
import { ExamSession } from './components/ExamSession'
import { LessonView } from './components/LessonView'
import { LangSwitch } from './components/LangSwitch'
import { PlaygroundDock } from './components/PlaygroundDock'
import { PythonPlayground } from './components/PythonPlayground'
import { useLanguage } from './i18n/LanguageContext'
import type { ExamSessionItem, Lesson } from './types'

type Screen =
  | 'home'
  | 'lesson'
  | 'exam-picker'
  | 'exam-brief'
  | 'exam-session'
  | 'playground'

export default function App() {
  const { lang, t } = useLanguage()
  const [screen, setScreen] = useState<Screen>('home')
  const [currentLessonId, setCurrentLessonId] = useState(
    () => getFirstLesson('tr').id,
  )
  const [activeExamId, setActiveExamId] = useState<string | null>(null)
  const [doneLessons, setDoneLessons] = useState<string[]>([])
  const [solvedQuestionIds, setSolvedQuestionIds] = useState<string[]>([])

  const packs = useMemo(() => getAllExamPacks(lang), [lang])
  const lessonList = useMemo(() => getLessons(lang), [lang])
  const allExercises = useMemo(() => getExercises(lang), [lang])

  const currentLesson: Lesson =
    lessonList.find((l) => l.id === currentLessonId) ?? lessonList[0]
  const lessonIndex = lessonList.findIndex((l) => l.id === currentLesson.id)
  const nextLesson = getNextLesson(currentLesson.id, lang)

  useEffect(() => {
    if (!lessonList.some((l) => l.id === currentLessonId) && lessonList[0]) {
      setCurrentLessonId(lessonList[0].id)
    }
  }, [lessonList, currentLessonId])

  const totalQuestions = useMemo(() => {
    return packs.reduce((n, p) => {
      const blanks = allExercises.filter((e) => e.examId === p.examId).length
      const fns = getFunctionDrillsForExam(p.examId, lang).length
      return n + p.mcqs.length + fns + blanks
    }, 0)
  }, [packs, allExercises, lang])

  const progressByExam = useMemo(() => {
    const map: Record<string, number> = {}
    for (const p of packs) {
      const ids = [
        ...p.mcqs.map((m) => m.id),
        ...getFunctionDrillsForExam(p.examId, lang).map((d) => d.id),
        ...allExercises.filter((e) => e.examId === p.examId).map((e) => e.id),
      ]
      map[p.examId] = ids.filter((id) => solvedQuestionIds.includes(id)).length
    }
    return map
  }, [packs, allExercises, solvedQuestionIds, lang])

  const activePack = activeExamId ? getExamPack(activeExamId, lang) : undefined
  const activeBlanks = activeExamId
    ? getExercisesForExam(activeExamId, lang)
    : []
  const activeFns = activeExamId
    ? getFunctionDrillsForExam(activeExamId, lang)
    : []

  const sessionItems: ExamSessionItem[] = useMemo(() => {
    if (!activePack) return []
    return [
      ...activePack.mcqs.map((m) => ({ kind: 'mcq' as const, data: m })),
      ...activeFns.map((d) => ({ kind: 'function' as const, data: d })),
      ...activeBlanks.map((b) => ({ kind: 'blank' as const, data: b })),
    ]
  }, [activePack, activeFns, activeBlanks])

  function startBasics() {
    setCurrentLessonId(getFirstLesson(lang).id)
    setScreen('lesson')
  }

  function startExamPrep() {
    setScreen('exam-picker')
  }

  function startPlayground() {
    setScreen('playground')
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
    const next = getNextLesson(fromId, lang)
    if (!next) {
      setScreen('home')
      return
    }
    setCurrentLessonId(next.id)
  }

  function markSolved(id: string) {
    setSolvedQuestionIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <div className="shell">
      <div className="atmosphere" aria-hidden />
      <div className="topbar">
        <LangSwitch />
      </div>
      <main className={`frame${screen === 'playground' ? ' frame--wide' : ''}`}>
        {screen === 'home' && (
          <Home
            lessonCount={lessonList.length}
            examCount={packs.length}
            questionCount={totalQuestions}
            lessonsDone={doneLessons.length}
            questionsDone={solvedQuestionIds.length}
            onStartBasics={startBasics}
            onStartExamPrep={startExamPrep}
            onStartPlayground={startPlayground}
          />
        )}
        {screen === 'lesson' && (
          <LessonView
            key={`${currentLesson.id}-${lang}`}
            lesson={currentLesson}
            lessons={lessonList}
            index={Math.max(0, lessonIndex)}
            total={lessonList.length}
            doneLessonIds={doneLessons}
            onBack={() => setScreen('home')}
            onCompleted={completeLesson}
            onNext={goNextLesson}
            onJump={setCurrentLessonId}
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
            functionCount={activeFns.length}
            blankCount={activeBlanks.length}
            onBack={() => setScreen('exam-picker')}
            onStart={startSession}
          />
        )}
        {screen === 'exam-session' && activePack && (
          <ExamSession
            key={`${activePack.examId}-${lang}`}
            examTitle={activePack.examTitle}
            items={sessionItems}
            onBack={() => setScreen('exam-brief')}
            onItemSolved={markSolved}
            onFinished={() => setScreen('exam-picker')}
          />
        )}
        {screen === 'playground' && (
          <div className="playground-screen">
            <PythonPlayground
              mode="fullscreen"
              onBack={() => setScreen('home')}
            />
          </div>
        )}
      </main>
      {screen !== 'playground' && (
        <footer className="foot">
          <span>KodAtölye</span>
          <span>
            {t.footStats(doneLessons.length, solvedQuestionIds.length)}
          </span>
        </footer>
      )}
      <PlaygroundDock hidden={screen === 'playground'} />
    </div>
  )
}
