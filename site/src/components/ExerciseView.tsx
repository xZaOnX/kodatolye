import { useState } from 'react'
import type { Exercise } from '../types'
import { checkAnswers } from '../lib/checkAnswers'
import { BlankCode } from './BlankCode'

type ExerciseViewProps = {
  exercise: Exercise
  index: number
  total: number
  hasPrev: boolean
  hasNext: boolean
  onBack: () => void
  onPrev: () => void
  onNext: () => void
  onSolved: () => void
}

export function ExerciseView({
  exercise,
  index,
  total,
  hasPrev,
  hasNext,
  onBack,
  onPrev,
  onNext,
  onSolved,
}: ExerciseViewProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [wrong, setWrong] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'wrong' | 'ok'>('idle')
  const [showHint, setShowHint] = useState(false)

  function handleChange(blankId: string, value: string) {
    setValues((prev) => ({ ...prev, [blankId]: value }))
    if (status !== 'idle') {
      setStatus('idle')
      setWrong([])
    }
  }

  function handleCheck() {
    const result = checkAnswers(exercise, values)
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
    <section className="exercise">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Liste
        </button>
        <div className="progress" aria-label="İlerleme">
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
        <span className="pill">Seviye {exercise.level}</span>
        <span className="pill muted">{exercise.examTitle}</span>
      </div>

      <h2 className="exercise-title">{exercise.title}</h2>
      <p className="exercise-goal">{exercise.goal}</p>

      <BlankCode
        template={exercise.template}
        values={values}
        wrong={wrong}
        disabled={status === 'ok'}
        onChange={handleChange}
      />

      <div className="actions">
        <button
          type="button"
          className="btn-primary"
          onClick={handleCheck}
          disabled={status === 'ok'}
        >
          Kontrol et
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setShowHint((v) => !v)}
        >
          {showHint ? 'İpucunu gizle' : 'İpucu'}
        </button>
      </div>

      {showHint && <p className="hint">{exercise.hint}</p>}

      {status === 'wrong' && (
        <p className="feedback feedback-wrong" role="status">
          Bazı boşluklar yanlış — kırmızı olanlara tekrar bak.
        </p>
      )}
      {status === 'ok' && (
        <p className="feedback feedback-ok" role="status">
          Doğru. Bu parçayı yazarak pekiştirdin.
        </p>
      )}

      <div className="nav-row">
        <button
          type="button"
          className="btn-ghost"
          onClick={onPrev}
          disabled={!hasPrev}
        >
          ← Önceki
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={onNext}
          disabled={!hasNext}
        >
          Sonraki →
        </button>
      </div>
    </section>
  )
}
