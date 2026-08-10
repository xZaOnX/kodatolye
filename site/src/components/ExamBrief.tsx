import type { ExamPack } from '../types'
import { useLanguage } from '../i18n/LanguageContext'

type ExamBriefProps = {
  pack: ExamPack
  functionCount: number
  blankCount: number
  onBack: () => void
  onStart: () => void
}

export function ExamBrief({
  pack,
  functionCount,
  blankCount,
  onBack,
  onStart,
}: ExamBriefProps) {
  const { t } = useLanguage()
  const totalQuestions = pack.mcqs.length + functionCount + blankCount

  return (
    <section className="exam-brief">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          {t.backExams}
        </button>
        <span className="pill">{t.briefPill}</span>
      </header>

      <h2 className="exercise-title">{pack.examTitle}</h2>
      <p className="lede-tight">{pack.summary}</p>

      <div className="brief-box">
        <h3 className="brief-box-title">{t.briefWhat}</h3>
        <ol className="brief-steps">
          {pack.goalBullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ol>
      </div>

      <div className="brief-box">
        <h3 className="brief-box-title">{t.briefOrder}</h3>
        <ol className="brief-steps">
          <li>{t.briefStepMcq(pack.mcqs.length)}</li>
          <li>{t.briefStepFn(functionCount)}</li>
          <li>{t.briefStepBlank(blankCount)}</li>
        </ol>
      </div>

      <p className="meta">{t.briefTotal(totalQuestions)}</p>

      <div className="actions">
        <button type="button" className="btn-primary" onClick={onStart}>
          {t.startQuestions}
        </button>
      </div>
    </section>
  )
}
