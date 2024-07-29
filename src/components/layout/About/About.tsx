import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { FaBirthdayCake } from 'react-icons/fa'
import { GiPaintBrush } from 'react-icons/gi'
import { SiTwitter, SiGithub } from 'react-icons/si'

import { CharAnimation, Button } from '@/components/common'
import { useCursor } from '@/hooks/useCursor'
import { childMotion, containerMotion } from '@/utils/motions'

import { AboutProps } from './About.types'

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
  const router = useRouter()
  const { cursorChange2Link, cursorChange2Default, cursorChange2Page } = useCursor()

  const handleClick = () => {
    router.push('/about')
  }

  const isAboutPage = useMemo(() => router.pathname === '/about', [router.pathname])

  return (
    <div id='about' className='my-12 w-9/10 bg-background bg-opacity-70 p-10 lg:my-48 lg:w-3/5 xl:w-1/2' ref={aboutRef}>
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
                aria-label='twitter'
              >
                <SiTwitter className='text-xl text-emerald-400 transition-all hover:text-emerald-300' />
              </a>
              <a
                href='https://github.com/imaimai17468'
                target='_blank'
                rel='noopener noreferrer'
                onMouseEnter={cursorChange2Link}
                onMouseLeave={cursorChange2Default}
                aria-label='github'
              >
                <SiGithub className='text-xl text-emerald-400 transition-all hover:text-emerald-300' />
              </a>
            </div>
          </div>
          <p className='text-gray-400'>株式会社ゆめみ</p>
          <p className='text-gray-400'>フロントエンドエンジニア</p>
          <motion.div className='my-3' variants={containerMotion} initial='hidden' whileInView='visible'>
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
      {!isAboutPage && (
        <div className='mx-auto w-fit'>
          <Button onClick={handleClick} onMouseEnter={cursorChange2Page} onMouseLeave={cursorChange2Default}>
            ABOUT
          </Button>
        </div>
      )}
    </div>
  )
}

export default About
