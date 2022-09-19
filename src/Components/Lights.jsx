import React from 'react'
import * as THREE from 'three'


function Lights() {


  return (
    <>
    <directionalLight color="#F5C400" position={[40, 150, -100]}  intensity={100} />
    </>
  )
}


export { Lights }
