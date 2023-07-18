import { motion, useScroll, useSpring } from 'framer-motion'
import { useMemo } from 'react'

import { ProgressCircle } from '@/components/common'
import { useCursor } from '@/hooks/useCursor'

import { ProgressBarProps } from './ProgressBar.types'

export const ProgressBar: React.FC<ProgressBarProps> = ({ aboutRef, topRef, skillsRef }: ProgressBarProps) => {
  const { scrollYProgress } = useScroll()
  const { scrollYProgress: topScrollYProgress } = useScroll({
    target: topRef,
    offset: ['end start', 'start'],
  })
  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['end', 'start'],
  })
  const { scrollYProgress: skillsScrollYProgress } = useScroll({
    target: skillsRef,
    offset: ['start end', 'end'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const { cursorChange2Move, cursorChange2Default } = useCursor()

  const isShowProgressCircle = useMemo(() => topRef && aboutRef && skillsRef, [topRef, aboutRef, skillsRef])

  return (
    <div>
      <motion.div className='fixed bottom-0 left-5 top-0 w-1 origin-top bg-emerald-400' style={{ scaleY }} />
      <motion.div className='fixed bottom-0 left-4 top-0 w-0.5 bg-emerald-500' style={{ scaleY }} />
      <motion.div className='fixed bottom-0 left-3 top-0 w-0.5 origin-bottom bg-emerald-600' style={{ scaleY }} />
      {isShowProgressCircle && (
        <div className='fixed left-10 -z-10 my-10 flex flex-col gap-10 text-2xl font-thin text-gray-200 lg:z-10'>
          <a
            href=' #top'
            className='flex items-center'
            onMouseEnter={cursorChange2Move}
            onMouseLeave={cursorChange2Default}
          >
            <ProgressCircle progress={topScrollYProgress} />
            <span className='hidden transition-all hover:text-emerald-400 lg:block'>Top</span>
          </a>
          <a
            href=' #about'
            className='flex items-center'
            onMouseEnter={cursorChange2Move}
            onMouseLeave={cursorChange2Default}
          >
            <ProgressCircle progress={aboutScrollYProgress} />
            <span className='hidden transition-all hover:text-emerald-400 lg:block'>About</span>
          </a>
          <a
            href=' #skill'
            className='flex items-center'
            onMouseEnter={cursorChange2Move}
            onMouseLeave={cursorChange2Default}
          >
            <ProgressCircle progress={skillsScrollYProgress} />
            <span className='hidden transition-all hover:text-emerald-400 lg:block'>Skill</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default ProgressBar
