import useMouse from './useMouse'

export const useVariants = () => {
  const mousePosition = useMouse()

  let mouseXPosition = 0
  let mouseYPosition = 0
  if (mousePosition.x !== null) {
    mouseXPosition = mousePosition.x
  }

  if (mousePosition.y !== null) {
    mouseYPosition = mousePosition.y
  }

  return {
    default: {
      opacity: 0.75,
      height: 30,
      width: 30,
      fontSize: '20px',
      backgroundColor: '#A7FF83',
      x: mouseXPosition + 15,
      y: mouseYPosition - 60,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    move: {
      opacity: 1,
      backgroundColor: '#A7FF83',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 15,
      y: mouseYPosition - 60,
    },
    link: {
      opacity: 1,
      backgroundColor: '#D9D9D9',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 15,
      y: mouseYPosition - 60,
    },
  }
}

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
}
