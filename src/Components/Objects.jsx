import { useIntersect, Float } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'



function Objects() {
  const { height, width } = useThree((state) => state.viewport)

  return (
    <>

      <Item position={[-3,-4,2]}>
      <mesh castShadow receiveShadow>
      <sphereBufferGeometry args={[2, 30, 30]} attach="geometry"/>
      <meshStandardMaterial color="white" roughness={0.1} metalness={0.925}   />
      </mesh>
      </Item>
      <Item position={[-15,10,-4]}>
      <mesh castShadow receiveShadow>
      <sphereBufferGeometry args={[1, 30, 30]} attach="geometry"/>
      <meshStandardMaterial color="white" roughness={0.1} metalness={0.925}   />
      </mesh>
      </Item>
      <Item position={[0,-4,-4]}>
      <mesh  castShadow receiveShadow>
      <sphereBufferGeometry args={[1, 30, 30]} attach="geometry"/>
      <meshStandardMaterial color="white" roughness={0.1} metalness={0.925}   />
      </mesh>
      </Item>
   

    </>
  )
}

function Item({ color, position, children }) {
  const visible = useRef()
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const [xRandomFactor, yRandomFactor] = useMemo(() => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5], [])

  useFrame(({ clock }, delta) => {
    // const elapsedTime = clock.getElapsedTime()

    // ref.current.rotation.x = elapsedTime * xRandomFactor
    // ref.current.rotation.y = elapsedTime * yRandomFactor

    // const scale = THREE.MathUtils.damp(ref.current.scale.x, visible.current ? 1.5 : 0.2, 5, delta)
    // ref.current.scale.set(scale, scale, scale)

    
  })

  return (
    <Float position={position} speed={1.7} rotationIntensity={2} floatIntensity={5} dispose={null}>
    <mesh >
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
    </Float>
  )
}

export { Objects }
