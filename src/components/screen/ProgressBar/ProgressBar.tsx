import { motion, useScroll, useSpring } from 'framer-motion'
import { CgScrollV } from 'react-icons/cg'
import { useRecoilState } from 'recoil'

import { ProgressCircle } from '@/components/common'
import { cursorState } from '@/store/cursor'

import { ProgressBarProps } from './ProgressBar.types'

export const ProgressBar: React.FC<ProgressBarProps> = ({ aboutRef, topRef, skillsRef }: ProgressBarProps) => {
  const [_, setCursor] = useRecoilState(cursorState)
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

  const handleMouseEnter = () => {
    setCursor({
      text: <CgScrollV className='text-3xl' />,
      variant: 'move',
    })
  }

  const handleMouseLeave = () => {
    setCursor({
      text: '🐸',
      variant: 'default',
    })
  }

  return (
    <div className='hidden md:block'>
      <motion.div className='fixed bottom-0 left-5 top-0 w-1 origin-top bg-emerald-400' style={{ scaleY }} />
      <motion.div className='fixed bottom-0 left-4 top-0 w-0.5 bg-emerald-500' style={{ scaleY }} />
      <motion.div className='fixed bottom-0 left-3 top-0 w-0.5 origin-bottom bg-emerald-600' style={{ scaleY }} />
      <div className='fixed left-10 z-10 my-10 flex flex-col gap-10 text-2xl font-thin text-gray-200'>
        <a href=' #top' className='flex items-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProgressCircle progress={topScrollYProgress} />
          <span className='transition-all hover:text-emerald-400'>Top</span>
        </a>
        <a href=' #about' className='flex items-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProgressCircle progress={aboutScrollYProgress} />
          <span className='transition-all hover:text-emerald-400'>About</span>
        </a>
        <a href=' #skill' className='flex items-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ProgressCircle progress={skillsScrollYProgress} />
          <span className='transition-all hover:text-emerald-400'>Skill</span>
        </a>
      </div>
    </div>
  )
}

export default ProgressBar
