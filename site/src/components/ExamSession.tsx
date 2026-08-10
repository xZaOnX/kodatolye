import { useState } from 'react'
import type { ExamSessionItem } from '../types'
import { checkAnswers } from '../lib/checkAnswers'
import { useLanguage } from '../i18n/LanguageContext'
import { BlankCode } from './BlankCode'
import { FunctionDrillStep } from './FunctionDrillStep'

type ExamSessionProps = {
  examTitle: string
  items: ExamSessionItem[]
  onBack: () => void
  onItemSolved: (itemId: string) => void
  onFinished: () => void
}

export function ExamSession({
  examTitle,
  items,
  onBack,
  onItemSolved,
  onFinished,
}: ExamSessionProps) {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)
  const item = items[index]
  const total = items.length

  function goNext() {
    if (index >= total - 1) {
      onFinished()
      return
    }
    setIndex((i) => i + 1)
  }

  function pillLabel(kind: ExamSessionItem['kind']): string {
    if (kind === 'mcq') return t.pillMcq
    if (kind === 'function') return t.pillFunction
    return t.pillBlank
  }

  if (!item) {
    return null
  }

  return (
    <section className="exam-session">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          {t.backBrief}
        </button>
        <div className="progress" aria-label={t.questionProgressAria}>
          <span>
            {index + 1} / {total}
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
        <span className="pill">{pillLabel(item.kind)}</span>
        <span className="pill muted">{examTitle}</span>
      </div>

      {item.kind === 'mcq' && (
        <McqStep
          key={item.data.id}
          question={item.data.question}
          options={item.data.options}
          correctIndex={item.data.correctIndex}
          explanation={item.data.explanation}
          onSolved={() => onItemSolved(item.data.id)}
          onContinue={goNext}
          isLast={index >= total - 1}
        />
      )}
      {item.kind === 'function' && (
        <FunctionDrillStep
          key={item.data.id}
          drill={item.data}
          onSolved={() => onItemSolved(item.data.id)}
          onContinue={goNext}
          isLast={index >= total - 1}
        />
      )}
      {item.kind === 'blank' && (
        <BlankStep
          key={item.data.id}
          title={item.data.title}
          goal={item.data.goal}
          hint={item.data.hint}
          template={item.data.template}
          blanks={item.data.blanks}
          onSolved={() => onItemSolved(item.data.id)}
          onContinue={goNext}
          isLast={index >= total - 1}
        />
      )}
    </section>
  )
}

type McqStepProps = {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  onSolved: () => void
  onContinue: () => void
  isLast: boolean
}

function McqStep({
  question,
  options,
  correctIndex,
  explanation,
  onSolved,
  onContinue,
  isLast,
}: McqStepProps) {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'wrong' | 'ok'>('idle')

  function check() {
    if (selected === null) return
    if (selected === correctIndex) {
      setStatus('ok')
      onSolved()
    } else {
      setStatus('wrong')
    }
  }

  return (
    <div className="quiz-card">
      <h3 className="quiz-question">{question}</h3>
      <ul className="quiz-options">
        {options.map((opt, i) => (
          <li key={i}>
            <button
              type="button"
              className={`quiz-option ${selected === i ? 'is-picked' : ''}`}
              onClick={() => {
                if (status === 'ok') return
                setSelected(i)
                setStatus('idle')
              }}
              disabled={status === 'ok'}
            >
              <span className="quiz-letter">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          </li>
        ))}
      </ul>

      <div className="actions">
        {status !== 'ok' ? (
          <button
            type="button"
            className="btn-primary"
            onClick={check}
            disabled={selected === null}
          >
            {t.check}
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {isLast ? t.finish : t.nextQuestionArrow}
          </button>
        )}
      </div>

      {status === 'wrong' && (
        <p className="feedback feedback-wrong" role="status">
          {t.mcqWrong}
        </p>
      )}
      {status === 'ok' && (
        <>
          <p className="feedback feedback-ok" role="status">
            {t.correct}
          </p>
          <p className="hint">{explanation}</p>
        </>
      )}
      {status === 'wrong' && <p className="hint">{explanation}</p>}
    </div>
  )
}

type BlankStepProps = {
  title: string
  goal: string
  hint: string
  template: string
  blanks: { id: string; answer: string; accept?: string[] }[]
  onSolved: () => void
  onContinue: () => void
  isLast: boolean
}

function BlankStep({
  title,
  goal,
  hint,
  template,
  blanks,
  onSolved,
  onContinue,
  isLast,
}: BlankStepProps) {
  const { t } = useLanguage()
  const [values, setValues] = useState<Record<string, string>>({})
  const [wrong, setWrong] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'wrong' | 'ok'>('idle')
  const [showHint, setShowHint] = useState(false)

  function handleCheck() {
    const result = checkAnswers(
      {
        blanks,
        id: '',
        examId: '',
        examTitle: '',
        level: 1,
        title,
        goal,
        hint,
        template,
      },
      values,
    )
    if (result.ok) {
      setWrong([])
      setStatus('ok')
      onSolved()
    } else {
      setWrong(result.wrong)
      setStatus('wrong')
    }
  }

  return (
    <div>
      <h2 className="exercise-title">{title}</h2>
      <p className="exercise-goal">{goal}</p>
      <BlankCode
        template={template}
        values={values}
        wrong={wrong}
        disabled={status === 'ok'}
        onChange={(id, v) => {
          setValues((prev) => ({ ...prev, [id]: v }))
          if (status !== 'idle') {
            setStatus('idle')
            setWrong([])
          }
        }}
      />
      <div className="actions">
        {status !== 'ok' ? (
          <button type="button" className="btn-primary" onClick={handleCheck}>
            {t.check}
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {isLast ? t.finish : t.nextQuestionArrow}
          </button>
        )}
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setShowHint((v) => !v)}
        >
          {showHint ? t.hideHint : t.hint}
        </button>
      </div>
      {showHint && <p className="hint">{hint}</p>}
      {status === 'wrong' && (
        <p className="feedback feedback-wrong" role="status">
          {t.blankWrong}
        </p>
      )}
      {status === 'ok' && (
        <p className="feedback feedback-ok" role="status">
          {t.correct}
        </p>
      )}
    </div>
  )
}
