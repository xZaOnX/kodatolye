import { useEffect, useRef, useState } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap, lineNumbers, placeholder } from '@codemirror/view'
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from '@codemirror/commands'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import { useLanguage } from '../i18n/LanguageContext'
import {
  getPlaygroundCode,
  getPlaygroundStarter,
  setPlaygroundCode,
  subscribePlaygroundCode,
  syncPlaygroundStarter,
} from '../lib/playgroundCode'
import { ensurePyodide, runPython } from '../lib/pyodideRunner'

type PythonPlaygroundProps = {
  mode: 'drawer' | 'fullscreen'
  onClose?: () => void
  onBack?: () => void
}

type ConsoleLine = {
  kind: 'out' | 'err' | 'meta'
  text: string
}

export function PythonPlayground({
  mode,
  onClose,
  onBack,
}: PythonPlaygroundProps) {
  const { lang, t } = useLanguage()
  const editorParentRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const [ready, setReady] = useState(false)
  const [loadingRuntime, setLoadingRuntime] = useState(false)
  const [running, setRunning] = useState(false)
  const [lines, setLines] = useState<ConsoleLine[]>([])
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    syncPlaygroundStarter(lang)
  }, [lang])

  useEffect(() => {
    const parent = editorParentRef.current
    if (!parent || viewRef.current) return

    const start = getPlaygroundCode() || getPlaygroundStarter(lang)
    if (!getPlaygroundCode()) setPlaygroundCode(start)
    const view = new EditorView({
      parent,
      state: EditorState.create({
        doc: start,
        extensions: [
          lineNumbers(),
          history(),
          python(),
          oneDark,
          placeholder(t.playgroundEditorPlaceholder),
          keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              setPlaygroundCode(update.state.doc.toString())
            }
          }),
          EditorView.theme({
            '&': {
              height: '100%',
              fontSize: '13px',
            },
            '.cm-scroller': {
              fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
              overflow: 'auto',
            },
            '.cm-content': {
              minHeight: '100%',
            },
          }),
        ],
      }),
    })
    viewRef.current = view
    setReady(true)

    const unsub = subscribePlaygroundCode((code) => {
      const current = view.state.doc.toString()
      if (current === code) return
      view.dispatch({
        changes: { from: 0, to: current.length, insert: code },
      })
    })

    return () => {
      unsub()
      view.destroy()
      viewRef.current = null
    }
    // Mount once; placeholder language updates are not critical mid-session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function preload() {
    setLoadError(null)
    setLoadingRuntime(true)
    try {
      await ensurePyodide()
    } catch (err) {
      setLoadError(
        err instanceof Error ? err.message : t.playgroundLoadError,
      )
    } finally {
      setLoadingRuntime(false)
    }
  }

  useEffect(() => {
    void preload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleRun() {
    const code = viewRef.current?.state.doc.toString() ?? getPlaygroundCode()
    setRunning(true)
    setLoadError(null)
    try {
      const result = await runPython(code)
      const next: ConsoleLine[] = []
      if (result.stdout.trim()) {
        next.push({ kind: 'out', text: result.stdout })
      }
      if (result.timedOut) {
        next.push({ kind: 'err', text: t.playgroundTimeout(8) })
      } else if (result.stderr.trim()) {
        next.push({ kind: 'err', text: result.stderr })
      }
      if (!result.stdout.trim() && !result.stderr.trim() && result.ok) {
        next.push({ kind: 'meta', text: t.playgroundNoOutput })
      }
      setLines(next)
    } catch (err) {
      setLines([
        {
          kind: 'err',
          text:
            err instanceof Error
              ? err.message
              : t.playgroundLoadError,
        },
      ])
    } finally {
      setRunning(false)
    }
  }

  function handleClear() {
    setLines([])
  }

  const statusLabel = loadError
    ? t.playgroundStatusError
    : loadingRuntime
      ? t.playgroundStatusLoading
      : running
        ? t.playgroundStatusRunning
        : ready
          ? t.playgroundStatusReady
          : '…'

  return (
    <div className={`playground playground--${mode}`}>
      <header className="playground-bar">
        <div className="playground-bar-left">
          {mode === 'fullscreen' && onBack && (
            <button type="button" className="btn-ghost" onClick={onBack}>
              {t.playgroundBack}
            </button>
          )}
          {mode === 'drawer' && onClose && (
            <button
              type="button"
              className="btn-ghost playground-close"
              onClick={onClose}
              aria-label={t.playgroundCloseAria}
            >
              ✕
            </button>
          )}
          <div>
            <p className="playground-kicker">{t.playgroundKicker}</p>
            <h2 className="playground-title">{t.playgroundTitle}</h2>
          </div>
        </div>
        <div className="playground-actions">
          <span
            className={`playground-status${loadingRuntime ? ' is-loading' : ''}${loadError ? ' is-error' : ''}`}
          >
            {statusLabel}
          </span>
          <button
            type="button"
            className="btn-ghost"
            onClick={handleClear}
            disabled={running || lines.length === 0}
          >
            {t.playgroundClear}
          </button>
          <button
            type="button"
            className="btn-primary playground-run"
            onClick={() => void handleRun()}
            disabled={running || loadingRuntime || Boolean(loadError)}
          >
            {running ? '…' : t.playgroundRun}
          </button>
        </div>
      </header>

      {loadError && (
        <div className="playground-banner" role="alert">
          <span>{loadError}</span>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => void preload()}
          >
            {t.playgroundRetry}
          </button>
        </div>
      )}

      <div className="playground-body">
        <div className="playground-editor" ref={editorParentRef} />
        <div className="playground-console" aria-live="polite">
          <p className="playground-console-label">{t.playgroundOutput}</p>
          {lines.length === 0 ? (
            <pre className="playground-console-empty">
              {t.playgroundOutputEmpty}
            </pre>
          ) : (
            <pre className="playground-console-out">
              {lines.map((line, i) => (
                <span
                  key={`${i}-${line.kind}`}
                  className={`console-${line.kind}`}
                >
                  {line.text}
                  {i < lines.length - 1 ? '\n' : ''}
                </span>
              ))}
            </pre>
          )}
        </div>
      </div>
    </div>
  )
}
