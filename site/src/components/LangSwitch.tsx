import { useLanguage } from '../i18n/LanguageContext'

export function LangSwitch() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t.langSwitchAria}>
      <button
        type="button"
        className={`lang-btn ${lang === 'tr' ? 'is-active' : ''}`}
        onClick={() => setLang('tr')}
        aria-pressed={lang === 'tr'}
      >
        TR
      </button>
      <span className="lang-sep" aria-hidden>
        /
      </span>
      <button
        type="button"
        className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        ENG
      </button>
    </div>
  )
}
