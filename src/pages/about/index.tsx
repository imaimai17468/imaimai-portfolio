import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { MdOutlineContactPage } from 'react-icons/md'
import { useRecoilState } from 'recoil'

import { Button } from '@/components/common'
import { TimeTable } from '@/components/feature'
import { About } from '@/components/layout'
import { ProgressBar } from '@/components/screen'
import { ACHIEVEMENTS } from '@/constants/achievememts'
import { EVENTS } from '@/constants/events'
import { HISTORIES } from '@/constants/histories'
import { JOBS } from '@/constants/jobs'
import { cursorState } from '@/store/cursor'

const IndexPage: NextPage = () => {
  const router = useRouter()
  const [_, setCursor] = useRecoilState(cursorState)
  const handleClickButton = () => {
    router.push('/')
  }

  const cursorChange2Page = () => {
    setCursor({
      text: <MdOutlineContactPage className='text-3xl' />,
      variant: 'page',
    })
  }

  const cursorChange2Default = () => {
    setCursor({
      text: '🐸',
      variant: 'default',
    })
  }

  useEffect(() => {
    cursorChange2Default()
  }, [])

  return (
    <main className='font-mono text-gray-200'>
      <ProgressBar />
      <div className='my-10 flex flex-col items-center gap-20'>
        <About />
        <TimeTable title='History' data={HISTORIES} />
        <TimeTable title='Job' data={JOBS} />
        <TimeTable title='Achievement' data={ACHIEVEMENTS} />
        <TimeTable title='Event' data={EVENTS} />
        <Button onClick={handleClickButton} onMouseEnter={cursorChange2Page} onMouseLeave={cursorChange2Default}>
          TOP PAGE
        </Button>
      </div>
    </main>
  )
}

export default IndexPage
