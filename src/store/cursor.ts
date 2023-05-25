import { ReactNode } from 'react'
import { atom } from 'recoil'

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
})
