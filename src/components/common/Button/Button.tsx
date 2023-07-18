import { motion } from 'framer-motion'

import s from './Button.module.css'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => (
  <motion.button
    className={`rounded-full bg-gradient-to-r px-4 py-2 font-bold text-gray-100 ${s.shine} ${className}`}
    onClick={() => {
      if (onClick) onClick()
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    onMouseEnter={() => {
      if (onMouseEnter) onMouseEnter()
    }}
    onMouseLeave={() => {
      if (onMouseLeave) onMouseLeave()
    }}
  >
    {children}
  </motion.button>
)

export default Button
