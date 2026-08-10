import type { ExamPack } from '../types'

type ExamPickerProps = {
  packs: ExamPack[]
  progress: Record<string, number>
  onBack: () => void
  onPick: (examId: string) => void
}

export function ExamPicker({ packs, progress, onBack, onPick }: ExamPickerProps) {
  return (
    <section className="exercise-list">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Ana sayfa
        </button>
        <span className="meta">{packs.length} exam</span>
      </header>

      <h2 className="exercise-title">Sınava çalış</h2>
      <p className="exercise-goal">
        Bir exam seç. Önce ne yapman gerektiğini oku, sonra soruları çöz.
      </p>

      <ul className="exam-pick-list">
        {packs.map((pack) => {
          const done = progress[pack.examId] ?? 0
          // 2 mcq + blanks estimated later in parent; show pack title only here
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
                  {done > 0 ? `${done} soru çözüldü` : 'Henüz başlanmadı'} →
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
