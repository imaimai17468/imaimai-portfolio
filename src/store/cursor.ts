import { ReactNode } from 'react'
import { atom } from 'recoil'

interface Cursor {
  text: ReactNode
  variant: 'default' | 'move' | 'link' | 'page'
}

export const cursorState = atom<Cursor>({
  key: 'cursor',
  default: {
    text: '🐸',
    variant: 'default',
  },
})
