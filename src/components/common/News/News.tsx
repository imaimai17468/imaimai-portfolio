import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

import { NEWS } from '@/constants/news'

import { NewsProps } from './News.type'

export const News = ({ mode = 'static' }: NewsProps) => {
  const recentNews = useMemo(() => NEWS[0], [])
  const className = useMemo(() => {
    if (mode === 'static') {
      return 'w-full text-xs'
    }
    if (mode === 'absolute') {
      return 'absolute mx-3 w-1/3'
    }
    return ''
  }, [mode])

  return (
    <div
      className={`${className} top-1 left-48 overflow-hidden whitespace-nowrap border border-gray-200 bg-primary font-bold text-gray-200`}
    >
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
  )
}

export default News
