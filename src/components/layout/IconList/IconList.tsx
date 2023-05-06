import { motion } from 'framer-motion'

import { containerMotion } from '@/utils/motions'

import { IconListProps } from './IconList.types'

const IconList: React.FC<IconListProps> = ({ icons }: IconListProps) => (
  <motion.div
    className='my-5 grid grid-cols-3 justify-items-center gap-y-5 text-4xl md:grid-cols-6 md:gap-y-10'
    variants={containerMotion}
    initial='hidden'
    whileInView='visible'
  >
    {icons.map((icon, i) => (
      <div key={i} className='flex flex-col items-center justify-center transition-all hover:text-emerald-400'>
        {icon.icon}
        <p className='mt-2 text-center text-sm font-thin'>{icon.name}</p>
      </div>
    ))}
  </motion.div>
)

export default IconList
