import React, { useRef, useLayoutEffect, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations, useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {Layout} from '../Views/Layout/Layout'



export default function Glitch({ ...props }) {

  const group = useRef()
  const scroll = useScroll()
  const { scene, nodes, materials, animations } = useGLTF('/headglich/scene-transformed.glb')
  const { actions } = useAnimations(animations, scene, group)
  useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))



  
  useFrame((state, delta, clock) => {    
    const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - scroll.offset
    action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration *1) * offset, 90, delta)
    state.camera.position.set(Math.sin(offset) * 26, Math.atan(offset * Math.PI * 15) * -3, Math.cos((offset * Math.PI) /1.7) * -17)
    state.camera.lookAt(5, 0, 0)
  })
  return (
    <group  ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" scale={12} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="headfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="sit2Genesis2FemaleShape" position={[7.58, -0.61, -7.26]}>
                  <group name="polySurface3" position={[-7.79, 2.27, 6.39]}>
                    <mesh name="0" castShadow receiveShadow geometry={nodes['0'].geometry} material={materials.lambert1} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences}> 
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/headglich/scene-transformed.glb')
