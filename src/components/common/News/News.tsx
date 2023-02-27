import { motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'
import { FaFrog } from 'react-icons/fa'

import { NEWS } from '@/constants/news'

import { NewsProps } from './News.type'

const NewsTab = () => (
  <div className='relative z-0 flex max-h-32 flex-col gap-3 overflow-scroll border border-gray-200 bg-primary p-2 text-xs'>
    {NEWS.map((news, index) => (
      <>
        {index !== 0 && <hr className='border-dashed' />}
        <a
          key={news.title}
          href={news.link || ''}
          target='_blank'
          rel='noreferrer'
          className='flex cursor-pointer flex-row items-center border-x border-gray-200 px-1 transition-all hover:bg-gray-200 hover:text-primary'
        >
          <div className='flex flex-col'>
            <p className='text-secondary'>{news.date}</p>
            <div className='flex flex-row items-center gap-5'>
              <FaFrog className='ml-1' />
              <div className='flex flex-col'>
                <p className='text-sm'>{news.title}</p>
                <p>{news.description}</p>
              </div>
            </div>
          </div>
          <motion.div
            className='ml-auto mr-5 flex h-3 w-3 items-center justify-center p-2'
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            🐸
          </motion.div>
        </a>
      </>
    ))}
  </div>
)

export const News = ({ mode = 'relative' }: NewsProps) => {
  const recentNews = useMemo(() => NEWS[0], [])
  const [isAnimationStart, setIsAnimationStart] = useState(false)

  const className = useMemo(() => {
    if (mode === 'relative') {
      return 'w-full text-xs'
    }
    if (mode === 'absolute') {
      return 'absolute mx-3 w-1/3'
    }
    return ''
  }, [mode])

  return (
    <div className={`${className} top-1 left-52`}>
      <div className='relative z-10 overflow-hidden whitespace-nowrap border border-gray-200 bg-primary text-gray-200'>
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-80%' }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className='flex flex-nowrap gap-5'
        >
          <p>{`${recentNews.title}::${recentNews.description}::${recentNews.date}`}</p>
          <p>{`${recentNews.title}::${recentNews.description}::${recentNews.date}`}</p>
        </motion.div>
      </div>
      <button
        type='button'
        className='absolute right-0 z-30 border border-gray-200 bg-background px-2 transition-all hover:bg-gray-200 hover:text-background md:top-0'
        onClick={() => {
          setIsAnimationStart(!isAnimationStart)
        }}
      >
        Open NEWS
      </button>
      <div className={`${isAnimationStart ? '-translate-y-0' : '-translate-y-full opacity-0'} transition-all`}>
        <NewsTab />
      </div>
    </div>
  )
}

export default News
