import { NextPage } from 'next'
import React, { useRef, useMemo } from 'react'
import { BsMouseFill } from 'react-icons/bs'

import { CharAnimation } from '@/components/common'
import { IconList, About } from '@/components/layout'
import { ProgressBar } from '@/components/screen'
import { frontendIcons, backendIcons, otherIcons, toolIcons } from '@/utils/icons'

const IndexPage: NextPage = () => {
  const topRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)

  const timeText = useMemo(() => {
    const date = new Date()
    const hour = date.getHours()
    if (hour >= 5 && hour < 12) {
      return 'Good Morning!!'
    }
    if (hour >= 12 && hour < 18) {
      return 'Good Afternoon!!'
    }
    return 'Good Evening!!'
  }, [])

  return (
    <main className='font-mono text-gray-200'>
      <ProgressBar topRef={topRef} aboutRef={aboutRef} skillsRef={skillRef} />
      <div className='my-10 flex flex-col items-center gap-20'>
        <div
          id='top'
          className='flex h-screen -translate-y-12 flex-col items-center justify-center text-2xl font-thin text-gray-200 md:text-5xl'
          ref={topRef}
        >
          <div className='mb-10 w-fit bg-background bg-opacity-70 p-5 md:p-10'>
            <h1>{timeText}</h1>
            <div className='flex gap-10'>
              <h1>I&apos;m</h1>
              <CharAnimation char='imaimai.' className='text-emerald-500' />
            </div>
            <h1>Front End Developer</h1>
          </div>
          <div className='flex flex-col items-center gap-3 text-2xl'>
            <p>Scroll Down</p>
            <BsMouseFill className='animate-bounce' />
          </div>
        </div>
        <About aboutRef={aboutRef} />
        <div id='skill' className='w-9/10 bg-background bg-opacity-70 p-10 lg:w-3/5 xl:w-1/2' ref={skillRef}>
          <h2 className='w-fit border-b-2 border-emerald-400 text-2xl'>Skill</h2>
          <div className='my-5'>
            <p className='text-xl font-thin text-emerald-400'>Front End</p>
            <IconList icons={frontendIcons} />
          </div>
          <hr className='border-dotted border-gray-400' />
          <div className='my-5'>
            <p className='text-xl font-thin text-emerald-400'>Back End</p>
            <IconList icons={backendIcons} />
          </div>
          <hr className='border-dotted border-gray-400' />
          <div className='my-5'>
            <p className='text-xl font-thin text-emerald-400'>Other</p>
            <IconList icons={otherIcons} />
          </div>
          <hr className='border-dotted border-gray-400' />
          <div className='my-5'>
            <p className='text-xl font-thin text-emerald-400'>Tools</p>
            <IconList icons={toolIcons} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
