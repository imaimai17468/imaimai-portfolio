import { NextPage } from 'next'
import React, { useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { About, Top, Skill } from '@/components/layout'
import { ProgressBar } from '@/components/screen'
import { cursorState } from '@/store/cursor'

const IndexPage: NextPage = () => {
  const topRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)
  const [_, setCursor] = useRecoilState(cursorState)

  useEffect(() => {
    setCursor({
      text: '🐸',
      variant: 'default',
    })
  }, [])

  return (
    <main className='font-mono text-gray-200'>
      <ProgressBar topRef={topRef} aboutRef={aboutRef} skillsRef={skillRef} />
      <div className='my-10 flex flex-col items-center gap-20'>
        <Top topRef={topRef} />
        <About aboutRef={aboutRef} />
        <Skill skillRef={skillRef} />
      </div>
    </main>
  )
}

export default IndexPage
