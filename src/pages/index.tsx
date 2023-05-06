import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useMemo } from 'react'
import { BsMouseFill } from 'react-icons/bs'
import { FaBirthdayCake } from 'react-icons/fa'
import { GiMaterialsScience, GiPaintBrush } from 'react-icons/gi'
import { SiTwitter, SiGithub } from 'react-icons/si'
import { useRecoilValue } from 'recoil'

import { CharAnimation } from '@/components/common'
import { MainLayout, IconList } from '@/components/layout'
import { BackgroundAnimation, ProgressBar } from '@/components/screen'
import { useVariants, spring } from '@/hooks/useVariants'
import { cursorState } from '@/store/cursor'
import { frontendIcons, backendIcons, otherIcons, toolIcons } from '@/utils/icons'
import { containerMotion, childMotion } from '@/utils/motions'

const IndexPage: NextPage = () => {
  const cursor = useRecoilValue(cursorState)
  const ref = useRef(null)
  const variants = useVariants(ref)

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
    <>
      <Head>
        <title>imaimai Portfolio</title>
        <meta name='description' content='いまいまいのポートフォリオ' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/frog_circle.png' />
      </Head>
      <main ref={ref} className='font-mono text-gray-200'>
        <div>
          <MainLayout>
            <BackgroundAnimation />
            <motion.div
              variants={variants}
              className='invisible absolute z-50 flex items-center justify-center rounded-full md:visible'
              animate={cursor.variant}
              transition={spring}
            >
              <div>{cursor.text}</div>
            </motion.div>
            <ProgressBar />
            <div
              id='top'
              className='flex h-screen -translate-y-24 flex-col items-center justify-center text-2xl font-thin text-gray-200 md:text-5xl'
            >
              <div className='mb-10 w-fit bg-background bg-opacity-70 p-5 md:p-10'>
                <h1>{timeText}</h1>
                <div className='flex gap-10'>
                  <h1>I&apos;m</h1>
                  <CharAnimation char='imaimai.' className='text-emerald-500' />
                </div>
                <h1>Front End Developer</h1>
              </div>
              <div className='flex items-center gap-3 text-2xl'>
                <p>Scroll Down</p>
                <BsMouseFill className='animate-bounce' />
              </div>
            </div>
            <div className='my-10 flex flex-col items-center gap-20'>
              <div className='w-9/10 bg-background bg-opacity-70 p-10 lg:w-1/2'>
                <h2 id='about' className='w-fit border-b-2 border-emerald-400 text-2xl'>
                  About
                </h2>
                <div className='my-5 flex flex-col items-center justify-between md:flex-row md:gap-20'>
                  <div>
                    <div className='flex items-center gap-5'>
                      <CharAnimation char='Toshiki_Imai' className='text-3xl' />
                      <div className='flex gap-2'>
                        <a href='https://twitter.com/imaimai17468' target='_blank' rel='noopener noreferrer'>
                          <SiTwitter className='text-xl text-emerald-400 transition-all hover:text-emerald-300' />
                        </a>
                        <a href='https://github.com/imaimai17468' target='_blank' rel='noopener noreferrer'>
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
                  <Image
                    alt='profile'
                    src='/images/frog_circle.png'
                    width={200}
                    height={200}
                    className='rounded-full'
                  />
                </div>
              </div>
              <div className='w-9/10 bg-background bg-opacity-70 p-10 lg:w-1/2'>
                <h2 id='skill' className='w-fit border-b-2 border-emerald-400 text-2xl'>
                  Skill
                </h2>
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
    </>
  )
}

export default IndexPage
