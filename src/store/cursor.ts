import { ReactNode } from 'react'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

interface Cursor {
  text: ReactNode
  variant: 'default' | 'move' | 'link'
}

export const cursorState = atom<Cursor>({
  key: 'cursor',
  default: {
    text: '🐸',
    variant: 'default',
  },
  effects_UNSTABLE: [persistAtom],
})
