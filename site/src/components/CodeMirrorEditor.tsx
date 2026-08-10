import { useEffect, useRef } from 'react'
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

type CodeMirrorEditorProps = {
  value: string
  onChange: (code: string) => void
  placeholderText?: string
  minHeight?: string
}

export function CodeMirrorEditor({
  value,
  onChange,
  placeholderText = 'Write Python here…',
  minHeight = '220px',
}: CodeMirrorEditorProps) {
  const parentRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    const parent = parentRef.current
    if (!parent || viewRef.current) return

    const view = new EditorView({
      parent,
      state: EditorState.create({
        doc: value,
        extensions: [
          lineNumbers(),
          history(),
          python(),
          oneDark,
          placeholder(placeholderText),
          keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              onChangeRef.current(update.state.doc.toString())
            }
          }),
          EditorView.theme({
            '&': {
              height: '100%',
              minHeight,
              fontSize: '13px',
            },
            '.cm-scroller': {
              fontFamily: '"IBM Plex Mono", ui-monospace, monospace',
              overflow: 'auto',
            },
            '.cm-content': {
              minHeight,
            },
          }),
        ],
      }),
    })
    viewRef.current = view

    return () => {
      view.destroy()
      viewRef.current = null
    }
    // Mount once per editor instance (parent remounts via key).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const view = viewRef.current
    if (!view) return
    const current = view.state.doc.toString()
    if (current === value) return
    view.dispatch({
      changes: { from: 0, to: current.length, insert: value },
    })
  }, [value])

  return <div className="challenge-editor" ref={parentRef} />
}
