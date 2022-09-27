import React from 'react'
import { Scroll, ScrollControls } from '@react-three/drei'
import Glitch from './Components/Glitch'
import { Lights } from './Components/Lights'
import { Particles } from './Components/Particles'

import { Html } from './Components/Html'






function Scene() {  

  return (
    <ScrollControls  damping={7} pages={8.6} style={{ height: '100vh', position:'fixed' }}>      
      <Glitch rotation={[0.1,-20.9,-0.4]}  position={[6,-25,-6]}/>     
      <Lights/>
      <Particles />    
      <Scroll html >   
      <Html />
      </Scroll>
    </ScrollControls>
  )
}

export { Scene }
