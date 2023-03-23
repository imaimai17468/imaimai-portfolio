/* eslint-disable */
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

const BackgroundAnimation = () => {
  const vantaRef = useRef(null)

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xa7ff83,
      backgroundColor: 0x202428,
    })

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      ref={vantaRef}
    />
  )
}

export default BackgroundAnimation
