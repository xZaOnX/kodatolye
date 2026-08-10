import { useState } from 'react'
import type { IntermediateSessionItem } from '../types'
import { useLanguage } from '../i18n/LanguageContext'
import { intermediateSolutions } from '../data/intermediateSolutions'
import { SHOW_ANSWER_AFTER_WRONG } from '../lib/showAnswer'
import { CodeMirrorEditor } from './CodeMirrorEditor'
import {
  runCodingChallenge,
  runFullProgramChallenge,
  type ChallengeRunResult,
} from '../lib/challengeRunner'
import { ensurePyodide } from '../lib/pyodideRunner'

type IntermediateSessionProps = {
  examTitle: string
  items: IntermediateSessionItem[]
  onBack: () => void
  onItemSolved: (itemId: string) => void
  onFinished: () => void
}

export function IntermediateSession({
  examTitle,
  items,
  onBack,
  onItemSolved,
  onFinished,
}: IntermediateSessionProps) {
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

  if (!item) return null

  return (
    <section className="exam-session intermediate-session">
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
        <span className="pill">
          {item.kind === 'coding' ? t.pillCoding : t.pillFull}
        </span>
        <span className="pill muted">{examTitle}</span>
        <span className="pill muted">{t.trackIntermediate}</span>
      </div>

      {item.kind === 'coding' ? (
        <CodingStep
          key={item.data.id}
          item={item}
          onSolved={() => onItemSolved(item.data.id)}
          onContinue={goNext}
          isLast={index >= total - 1}
        />
      ) : (
        <FullProgramStep
          key={item.data.id}
          item={item}
          onSolved={() => onItemSolved(item.data.id)}
          onContinue={goNext}
          isLast={index >= total - 1}
        />
      )}
    </section>
  )
}

function CodingStep({
  item,
  onSolved,
  onContinue,
  isLast,
}: {
  item: Extract<IntermediateSessionItem, { kind: 'coding' }>
  onSolved: () => void
  onContinue: () => void
  isLast: boolean
}) {
  const { t } = useLanguage()
  const challenge = item.data
  const solution = intermediateSolutions[challenge.id]
  const [code, setCode] = useState(challenge.starterCode)
  const [showHint, setShowHint] = useState(false)
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState<ChallengeRunResult | null>(null)
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const solved = Boolean(result?.ok)

  async function check() {
    setRunning(true)
    setResult(null)
    try {
      await ensurePyodide()
      const res = await runCodingChallenge(challenge, code)
      setResult(res)
      if (res.ok) onSolved()
      else setWrongAttempts((n) => n + 1)
    } catch (err) {
      setWrongAttempts((n) => n + 1)
      setResult({
        ok: false,
        results: [
          {
            name: 'runtime',
            ok: false,
            detail:
              err instanceof Error ? err.message : t.playgroundLoadError,
          },
        ],
      })
    } finally {
      setRunning(false)
    }
  }

  function showAnswer() {
    if (!solution) return
    setCode(solution)
    setResult({ ok: true, results: [] })
    onSolved()
  }

  return (
    <div className="challenge-step">
      <h2 className="exercise-title">{challenge.title}</h2>
      <p className="exercise-goal">{challenge.purpose}</p>

      <div className="brief-box">
        <h3 className="brief-box-title">{t.fnSignature}</h3>
        <pre className="challenge-sig">{challenge.signature}</pre>
        <h3 className="brief-box-title">{t.fnExamples}</h3>
        <ul className="fn-examples">
          {challenge.examples.map((ex) => (
            <li key={ex.call}>
              <code>{ex.call}</code>
              <span>→</span>
              <code>{ex.result}</code>
            </li>
          ))}
        </ul>
      </div>

      <CodeMirrorEditor
        key={challenge.id}
        value={code}
        onChange={setCode}
        placeholderText={t.playgroundEditorPlaceholder}
      />

      {challenge.hint && (
        <div className="actions">
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setShowHint((v) => !v)}
          >
            {showHint ? t.hideHint : t.hint}
          </button>
        </div>
      )}
      {showHint && challenge.hint && (
        <p className="hint-box">{challenge.hint}</p>
      )}

      <ResultPanel result={result} timedOutLabel={t.playgroundTimeout(12)} />

      <div className="actions">
        <button
          type="button"
          className="btn-primary"
          onClick={check}
          disabled={running || solved}
        >
          {running ? t.playgroundStatusRunning : t.check}
        </button>
        {!solved &&
          solution &&
          wrongAttempts >= SHOW_ANSWER_AFTER_WRONG && (
            <button
              type="button"
              className="btn-ghost"
              onClick={showAnswer}
              disabled={running}
            >
              {t.showAnswer}
            </button>
          )}
        {solved && (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {isLast ? t.finish : t.nextArrow}
          </button>
        )}
      </div>
      {solved && <p className="ok-msg">{t.codingSolved}</p>}
    </div>
  )
}

