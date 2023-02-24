import { useEffect, useState, useMemo } from 'react'

import { News } from '@/components/common'

export const Header = () => {
  const [time, setTime] = useState(() => {
    const date = new Date()
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    return `${hour}:${minute}`
  })

  const date = useMemo(() => {
    const date = new Date()
    const day = date.getDay()
    const dayOfMonth = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return `${week[day]} ${dayOfMonth} ${monthName[month]} ${year}`
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date()
      const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
      const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      setTime(`${hour}:${minute}`)
    }, 1000 * 60)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className='flex w-full flex-row items-center border-b border-gray-200 bg-background py-1 font-press text-xs md:text-sm'>
        <div className='flex h-full items-center border-r border-gray-200 px-3'>
          <p className='text-gray-200'>imaimai&#39;s portfolio</p>
        </div>
        <div className='invisible grow md:visible'>
          <News mode='absolute' />
        </div>
        <div className='flex h-full items-center border-gray-200 px-3 md:border-l'>
          <p className='text-gray-200'>{time}</p>
        </div>
        <div className='flex h-full items-center border-l border-gray-200 px-3'>
          <p className='text-gray-200'>{date}</p>
        </div>
      </div>
      <div className='visible  md:invisible'>
        <News />
      </div>
    </div>
  )
}

export default Header
