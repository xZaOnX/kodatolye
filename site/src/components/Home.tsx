import { useLanguage } from '../i18n/LanguageContext'

type HomeProps = {
  lessonCount: number
  examCount: number
  questionCount: number
  lessonsDone: number
  questionsDone: number
  onStartBasics: () => void
  onStartExamPrep: () => void
  onStartPlayground: () => void
}

export function Home({
  lessonCount,
  examCount,
  questionCount,
  lessonsDone,
  questionsDone,
  onStartBasics,
  onStartExamPrep,
  onStartPlayground,
}: HomeProps) {
  const { t } = useLanguage()

  return (
    <section className="home">
      <p className="eyebrow">{t.homeEyebrow}</p>
      <h1 className="brand">KodAtölye</h1>
      <p className="lede">{t.homeLede}</p>

      <div className="path-grid">
        <button type="button" className="path-card" onClick={onStartBasics}>
          <span className="path-kicker">{t.path1Kicker}</span>
          <span className="path-title">{t.path1Title}</span>
          <span className="path-desc">{t.path1Desc}</span>
          <span className="path-meta">
            {t.path1Meta(lessonsDone, lessonCount)}
          </span>
        </button>

        <button type="button" className="path-card" onClick={onStartExamPrep}>
          <span className="path-kicker">{t.path2Kicker}</span>
          <span className="path-title">{t.path2Title}</span>
          <span className="path-desc">{t.path2Desc}</span>
          <span className="path-meta">
            {t.path2Meta(examCount, questionsDone, questionCount)}
          </span>
        </button>

        <button
          type="button"
          className="path-card path-card--wide"
          onClick={onStartPlayground}
        >
          <span className="path-kicker">{t.path3Kicker}</span>
          <span className="path-title">{t.path3Title}</span>
          <span className="path-desc">{t.path3Desc}</span>
          <span className="path-meta">{t.path3Meta}</span>
        </button>
      </div>
    </section>
  )
}
