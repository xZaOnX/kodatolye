import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { PythonPlayground } from './PythonPlayground'

type PlaygroundDockProps = {
  /** Hide the floating tab (e.g. when fullscreen playground is open). */
  hidden?: boolean
}

export function PlaygroundDock({ hidden = false }: PlaygroundDockProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (hidden) setOpen(false)
  }, [hidden])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (hidden) return null

  return (
    <div className={`playground-dock${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="playground-tab"
        aria-expanded={open}
        aria-controls="playground-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="playground-tab-label">{t.playgroundTab}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="playground-backdrop"
            aria-label={t.playgroundCloseAria}
            onClick={() => setOpen(false)}
          />
          <aside
            id="playground-drawer"
            className="playground-drawer"
            role="dialog"
            aria-label={t.playgroundDrawerAria}
          >
            <PythonPlayground mode="drawer" onClose={() => setOpen(false)} />
          </aside>
        </>
      )}
    </div>
  )
}
