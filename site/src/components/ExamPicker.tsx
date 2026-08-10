import type { ExamPack } from '../types'
import { useLanguage } from '../i18n/LanguageContext'

type ExamPickerProps = {
  packs: ExamPack[]
  progress: Record<string, number>
  onBack: () => void
  onPick: (examId: string) => void
}

export function ExamPicker({ packs, progress, onBack, onPick }: ExamPickerProps) {
  const { t } = useLanguage()

  return (
    <section className="exercise-list">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          {t.backHome}
        </button>
        <span className="meta">{t.examMeta(packs.length)}</span>
      </header>

      <h2 className="exercise-title">{t.examPickerTitle}</h2>
      <p className="exercise-goal">{t.examPickerGoal}</p>

      <ul className="exam-pick-list">
        {packs.map((pack) => {
          const done = progress[pack.examId] ?? 0
          return (
            <li key={pack.examId}>
              <button
                type="button"
                className="exam-pick-card"
                onClick={() => onPick(pack.examId)}
              >
                <span className="exam-pick-title">{pack.examTitle}</span>
                <span className="exam-pick-desc">{pack.summary}</span>
                <span className="exam-pick-meta">
                  {done > 0 ? t.questionsSolved(done) : t.notStarted} →
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
