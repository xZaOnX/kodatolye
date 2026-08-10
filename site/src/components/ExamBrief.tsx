import type { ExamPack, ExamTrack, IntermediatePack } from '../types'
import { useLanguage } from '../i18n/LanguageContext'

type ExamBriefProps = {
  track: ExamTrack
  pack: ExamPack
  intermediatePack?: IntermediatePack
  functionCount: number
  blankCount: number
  beginnerDone: number
  beginnerTotal: number
  onBack: () => void
  onStart: () => void
}

export function ExamBrief({
  track,
  pack,
  intermediatePack,
  functionCount,
  blankCount,
  beginnerDone,
  beginnerTotal,
  onBack,
  onStart,
}: ExamBriefProps) {
  const { t } = useLanguage()
  const isBeginner = track === 'beginner'

  if (!isBeginner && intermediatePack) {
    const total =
      intermediatePack.functions.length + 1
    const showRecommend = beginnerDone < beginnerTotal

    return (
      <section className="exam-brief">
        <header className="exercise-top">
          <button type="button" className="btn-ghost" onClick={onBack}>
            {t.backExams}
          </button>
          <span className="pill">{t.trackIntermediate}</span>
        </header>

        <h2 className="exercise-title">{intermediatePack.examTitle}</h2>
        <p className="lede-tight">{intermediatePack.summary}</p>

        {showRecommend && (
          <p className="track-soft-hint">{t.intermediateSoftHint}</p>
        )}

        <div className="brief-box">
          <h3 className="brief-box-title">{t.briefOrder}</h3>
          <ol className="brief-steps">
            <li>
              {t.briefStepCoding(intermediatePack.functions.length)}
            </li>
            <li>{t.briefStepFull}</li>
          </ol>
        </div>

        <p className="meta">{t.briefTotal(total)}</p>

        <div className="actions">
          <button type="button" className="btn-primary" onClick={onStart}>
            {t.startQuestions}
          </button>
        </div>
      </section>
    )
  }

  const totalQuestions = pack.mcqs.length + functionCount + blankCount

  return (
    <section className="exam-brief">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          {t.backExams}
        </button>
        <span className="pill">{t.trackBeginner}</span>
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
