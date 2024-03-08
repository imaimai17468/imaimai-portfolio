import { NextPage } from 'next'
import React, { useRef, useEffect } from 'react'

import { About, Top, Skill, Application } from '@/components/layout'
import { ProgressBar } from '@/components/screen'
import { Loading } from '@/components/screen/Loading/Loading'
import { useCursor } from '@/hooks/useCursor'

const IndexPage: NextPage = () => {
  const topRef = useRef(null)
  const aboutRef = useRef(null)
  const applicationRef = useRef(null)
  const skillRef = useRef(null)
  const { cursorChange2Default } = useCursor()

  useEffect(() => {
    cursorChange2Default()
  }, [])

  return (
    <main className='font-mono text-gray-200'>
      <Loading />
      <ProgressBar topRef={topRef} aboutRef={aboutRef} skillsRef={skillRef} applicationRef={applicationRef} />
      <div className='my-10 flex flex-col items-center gap-20'>
        <Top topRef={topRef} />
        <About aboutRef={aboutRef} />
        <Application applicationRef={applicationRef} />
        <Skill skillRef={skillRef} />
      </div>
    </main>
  )
}

export default IndexPage
