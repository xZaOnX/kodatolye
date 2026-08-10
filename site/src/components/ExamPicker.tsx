import type { ExamPack, ExamTrack, IntermediatePack } from '../types'
import { useLanguage } from '../i18n/LanguageContext'

type ExamPickerProps = {
  track: ExamTrack
  onTrackChange: (track: ExamTrack) => void
  beginnerPacks: ExamPack[]
  intermediatePacks: IntermediatePack[]
  beginnerProgress: Record<string, { done: number; total: number }>
  intermediateProgress: Record<string, { done: number; total: number }>
  onBack: () => void
  onPick: (examId: string) => void
}

export function ExamPicker({
  track,
  onTrackChange,
  beginnerPacks,
  intermediatePacks,
  beginnerProgress,
  intermediateProgress,
  onBack,
  onPick,
}: ExamPickerProps) {
  const { t } = useLanguage()
  const isBeginner = track === 'beginner'

  return (
    <section className="exercise-list">
      <header className="exercise-top">
        <button type="button" className="btn-ghost" onClick={onBack}>
          {t.backHome}
        </button>
        <span className="meta">
          {t.examMeta(
            isBeginner ? beginnerPacks.length : intermediatePacks.length,
          )}
        </span>
      </header>

      <h2 className="exercise-title">{t.examPickerTitle}</h2>
      <p className="exercise-goal">
        {isBeginner ? t.examPickerGoalBeginner : t.examPickerGoalIntermediate}
      </p>

      <div className="track-tabs" role="tablist" aria-label={t.trackTabsAria}>
        <button
          type="button"
          role="tab"
          aria-selected={isBeginner}
          className={`track-tab${isBeginner ? ' is-active' : ''}`}
          onClick={() => onTrackChange('beginner')}
        >
          {t.trackBeginner}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isBeginner}
          className={`track-tab${!isBeginner ? ' is-active' : ''}`}
          onClick={() => onTrackChange('intermediate')}
        >
          {t.trackIntermediate}
        </button>
      </div>

      {!isBeginner && (
        <p className="track-soft-hint">{t.intermediateSoftHint}</p>
      )}

      {isBeginner ? (
        <ul className="exam-pick-list">
          {beginnerPacks.map((pack) => {
            const prog = beginnerProgress[pack.examId] ?? {
              done: 0,
              total: 0,
            }
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
                    {prog.done > 0
                      ? t.questionsProgress(prog.done, prog.total)
                      : t.notStarted}{' '}
                    →
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <ul className="exam-pick-list">
          {intermediatePacks.map((pack) => {
            const prog = intermediateProgress[pack.examId] ?? {
              done: 0,
              total: 0,
            }
            const beg = beginnerProgress[pack.examId]
            const begIncomplete = beg && beg.done < beg.total
            return (
              <li key={pack.examId}>
                <button
                  type="button"
                  className="exam-pick-card"
                  onClick={() => onPick(pack.examId)}
                >
                  <span className="exam-pick-title">{pack.examTitle}</span>
                  <span className="exam-pick-desc">{pack.summary}</span>
                  {begIncomplete && (
                    <span className="exam-pick-recommend">
                      {t.beginnerRecommended}
                    </span>
                  )}
                  <span className="exam-pick-meta">
                    {prog.done > 0
                      ? t.questionsProgress(prog.done, prog.total)
                      : t.notStarted}{' '}
                    →
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
