import { AiOutlineLink } from 'react-icons/ai'
import { CgScrollV } from 'react-icons/cg'
import { MdOutlineContactPage } from 'react-icons/md'
import { useRecoilState } from 'recoil'

import { cursorState } from '@/store/cursor'

export const useCursor = () => {
  const [_, setCursor] = useRecoilState(cursorState)

  const cursorChange2Link = () => {
    setCursor({
      text: <AiOutlineLink className='text-3xl' />,
      variant: 'link',
    })
  }

  const cursorChange2Default = () => {
    setCursor({
      text: '🐸',
      variant: 'default',
    })
  }

  const cursorChange2Page = () => {
    setCursor({
      text: <MdOutlineContactPage className='text-3xl' />,
      variant: 'page',
    })
  }

  const cursorChange2Move = () => {
    setCursor({
      text: <CgScrollV className='text-3xl' />,
      variant: 'move',
    })
  }

  return {
    cursorChange2Link,
    cursorChange2Default,
    cursorChange2Page,
    cursorChange2Move,
  }
}
