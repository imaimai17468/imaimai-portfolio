import useMouse from '@react-hook/mouse-position'

export const useVariants = (ref: React.MutableRefObject<null>) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY
  }

  return {
    default: {
      opacity: 0.75,
      height: 30,
      width: 30,
      fontSize: '20px',
      backgroundColor: '#A7FF83',
      x: mouseXPosition + 10,
      y: mouseYPosition - 100,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    tab: {
      opacity: 1,
      backgroundColor: '#29B550',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 10,
      y: mouseYPosition - 100,
    },
    news: {
      opacity: 1,
      backgroundColor: '#EF5151',
      color: '#000',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 10,
      y: mouseYPosition - 100,
    },
  }
}

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
}
