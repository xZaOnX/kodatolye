import type { ExamPack } from '../types'

type ExamBriefProps = {
  pack: ExamPack
  blankCount: number
  onBack: () => void
  onStart: () => void
}

export function ExamBrief({ pack, blankCount, onBack, onStart }: ExamBriefProps) {
  const totalQuestions = pack.mcqs.length + blankCount

  return (
    <section className="exam-brief">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Examler
        </button>
        <span className="pill">Özet</span>
      </header>

      <h2 className="exercise-title">{pack.examTitle}</h2>
      <p className="lede-tight">{pack.summary}</p>

      <div className="brief-box">
        <h3 className="brief-box-title">Ne yapman gerekiyor?</h3>
        <ol className="brief-steps">
          {pack.goalBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ol>
      </div>

      <p className="meta">
        Bu çalışmada {pack.mcqs.length} çoktan seçmeli + {blankCount} boşluk ={' '}
        {totalQuestions} soru var.
      </p>

      <div className="actions">
        <button type="button" className="btn-primary" onClick={onStart}>
          Sorulara başla
        </button>
      </div>
    </section>
  )
}
