import { Point, Points } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const particleColors = ['white']

function Particles({ size = 3000 }) {
  const { width, height } = useThree((state) => state.viewport)
  const ref = useRef()


  useFrame(() => {
    ref.current.rotation.z  += -0.0004
  })



  return (
    <Points ref={ref}  limit={size}>
      <pointsMaterial size={0.05} vertexColors/>
      {Array.from({ length: size }).map((_, i) => (
        <Point 
          key={i}
          position={[(0.3 - Math.random()) * width * 10, 2 * height + Math.random() ** 2 * height * -5, (0.5 - Math.random()) * 25]}
          color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
        />
      ))}
    </Points>
  )
}

export { Particles }