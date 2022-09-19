import React, { useRef } from 'react'
import * as THREE from 'three'
import { Environment} from '@react-three/drei'
import { LayerMaterial,  Depth, Noise} from 'lamina'




function Environ() {


  return (

    <>
    <Environment background>    
    <mesh scale={60}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth colorB='#411e58' colorA="#49a09d" alpha={1} mode="radial" near={130} far={190} origin={[100, 100, -100]} />
      </LayerMaterial>
    </mesh>
  </Environment>

  </>
  )
}

export default Environ