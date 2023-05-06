import { motion } from 'framer-motion'

import { containerMotion, childMotion } from '@/utils/motions'

import { CharAnimationProps } from './CharAnimation.types'

const CharAnimation: React.FC<CharAnimationProps> = ({ char, className = '' }: CharAnimationProps) => (
  <motion.div className={`flex ${className}`} variants={containerMotion} initial='hidden' whileInView='visible'>
    {Array.from(char).map((char, i) => (
      <motion.h3 key={i} variants={childMotion}>
        {char}
      </motion.h3>
    ))}
  </motion.div>
)

export default CharAnimation
