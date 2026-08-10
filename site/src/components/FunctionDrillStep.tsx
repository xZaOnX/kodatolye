import { useState } from 'react'
import type { FunctionDrill } from '../types'
import { checkAnswers } from '../lib/checkAnswers'
import { SHOW_ANSWER_AFTER_WRONG } from '../lib/showAnswer'
import { BlankCode } from './BlankCode'
import { useLanguage } from '../i18n/LanguageContext'

type FunctionDrillStepProps = {
  drill: FunctionDrill
  onSolved: () => void
  onContinue: () => void
  isLast: boolean
}

export function FunctionDrillStep({
  drill,
  onSolved,
  onContinue,
  isLast,
}: FunctionDrillStepProps) {
  const { t } = useLanguage()
  const [phase, setPhase] = useState<'teach' | 'write'>('teach')
  const [values, setValues] = useState<Record<string, string>>({})
  const [wrong, setWrong] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'wrong' | 'ok'>('idle')
  const [showHint, setShowHint] = useState(false)
  const [wrongAttempts, setWrongAttempts] = useState(0)

  function handleCheck() {
    const result = checkAnswers(
      {
        id: drill.id,
        examId: drill.examId,
        examTitle: drill.examTitle,
        level: 2,
        title: drill.functionName,
        goal: drill.purpose,
        hint: drill.hint,
        template: drill.template,
        blanks: drill.blanks,
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
      setWrongAttempts((n) => n + 1)
    }
  }

  function showAnswer() {
    const filled: Record<string, string> = {}
    for (const blank of drill.blanks) {
      filled[blank.id] = blank.answer
    }
    setValues(filled)
    setWrong([])
    setStatus('ok')
    onSolved()
  }

  if (phase === 'teach') {
    return (
      <div className="fn-teach">
        <h2 className="exercise-title">
          <code className="fn-name">{drill.functionName}</code>
        </h2>
        <p className="exercise-goal">{drill.purpose}</p>

        <div className="brief-box">
          <h3 className="brief-box-title">{t.fnSignature}</h3>
          <pre className="code-block code-readonly">
            <code>{drill.signature}</code>
          </pre>
        </div>

        <div className="brief-box">
          <h3 className="brief-box-title">{t.fnExamples}</h3>
          <ul className="fn-examples">
            {drill.examples.map((ex) => (
              <li key={ex.call}>
                <code>{ex.call}</code>
                <span>→</span>
                <code>{ex.result}</code>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lesson-callout">
          <strong>{t.fnWhy}</strong>
          <p>{drill.whyItMatters}</p>
        </aside>

        <div className="actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => setPhase('write')}
          >
            {t.fnUnderstood}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fn-write">
      <h2 className="exercise-title">
        {t.fnWritePrefix}{' '}
        <code className="fn-name">{drill.functionName}</code>
      </h2>
      <p className="exercise-goal">{drill.purpose}</p>

      <BlankCode
        template={drill.template}
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
          <>
            <button type="button" className="btn-primary" onClick={handleCheck}>
              {t.check}
            </button>
            {wrongAttempts >= SHOW_ANSWER_AFTER_WRONG && (
              <button type="button" className="btn-ghost" onClick={showAnswer}>
                {t.showAnswer}
              </button>
            )}
          </>
        ) : (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {isLast ? t.finish : t.nextArrow}
          </button>
        )}
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setShowHint((v) => !v)}
        >
          {showHint ? t.hideHint : t.hint}
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setPhase('teach')}
        >
          {t.fnReread}
        </button>
      </div>

      {showHint && <p className="hint">{drill.hint}</p>}
      {status === 'wrong' && (
        <p className="feedback feedback-wrong" role="status">
          {t.blankWrong}
        </p>
      )}
      {status === 'ok' && (
        <p className="feedback feedback-ok" role="status">
          {t.fnSolved}
        </p>
      )}
    </div>
  )
}
