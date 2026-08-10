import { useEffect, useMemo, useState } from 'react'
import { getExercises, getExercisesForExam } from './data/exercises'
import { getAllExamPacks, getExamPack } from './data/examPacks'
import { getFunctionDrillsForExam } from './data/functionDrills'
import {
  countIntermediateQuestions,
  getAllIntermediatePacks,
  getIntermediateIdsForExam,
  getIntermediatePack,
} from './data/intermediateChallenges'
import {
  getFirstLesson,
  getLessons,
  getNextLesson,
} from './data/lessons'
import { Home } from './components/Home'
import { ExamPicker } from './components/ExamPicker'
import { ExamBrief } from './components/ExamBrief'
import { ExamSession } from './components/ExamSession'
import { IntermediateSession } from './components/IntermediateSession'
import { LessonView } from './components/LessonView'
import { LangSwitch } from './components/LangSwitch'
import { PlaygroundDock } from './components/PlaygroundDock'
import { PythonPlayground } from './components/PythonPlayground'
import { useLanguage } from './i18n/LanguageContext'
import type {
  ExamSessionItem,
  ExamTrack,
  IntermediateSessionItem,
  Lesson,
} from './types'

type Screen =
  | 'home'
  | 'lesson'
  | 'exam-picker'
  | 'exam-brief'
  | 'exam-session'
  | 'intermediate-session'
  | 'playground'

export default function App() {
  const { lang, t } = useLanguage()
  const [screen, setScreen] = useState<Screen>('home')
  const [currentLessonId, setCurrentLessonId] = useState(
    () => getFirstLesson('tr').id,
  )
  const [activeExamId, setActiveExamId] = useState<string | null>(null)
  const [track, setTrack] = useState<ExamTrack>('beginner')
  const [doneLessons, setDoneLessons] = useState<string[]>([])
  const [solvedQuestionIds, setSolvedQuestionIds] = useState<string[]>([])

  const packs = useMemo(() => getAllExamPacks(lang), [lang])
  const intermediatePacks = useMemo(
    () => getAllIntermediatePacks(lang),
    [lang],
  )
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
    const beginner = packs.reduce((n, p) => {
      const blanks = allExercises.filter((e) => e.examId === p.examId).length
      const fns = getFunctionDrillsForExam(p.examId, lang).length
      return n + p.mcqs.length + fns + blanks
    }, 0)
    return beginner + countIntermediateQuestions()
  }, [packs, allExercises, lang])

  const beginnerProgress = useMemo(() => {
    const map: Record<string, { done: number; total: number }> = {}
    for (const p of packs) {
      const ids = [
        ...p.mcqs.map((m) => m.id),
        ...getFunctionDrillsForExam(p.examId, lang).map((d) => d.id),
        ...allExercises.filter((e) => e.examId === p.examId).map((e) => e.id),
      ]
      map[p.examId] = {
        done: ids.filter((id) => solvedQuestionIds.includes(id)).length,
        total: ids.length,
      }
    }
    return map
  }, [packs, allExercises, solvedQuestionIds, lang])

  const intermediateProgress = useMemo(() => {
    const map: Record<string, { done: number; total: number }> = {}
    for (const p of intermediatePacks) {
      const ids = getIntermediateIdsForExam(p.examId)
      map[p.examId] = {
        done: ids.filter((id) => solvedQuestionIds.includes(id)).length,
        total: ids.length,
      }
    }
    return map
  }, [intermediatePacks, solvedQuestionIds])

  const activePack = activeExamId ? getExamPack(activeExamId, lang) : undefined
  const activeIntermediate = activeExamId
    ? getIntermediatePack(activeExamId, lang)
    : undefined
  const activeBlanks = useMemo(
    () =>
      activeExamId ? getExercisesForExam(activeExamId, lang) : [],
    [activeExamId, lang],
  )
  const activeFns = useMemo(
    () =>
      activeExamId ? getFunctionDrillsForExam(activeExamId, lang) : [],
    [activeExamId, lang],
  )

  const sessionItems: ExamSessionItem[] = useMemo(() => {
    if (!activePack) return []
    return [
      ...activePack.mcqs.map((m) => ({ kind: 'mcq' as const, data: m })),
      ...activeFns.map((d) => ({ kind: 'function' as const, data: d })),
      ...activeBlanks.map((b) => ({ kind: 'blank' as const, data: b })),
    ]
  }, [activePack, activeFns, activeBlanks])

  const intermediateItems: IntermediateSessionItem[] = useMemo(() => {
    if (!activeIntermediate) return []
    return [
      ...activeIntermediate.functions.map((d) => ({
        kind: 'coding' as const,
        data: d,
      })),
      { kind: 'full' as const, data: activeIntermediate.fullProgram },
    ]
  }, [activeIntermediate])

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
    if (track === 'intermediate') {
      setScreen('intermediate-session')
      return
    }
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

  const begProg = activeExamId
    ? (beginnerProgress[activeExamId] ?? { done: 0, total: 0 })
    : { done: 0, total: 0 }

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
            track={track}
            onTrackChange={setTrack}
            beginnerPacks={packs}
            intermediatePacks={intermediatePacks}
            beginnerProgress={beginnerProgress}
            intermediateProgress={intermediateProgress}
            onBack={() => setScreen('home')}
            onPick={pickExam}
          />
        )}
        {screen === 'exam-brief' && activePack && (
          <ExamBrief
            track={track}
            pack={activePack}
            intermediatePack={activeIntermediate}
            functionCount={activeFns.length}
            blankCount={activeBlanks.length}
            beginnerDone={begProg.done}
            beginnerTotal={begProg.total}
            onBack={() => setScreen('exam-picker')}
            onStart={startSession}
          />
        )}
        {screen === 'exam-session' && activePack && (
          <ExamSession
            key={`${activePack.examId}-${lang}-beginner`}
            examTitle={activePack.examTitle}
            items={sessionItems}
            onBack={() => setScreen('exam-brief')}
            onItemSolved={markSolved}
            onFinished={() => setScreen('exam-picker')}
          />
        )}
        {screen === 'intermediate-session' && activeIntermediate && (
          <IntermediateSession
            key={`${activeIntermediate.examId}-${lang}-intermediate`}
            examTitle={activeIntermediate.examTitle}
            items={intermediateItems}
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
