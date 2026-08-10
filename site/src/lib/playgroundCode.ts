import type { Lang } from '../i18n/types'

export const PLAYGROUND_STARTER_TR = `print("Merhaba KodAtölye")
`

export const PLAYGROUND_STARTER_EN = `print("Hello KodAtölye")
`

export function getPlaygroundStarter(lang: Lang): string {
  return lang === 'en' ? PLAYGROUND_STARTER_EN : PLAYGROUND_STARTER_TR
}

/** Shared code so drawer and fullscreen stay in sync. */
let sharedCode = PLAYGROUND_STARTER_TR
const listeners = new Set<(code: string) => void>()

export function getPlaygroundCode(): string {
  return sharedCode
}

export function setPlaygroundCode(code: string): void {
  sharedCode = code
  for (const listener of listeners) listener(code)
}

/** If the editor still has a starter snippet, swap it when language changes. */
export function syncPlaygroundStarter(lang: Lang): void {
  const next = getPlaygroundStarter(lang)
  const other = lang === 'en' ? PLAYGROUND_STARTER_TR : PLAYGROUND_STARTER_EN
  if (sharedCode === other || sharedCode === next) {
    setPlaygroundCode(next)
  }
}

export function subscribePlaygroundCode(
  listener: (code: string) => void,
): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
