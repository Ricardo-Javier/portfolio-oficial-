import React from 'react'
import { Scroll, ScrollControls } from '@react-three/drei'
import Glitch from './Components/Glitch'
import { Lights } from './Components/Lights'
import { Particles } from './Components/Particles'
import { Layout } from './Views/Layout/Layout'





function Scene() {  

  return (
    <ScrollControls damping={7} pages={11}>      
      <Glitch rotation={[0.1,-20.9,-0.4]}  position={[6,-25,-6]}/>
      <Lights/>
      <Particles />    
      <Scroll html style={{ width: '100%' }}>   
      <Layout />
      </Scroll>
    </ScrollControls>
  )
}

export { Scene }