function FullProgramStep({
  item,
  onSolved,
  onContinue,
  isLast,
}: {
  item: Extract<IntermediateSessionItem, { kind: 'full' }>
  onSolved: () => void
  onContinue: () => void
  isLast: boolean
}) {
  const { t } = useLanguage()
  const challenge = item.data
  const solution = intermediateSolutions[challenge.id]
  const [code, setCode] = useState(challenge.starterCode)
  const [showHint, setShowHint] = useState(false)
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState<ChallengeRunResult | null>(null)
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const solved = Boolean(result?.ok)

  async function check() {
    setRunning(true)
    setResult(null)
    try {
      await ensurePyodide()
      const res = await runFullProgramChallenge(challenge, code)
      setResult(res)
      if (res.ok) onSolved()
      else setWrongAttempts((n) => n + 1)
    } catch (err) {
      setWrongAttempts((n) => n + 1)
      setResult({
        ok: false,
        results: [
          {
            name: 'runtime',
            ok: false,
            detail:
              err instanceof Error ? err.message : t.playgroundLoadError,
          },
        ],
      })
    } finally {
      setRunning(false)
    }
  }

  function showAnswer() {
    if (!solution) return
    setCode(solution)
    setResult({ ok: true, results: [] })
    onSolved()
  }

  return (
    <div className="challenge-step">
      <h2 className="exercise-title">{challenge.title}</h2>
      <p className="exercise-goal">{challenge.brief}</p>

      <div className="brief-box">
        <h3 className="brief-box-title">{t.briefWhat}</h3>
        <ol className="brief-steps">
          {challenge.goalBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ol>
        {challenge.rubricNotes && (
          <p className="meta">{challenge.rubricNotes}</p>
        )}
        <h3 className="brief-box-title">{t.challengeInputFiles}</h3>
        <ul className="fn-examples">
          {Object.keys(challenge.inputFiles).map((name) => (
            <li key={name}>
              <code>{name}</code>
            </li>
          ))}
        </ul>
      </div>

      <CodeMirrorEditor
        key={challenge.id}
        value={code}
        onChange={setCode}
        placeholderText={t.playgroundEditorPlaceholder}
        minHeight="280px"
      />

      {challenge.hint && (
        <div className="actions">
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setShowHint((v) => !v)}
          >
            {showHint ? t.hideHint : t.hint}
          </button>
        </div>
      )}
      {showHint && challenge.hint && (
        <p className="hint-box">{challenge.hint}</p>
      )}

      <ResultPanel result={result} timedOutLabel={t.playgroundTimeout(12)} />

      <div className="actions">
        <button
          type="button"
          className="btn-primary"
          onClick={check}
          disabled={running || solved}
        >
          {running ? t.playgroundStatusRunning : t.check}
        </button>
        {!solved &&
          solution &&
          wrongAttempts >= SHOW_ANSWER_AFTER_WRONG && (
            <button
              type="button"
              className="btn-ghost"
              onClick={showAnswer}
              disabled={running}
            >
              {t.showAnswer}
            </button>
          )}
        {solved && (
          <button type="button" className="btn-primary" onClick={onContinue}>
            {isLast ? t.finish : t.nextArrow}
          </button>
        )}
      </div>
      {solved && <p className="ok-msg">{t.fullSolved}</p>}
    </div>
  )
}

function ResultPanel({
  result,
  timedOutLabel,
}: {
  result: ChallengeRunResult | null
  timedOutLabel: string
}) {
  const { t } = useLanguage()
  if (!result) return null

  if (result.timedOut) {
    return <p className="err-msg">{timedOutLabel}</p>
  }

  return (
    <div className="challenge-results" role="status">
      {result.results.map((r) => (
        <div
          key={r.name}
          className={`challenge-result ${r.ok ? 'is-ok' : 'is-bad'}`}
        >
          <strong>
            {r.ok ? '✓' : '✗'} {r.name}
          </strong>
          {r.detail && <pre className="challenge-detail">{r.detail}</pre>}
        </div>
      ))}
      {result.stderr && !result.ok && (
        <pre className="challenge-detail">{result.stderr}</pre>
      )}
      {result.ok && <p className="ok-msg">{t.correct}</p>}
    </div>
  )
}
