import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import React, { useRef, useMemo } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BsMouseFill } from 'react-icons/bs'
import { FaBirthdayCake } from 'react-icons/fa'
import { GiMaterialsScience, GiPaintBrush } from 'react-icons/gi'
import { SiTwitter, SiGithub } from 'react-icons/si'
import { useRecoilState } from 'recoil'

import { CharAnimation } from '@/components/common'
import { MainLayout, IconList } from '@/components/layout'
import { BackgroundAnimation, ProgressBar } from '@/components/screen'
import { useVariants, spring } from '@/hooks/useVariants'
import { cursorState } from '@/store/cursor'
import { frontendIcons, backendIcons, otherIcons, toolIcons } from '@/utils/icons'
import { containerMotion, childMotion } from '@/utils/motions'

const IndexPage: NextPage = () => {
  const [cursor, setCursor] = useRecoilState(cursorState)
  const variants = useVariants()
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

  return (
    <main className='font-mono text-gray-200'>
      <div>
        <MainLayout>
          <BackgroundAnimation />
          <motion.div
            variants={variants}
            style={{ position: 'fixed' }}
            className='invisible z-50 flex items-center justify-center rounded-full md:visible'
            animate={cursor.variant}
            transition={spring}
          >
            <div>{cursor.text}</div>
          </motion.div>
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
            <div
              id='about'
              className='my-12 w-9/10 bg-background bg-opacity-70 p-10 lg:my-48 lg:w-3/5 xl:w-1/2'
              ref={aboutRef}
            >
              <h2 className='w-fit border-b-2 border-emerald-400 text-2xl'>About</h2>
              <div className='my-5 flex flex-col items-center justify-between md:flex-row md:gap-20'>
                <div>
                  <div className='flex items-center gap-5'>
                    <CharAnimation char='Toshiki_Imai' className='text-3xl' />
                    <div className='flex gap-2'>
                      <a
                        href='https://twitter.com/imaimai17468'
                        target='_blank'
                        rel='noopener noreferrer'
                        onMouseEnter={cursorChange2Link}
                        onMouseLeave={cursorChange2Default}
                      >
                        <SiTwitter className='text-xl text-emerald-400 transition-all hover:text-emerald-300' />
                      </a>
                      <a
                        href='https://github.com/imaimai17468'
                        target='_blank'
                        rel='noopener noreferrer'
                        onMouseEnter={cursorChange2Link}
                        onMouseLeave={cursorChange2Default}
                      >
                        <SiGithub className='text-xl text-emerald-400 transition-all hover:text-emerald-300' />
                      </a>
                    </div>
                  </div>
                  <p className='text-gray-400'>長岡技術科学大学 電気電子情報工学課程 4年</p>
                  <p className='text-gray-400'>フロントエンドエンジニア</p>
                  <motion.div className='my-3' variants={containerMotion} initial='hidden' whileInView='visible'>
                    <motion.div className='flex items-center gap-3' variants={childMotion}>
                      <GiMaterialsScience />
                      <span>脳情報工学研究室</span>
                    </motion.div>
                    <motion.div className='flex items-center gap-3' variants={childMotion}>
                      <FaBirthdayCake />
                      <span>2001/08/01</span>
                    </motion.div>
                    <motion.div className='flex items-center gap-3' variants={childMotion}>
                      <GiPaintBrush />
                      <span>開発・料理・MCバトル観戦</span>
                    </motion.div>
                  </motion.div>
                </div>
                <Image alt='profile' src='/images/frog_circle.png' width={200} height={200} className='rounded-full' />
              </div>
            </div>
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
        </MainLayout>
      </div>
    </main>
  )
}

export default IndexPage
