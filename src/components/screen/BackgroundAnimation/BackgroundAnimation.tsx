/* eslint-disable */

import React from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'

class BackgroundAnimation extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
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
  }

  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }

  render() {
    return (
      <div
        style={{ height: '100vh', width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        ref={this.vantaRef}
      />
    )
  }
}

export default BackgroundAnimation
