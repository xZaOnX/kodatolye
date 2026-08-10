import { useState } from 'react'
import type { Lesson, LessonBlock, QuizItem } from '../types'
import { checkQuizItem } from '../lib/checkQuiz'
import { SHOW_ANSWER_AFTER_WRONG } from '../lib/showAnswer'
import { useLanguage } from '../i18n/LanguageContext'

type LessonViewProps = {
  lesson: Lesson
  lessons: Lesson[]
  index: number
  total: number
  doneLessonIds: string[]
  onBack: () => void
  onCompleted: (lessonId: string) => void
  onNext: (lessonId: string) => void
  onJump: (lessonId: string) => void
  hasNext: boolean
}

type Phase = 'learn' | 'quiz' | 'done'

export function LessonView({
  lesson,
  lessons,
  index,
  total,
  doneLessonIds,
  onBack,
  onCompleted,
  onNext,
  onJump,
  hasNext,
}: LessonViewProps) {
  const { t } = useLanguage()
  const [phase, setPhase] = useState<Phase>('learn')
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [fillValue, setFillValue] = useState('')
  const [feedback, setFeedback] = useState<'idle' | 'wrong' | 'ok'>('idle')
  const [showExplain, setShowExplain] = useState(false)
  const [wrongAttempts, setWrongAttempts] = useState(0)

  const quizItem = lesson.quiz[quizIndex]

  function resetQuizState() {
    setSelected(null)
    setFillValue('')
    setFeedback('idle')
    setShowExplain(false)
    setWrongAttempts(0)
  }

  function goQuiz() {
    setPhase('quiz')
    setQuizIndex(0)
    resetQuizState()
  }

  function handleCheck() {
    if (!quizItem) return
    const answer = quizItem.type === 'mcq' ? selected : fillValue
    const ok = checkQuizItem(quizItem, answer)
    if (ok) {
      setFeedback('ok')
      setShowExplain(true)
    } else {
      setFeedback('wrong')
      setWrongAttempts((n) => n + 1)
    }
  }

  function handleShowAnswer() {
    if (!quizItem) return
    if (quizItem.type === 'mcq') {
      setSelected(quizItem.correctIndex)
    } else {
      setFillValue(quizItem.answer)
    }
    setFeedback('ok')
    setShowExplain(true)
  }

  function handleContinue() {
    if (feedback !== 'ok') return
    const last = quizIndex >= lesson.quiz.length - 1
    if (last) {
      onCompleted(lesson.id)
      setPhase('done')
      return
    }
    setQuizIndex((i) => i + 1)
    resetQuizState()
  }

  const phaseLabel =
    phase === 'learn'
      ? t.phaseLearn
      : phase === 'quiz'
        ? t.phaseQuiz
        : t.phaseDone

  return (
    <section className="lesson">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          {t.backHome}
        </button>
        <div className="progress" aria-label={t.lessonProgressAria}>
          <span>{t.lessonProgress(index + 1, total)}</span>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="exercise-meta">
        <span className="pill">{t.pillBasics}</span>
        <span className="pill muted">{phaseLabel}</span>
      </div>

      <label className="lesson-jump">
        <span className="lesson-jump-label">{t.jumpLesson}</span>
        <select
          className="lesson-jump-select"
          value={lesson.id}
          aria-label={t.jumpLessonAria}
          onChange={(e) => {
            const id = e.target.value
            if (id !== lesson.id) onJump(id)
          }}
        >
          {lessons.map((item, i) => {
            const done = doneLessonIds.includes(item.id)
            return (
              <option key={item.id} value={item.id}>
                {i + 1}. {item.title}
                {done ? ` · ${t.lessonDone}` : ''}
              </option>
            )
          })}
        </select>
      </label>

      <h2 className="exercise-title">{lesson.title}</h2>
      <p className="exercise-goal">{lesson.subtitle}</p>

      {phase === 'learn' && (
        <>
          <div className="lesson-body">
            {lesson.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
          <div className="actions">
            <button type="button" className="btn-primary" onClick={goQuiz}>
              {t.goToQuiz}
            </button>
          </div>
        </>
      )}

      {phase === 'quiz' && quizItem && (
        <QuizCard
          item={quizItem}
          step={quizIndex}
          total={lesson.quiz.length}
          selected={selected}
          fillValue={fillValue}
          feedback={feedback}
          showExplain={showExplain}
          canShowAnswer={wrongAttempts >= SHOW_ANSWER_AFTER_WRONG}
          onSelect={(i) => {
            setSelected(i)
            setFeedback('idle')
          }}
          onFill={(v) => {
            setFillValue(v)
            setFeedback('idle')
          }}
          onCheck={handleCheck}
          onShowAnswer={handleShowAnswer}
          onContinue={handleContinue}
        />
      )}

      {phase === 'done' && (
        <div className="lesson-done">
          <p className="feedback feedback-ok" role="status">
            {t.lessonDoneMsg}
          </p>
          <div className="actions">
            {hasNext ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() => onNext(lesson.id)}
              >
                {t.nextLesson}
              </button>
            ) : (
              <button type="button" className="btn-primary" onClick={onBack}>
                {t.backToHome}
              </button>
            )}
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setPhase('learn')
                resetQuizState()
              }}
            >
              {t.rereadLesson}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function Block({ block }: { block: LessonBlock }) {
  if (block.type === 'text') {
    return <p className="lesson-text">{block.body}</p>
  }
  if (block.type === 'callout') {
    return (
      <aside className="lesson-callout">
        <strong>{block.title}</strong>
        <p>{block.body}</p>
      </aside>
    )
  }
  return (
    <figure className="lesson-code">
      {block.caption && (
        <figcaption className="lesson-code-cap">{block.caption}</figcaption>
      )}
      <pre className="code-block code-readonly">
        <code>{block.code}</code>
      </pre>
    </figure>
  )
}

type QuizCardProps = {
  item: QuizItem
  step: number
  total: number
  selected: number | null
  fillValue: string
  feedback: 'idle' | 'wrong' | 'ok'
  showExplain: boolean
  canShowAnswer: boolean
  onSelect: (i: number) => void
  onFill: (v: string) => void
  onCheck: () => void
  onShowAnswer: () => void
  onContinue: () => void
}

function QuizCard({
  item,
  step,
  total,
  selected,
  fillValue,
  feedback,
  showExplain,
  canShowAnswer,
  onSelect,
  onFill,
  onCheck,
  onShowAnswer,
  onContinue,
}: QuizCardProps) {
  const { t } = useLanguage()
  const canCheck =
    item.type === 'mcq' ? selected !== null : fillValue.trim().length > 0

  return (
    <div className="quiz-card">
      <p className="quiz-step">{t.questionStep(step + 1, total)}</p>
      <h3 className="quiz-question">{item.question}</h3>

      {item.type === 'mcq' ? (
        <ul className="quiz-options">
          {item.options.map((opt, i) => {
            const picked = selected === i
            return (
              <li key={i}>
                <button
                  type="button"
                  className={`quiz-option ${picked ? 'is-picked' : ''}`}
                  onClick={() => feedback !== 'ok' && onSelect(i)}
                  disabled={feedback === 'ok'}
                >
                  <span className="quiz-letter">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <label className="quiz-fill">
          <span className="sr-only">{t.yourAnswer}</span>
          <input
            value={fillValue}
            onChange={(e) => feedback !== 'ok' && onFill(e.target.value)}
            placeholder={item.placeholder ?? t.writeAnswer}
            disabled={feedback === 'ok'}
            spellCheck={false}
            autoComplete="off"
            className={feedback === 'wrong' ? 'blank-wrong-light' : ''}
          />
        </label>
      )}

      <div className="actions">
        {feedback !== 'ok' ? (
          <>
            <button
              type="button"
              className="btn-primary"
              onClick={onCheck}
              disabled={!canCheck}
            >
              {t.check}
            </button>
            {canShowAnswer && (
              <button
                type="button"
                className="btn-ghost"
                onClick={onShowAnswer}
              >
                {t.showAnswer}
              </button>
            )}
          </>
        ) : (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {step >= total - 1 ? t.finishLesson : t.nextQuestion}
          </button>
        )}
      </div>

      {feedback === 'wrong' && (
        <p className="feedback feedback-wrong" role="status">
          {t.quizWrong}
        </p>
      )}
      {feedback === 'ok' && (
        <p className="feedback feedback-ok" role="status">
          {t.correct}
        </p>
      )}
      {showExplain && <p className="hint">{item.explanation}</p>}
    </div>
  )
}
