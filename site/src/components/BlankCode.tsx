import { Fragment } from 'react'

type BlankCodeProps = {
  template: string
  values: Record<string, string>
  wrong: string[]
  disabled?: boolean
  onChange: (blankId: string, value: string) => void
}

type Part =
  | { type: 'text'; value: string }
  | { type: 'blank'; id: string }

function parseTemplate(template: string): Part[] {
  const parts: Part[] = []
  const token = /\{\{(\w+)\}\}/g
  let cursor = 0

  for (const hit of template.matchAll(token)) {
    const index = hit.index ?? 0
    if (index > cursor) {
      parts.push({ type: 'text', value: template.slice(cursor, index) })
    }
    parts.push({ type: 'blank', id: hit[1] })
    cursor = index + hit[0].length
  }

  if (cursor < template.length) {
    parts.push({ type: 'text', value: template.slice(cursor) })
  }

  return parts
}

export function BlankCode({
  template,
  values,
  wrong,
  disabled,
  onChange,
}: BlankCodeProps) {
  const parts = parseTemplate(template)

  return (
    <pre className="code-block" aria-label="Kod egzersizi">
      <code>
        {parts.map((part, i) => {
          if (part.type === 'text') {
            return <Fragment key={`t-${i}`}>{part.value}</Fragment>
          }

          const isWrong = wrong.includes(part.id)
          const width = Math.max(4, (values[part.id]?.length ?? 0) + 2)

          return (
            <input
              key={`b-${part.id}`}
              className={`blank ${isWrong ? 'blank-wrong' : ''}`}
              value={values[part.id] ?? ''}
              onChange={(e) => onChange(part.id, e.target.value)}
              disabled={disabled}
              aria-label={`Boşluk ${part.id}`}
              spellCheck={false}
              autoComplete="off"
              size={width}
            />
          )
        })}
      </code>
    </pre>
  )
}
