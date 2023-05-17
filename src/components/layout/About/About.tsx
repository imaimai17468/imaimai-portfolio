import { motion } from 'framer-motion'
import Image from 'next/image'
import { AiOutlineLink } from 'react-icons/ai'
import { FaBirthdayCake } from 'react-icons/fa'
import { GiMaterialsScience, GiPaintBrush } from 'react-icons/gi'
import { SiTwitter, SiGithub } from 'react-icons/si'
import { useRecoilState } from 'recoil'

import { CharAnimation } from '@/components/common'
import { cursorState } from '@/store/cursor'
import { childMotion, containerMotion } from '@/utils/motions'

import { AboutProps } from './About.types'

const About: React.FC<AboutProps> = ({ aboutRef }: AboutProps) => {
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
  )
}

export default About
