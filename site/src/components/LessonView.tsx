import { useState } from 'react'
import type { Lesson, LessonBlock, QuizItem } from '../types'
import { checkQuizItem } from '../lib/checkQuiz'

type LessonViewProps = {
  lesson: Lesson
  index: number
  total: number
  onBack: () => void
  onCompleted: (lessonId: string) => void
  onNext: (lessonId: string) => void
  hasNext: boolean
}

type Phase = 'learn' | 'quiz' | 'done'

export function LessonView({
  lesson,
  index,
  total,
  onBack,
  onCompleted,
  onNext,
  hasNext,
}: LessonViewProps) {
  const [phase, setPhase] = useState<Phase>('learn')
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [fillValue, setFillValue] = useState('')
  const [feedback, setFeedback] = useState<'idle' | 'wrong' | 'ok'>('idle')
  const [showExplain, setShowExplain] = useState(false)

  const quizItem = lesson.quiz[quizIndex]

  function resetQuizState() {
    setSelected(null)
    setFillValue('')
    setFeedback('idle')
    setShowExplain(false)
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
      setShowExplain(true)
    }
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

  return (
    <section className="lesson">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Ana sayfa
        </button>
        <div className="progress" aria-label="Ders ilerlemesi">
          <span>
            Ders {index + 1} / {total}
          </span>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="exercise-meta">
        <span className="pill">Sıfırdan</span>
        <span className="pill muted">
          {phase === 'learn' ? 'Anlatım' : phase === 'quiz' ? 'Soru' : 'Tamam'}
        </span>
      </div>

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
              Anladım, sorulara geç
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
          onSelect={(i) => {
            setSelected(i)
            setFeedback('idle')
            setShowExplain(false)
          }}
          onFill={(v) => {
            setFillValue(v)
            setFeedback('idle')
            setShowExplain(false)
          }}
          onCheck={handleCheck}
          onContinue={handleContinue}
        />
      )}

      {phase === 'done' && (
        <div className="lesson-done">
          <p className="feedback feedback-ok" role="status">
            Bu dersi bitirdin. Temeli yazarak pekiştirdin.
          </p>
          <div className="actions">
            {hasNext ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() => onNext(lesson.id)}
              >
                Sonraki ders →
              </button>
            ) : (
              <button type="button" className="btn-primary" onClick={onBack}>
                Ana sayfaya dön
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
              Dersi tekrar oku
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
  onSelect: (i: number) => void
  onFill: (v: string) => void
  onCheck: () => void
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
  onSelect,
  onFill,
  onCheck,
  onContinue,
}: QuizCardProps) {
  const canCheck =
    item.type === 'mcq' ? selected !== null : fillValue.trim().length > 0

  return (
    <div className="quiz-card">
      <p className="quiz-step">
        Soru {step + 1} / {total}
      </p>
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
          <span className="sr-only">Cevabın</span>
          <input
            value={fillValue}
            onChange={(e) => feedback !== 'ok' && onFill(e.target.value)}
            placeholder={item.placeholder ?? 'Cevabını yaz'}
            disabled={feedback === 'ok'}
            spellCheck={false}
            autoComplete="off"
            className={feedback === 'wrong' ? 'blank-wrong-light' : ''}
          />
        </label>
      )}

      <div className="actions">
        {feedback !== 'ok' ? (
          <button
            type="button"
            className="btn-primary"
            onClick={onCheck}
            disabled={!canCheck}
          >
            Kontrol et
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {step >= total - 1 ? 'Dersi bitir' : 'Sonraki soru'}
          </button>
        )}
      </div>

      {feedback === 'wrong' && (
        <p className="feedback feedback-wrong" role="status">
          Henüz değil — açıklamayı oku ve tekrar dene.
        </p>
      )}
      {feedback === 'ok' && (
        <p className="feedback feedback-ok" role="status">
          Doğru.
        </p>
      )}
      {showExplain && (
        <p className="hint">{item.explanation}</p>
      )}
    </div>
  )
}
