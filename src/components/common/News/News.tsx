import { motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'

import { NEWS } from '@/constants/news'

import { NewsProps } from './News.type'

const NewsTab = () => (
  <div className='relative z-0 flex flex-col gap-3 border border-gray-200 bg-primary p-2 text-xs'>
    {NEWS.map((news, index) => (
      <>
        {index !== 0 && <hr className='border-dashed' />}
        <a
          key={news.title}
          href={news.link || ''}
          target='_blank'
          rel='noreferrer'
          className='flex cursor-pointer flex-col border-x border-gray-200 px-1 transition-all hover:bg-gray-200 hover:text-primary'
        >
          <p className='text-secondary'>{news.date}</p>
          <div className='flex flex-row gap-5'>
            <p>{news.title}</p>
            <p>{news.description}</p>
          </div>
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
    <div className={`${className} top-0 left-52`}>
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
