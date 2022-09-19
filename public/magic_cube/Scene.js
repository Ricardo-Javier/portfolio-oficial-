import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[6, 0, -6]} rotation={[-Math.PI, 0, Math.PI / 2]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube001_0" position={[-2.25, 3.68, 3.75]} scale={0.2}>
                <mesh name="Object_4" castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.material} />
              </group>
              <group name="Cube004_1" position={[-2.25, 3.73, -0.55]} scale={0.2}>
                <mesh name="Object_6" castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.material} />
              </group>
              <group name="Cube007_2" position={[-2.27, 2.37, -3.47]} scale={0.2}>
                <mesh name="Object_8" castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.material} />
              </group>
              <group name="Cube011_3" position={[0.63, 2.24, 3.73]} scale={0.2}>
                <mesh name="Object_10" castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.material} />
              </group>
              <group name="Cube014_4" position={[0.63, 2.3, -0.57]} scale={0.2}>
                <mesh name="Object_12" castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.material} />
              </group>
              <group name="Cube017_5" position={[-0.77, 2.35, -3.47]} scale={0.2}>
                <mesh name="Object_14" castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.material} />
              </group>
              <group name="Cube021_6" position={[2.13, 2.22, 3.73]} scale={0.2}>
                <mesh name="Object_16" castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.material} />
              </group>
              <group name="Cube024_7" position={[2.13, 2.28, -0.57]} scale={0.2}>
                <mesh name="Object_18" castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.material} />
              </group>
              <group name="Cube027_8" position={[2.15, 3.72, -3.45]} scale={0.2}>
                <mesh name="Object_20" castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.material} />
              </group>
              <group name="Cube032_9" position={[-3.73, 0.87, -2.13]} scale={0.2}>
                <mesh name="Object_22" castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.material} />
              </group>
              <group name="Cube035_10" position={[0.57, 0.82, -2.13]} scale={0.2}>
                <mesh name="Object_24" castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.material} />
              </group>
              <group name="Cube038_11" position={[3.45, -0.62, -2.15]} scale={0.2}>
                <mesh name="Object_26" castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.material} />
              </group>
              <group name="Cube042_12" position={[-3.75, -0.56, 0.75]} scale={0.2}>
                <mesh name="Object_28" castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.material} />
              </group>
              <group name="Cube045_13" position={[0.55, -0.62, 0.75]} scale={0.2}>
                <mesh name="Object_30" castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.material} />
              </group>
              <group name="Cube048_14" position={[3.45, -0.64, -0.65]} scale={0.2}>
                <mesh name="Object_32" castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials.material} />
              </group>
              <group name="Cube052_15" position={[-3.75, -0.58, 2.25]} scale={0.2}>
                <mesh name="Object_34" castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials.material} />
              </group>
              <group name="Cube055_16" position={[0.55, -0.64, 2.25]} scale={0.2}>
                <mesh name="Object_36" castShadow receiveShadow geometry={nodes.Object_36.geometry} material={materials.material} />
              </group>
              <group name="Cube058_17" position={[3.46, 0.72, 2.26]} scale={0.2}>
                <mesh name="Object_38" castShadow receiveShadow geometry={nodes.Object_38.geometry} material={materials.material} />
              </group>
              <group name="Cube063_18" position={[2.07, -2.08, -3.62]} scale={0.2}>
                <mesh name="Object_40" castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials.material} />
              </group>
              <group name="Cube066_19" position={[2.07, -2.14, 0.68]} scale={0.2}>
                <mesh name="Object_42" castShadow receiveShadow geometry={nodes.Object_42.geometry} material={materials.material} />
              </group>
              <group name="Cube069_20" position={[2.05, -3.58, 3.56]} scale={0.2}>
                <mesh name="Object_44" castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials.material} />
              </group>
              <group name="Cube073_21" position={[-0.85, -3.44, -3.64]} scale={0.2}>
                <mesh name="Object_46" castShadow receiveShadow geometry={nodes.Object_46.geometry} material={materials.material} />
              </group>
              <group name="Cube076_22" position={[-0.85, -3.5, 0.66]} scale={0.2}>
                <mesh name="Object_48" castShadow receiveShadow geometry={nodes.Object_48.geometry} material={materials.material} />
              </group>
              <group name="Cube079_23" position={[0.55, -3.56, 3.56]} scale={0.2}>
                <mesh name="Object_50" castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials.material} />
              </group>
              <group name="Cube083_24" position={[-2.35, -3.42, -3.64]} scale={0.2}>
                <mesh name="Object_52" castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials.material} />
              </group>
              <group name="Cube086_25" position={[-2.35, -3.48, 0.66]} scale={0.2}>
                <mesh name="Object_54" castShadow receiveShadow geometry={nodes.Object_54.geometry} material={materials.material} />
              </group>
              <group name="Cube089_26" position={[-2.33, -2.12, 3.58]} scale={0.2}>
                <mesh name="Object_56" castShadow receiveShadow geometry={nodes.Object_56.geometry} material={materials.material} />
              </group>
              <group name="Circle001_97" position={[-0.2, 0, 0]} rotation={[0.01, 0, -0.01]} scale={7.9}>
                <group name="0000000000000000000000000000_28" scale={0.69}>
                  <mesh name="Object_61" castShadow receiveShadow geometry={nodes.Object_61.geometry} material={materials.material_2} />
                </group>
                <group name="0000000000000000000000000000001_29" rotation={[-0.57, -0.57, -0.87]} scale={1.24}>
                  <mesh name="Object_63" castShadow receiveShadow geometry={nodes.Object_63.geometry} material={materials.material_2} />
                </group>
                <group name="0000000000000000000000000000002_30" scale={2.27}>
                  <mesh name="Object_65" castShadow receiveShadow geometry={nodes.Object_65.geometry} material={materials.material_2} />
                </group>
                <group name="Cube030_52" position={[0.01, 0.38, 0.01]} scale={[0.56, 0.19, 0.56]}>
                  <group name="Cube009_37" position={[-0.66, 0, -0.01]} scale={[0.34, 1, 0.98]}>
                    <group name="Cube002_32" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube_31" scale={0.95}>
                        <mesh name="Object_73" castShadow receiveShadow geometry={nodes.Object_73.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_71" castShadow receiveShadow geometry={nodes.Object_71.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube005_34" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube003_33" scale={0.95}>
                        <mesh name="Object_77" castShadow receiveShadow geometry={nodes.Object_77.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_75" castShadow receiveShadow geometry={nodes.Object_75.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube008_36" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube006_35" scale={0.95}>
                        <mesh name="Object_81" castShadow receiveShadow geometry={nodes.Object_81.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_79" castShadow receiveShadow geometry={nodes.Object_79.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_69" castShadow receiveShadow geometry={nodes.Object_69.geometry} material={materials.hide} />
                  </group>
                  <group name="Cube019_44" position={[0, 0, -0.01]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.34, 0.98]}>
                    <group name="Cube012_39" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube010_38" scale={0.95}>
                        <mesh name="Object_87" castShadow receiveShadow geometry={nodes.Object_87.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_85" castShadow receiveShadow geometry={nodes.Object_85.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube015_41" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube013_40" scale={0.95}>
                        <mesh name="Object_91" castShadow receiveShadow geometry={nodes.Object_91.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_89" castShadow receiveShadow geometry={nodes.Object_89.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube018_43" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube016_42" scale={0.95}>
                        <mesh name="Object_95" castShadow receiveShadow geometry={nodes.Object_95.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_93" castShadow receiveShadow geometry={nodes.Object_93.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_83" castShadow receiveShadow geometry={nodes.Object_83.geometry} material={materials.hide} />
                  </group>
                  <group name="Cube029_51" position={[0.66, 0, -0.01]} rotation={[0, 0, -Math.PI]} scale={[0.34, 1, 0.98]}>
                    <group name="Cube022_46" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube020_45" scale={0.95}>
                        <mesh name="Object_101" castShadow receiveShadow geometry={nodes.Object_101.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_99" castShadow receiveShadow geometry={nodes.Object_99.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube025_48" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube023_47" scale={0.95}>
                        <mesh name="Object_105" castShadow receiveShadow geometry={nodes.Object_105.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_103" castShadow receiveShadow geometry={nodes.Object_103.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube028_50" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube026_49" scale={0.95}>
                        <mesh name="Object_109" castShadow receiveShadow geometry={nodes.Object_109.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_107" castShadow receiveShadow geometry={nodes.Object_107.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_97" castShadow receiveShadow geometry={nodes.Object_97.geometry} material={materials.hide} />
                  </group>
                  <mesh name="Object_67" castShadow receiveShadow geometry={nodes.Object_67.geometry} material={materials.hide} />
                </group>
                <group name="Cube061_74" position={[0.01, 0.01, 0.01]} rotation={[0, -Math.PI / 2, 0]} scale={[0.56, 0.19, 0.56]}>
                  <group name="Cube040_59" position={[-0.66, 0, -0.01]} scale={[0.34, 1, 0.98]}>
                    <group name="Cube033_54" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube031_53" scale={0.95}>
                        <mesh name="Object_117" castShadow receiveShadow geometry={nodes.Object_117.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_115" castShadow receiveShadow geometry={nodes.Object_115.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube036_56" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube034_55" scale={0.95}>
                        <mesh name="Object_121" castShadow receiveShadow geometry={nodes.Object_121.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_119" castShadow receiveShadow geometry={nodes.Object_119.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube039_58" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube037_57" scale={0.95}>
                        <mesh name="Object_125" castShadow receiveShadow geometry={nodes.Object_125.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_123" castShadow receiveShadow geometry={nodes.Object_123.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_113" castShadow receiveShadow geometry={nodes.Object_113.geometry} material={materials.hide} />
                  </group>
                  <group name="Cube050_66" position={[0, 0, -0.01]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.34, 0.98]}>
                    <group name="Cube043_61" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube041_60" scale={0.95}>
                        <mesh name="Object_131" castShadow receiveShadow geometry={nodes.Object_131.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_129" castShadow receiveShadow geometry={nodes.Object_129.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube046_63" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube044_62" scale={0.95}>
                        <mesh name="Object_135" castShadow receiveShadow geometry={nodes.Object_135.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_133" castShadow receiveShadow geometry={nodes.Object_133.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube049_65" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube047_64" scale={0.95}>
                        <mesh name="Object_139" castShadow receiveShadow geometry={nodes.Object_139.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_137" castShadow receiveShadow geometry={nodes.Object_137.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_127" castShadow receiveShadow geometry={nodes.Object_127.geometry} material={materials.hide} />
                  </group>
                  <group name="Cube060_73" position={[0.66, 0, -0.01]} rotation={[0, 0, -Math.PI]} scale={[0.34, 1, 0.98]}>
                    <group name="Cube053_68" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube051_67" scale={0.95}>
                        <mesh name="Object_145" castShadow receiveShadow geometry={nodes.Object_145.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_143" castShadow receiveShadow geometry={nodes.Object_143.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube056_70" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube054_69" scale={0.95}>
                        <mesh name="Object_149" castShadow receiveShadow geometry={nodes.Object_149.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_147" castShadow receiveShadow geometry={nodes.Object_147.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube059_72" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube057_71" scale={0.95}>
                        <mesh name="Object_153" castShadow receiveShadow geometry={nodes.Object_153.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_151" castShadow receiveShadow geometry={nodes.Object_151.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_141" castShadow receiveShadow geometry={nodes.Object_141.geometry} material={materials.hide} />
                  </group>
                  <mesh name="Object_111" castShadow receiveShadow geometry={nodes.Object_111.geometry} material={materials.hide} />
                </group>
                <group name="Cube092_96" position={[0.01, -0.35, 0.01]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.56, 0.19, 0.56]}>
                  <group name="Cube071_81" position={[-0.66, 0, -0.01]} scale={[0.34, 1, 0.98]}>
                    <group name="Cube064_76" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube062_75" scale={0.95}>
                        <mesh name="Object_161" castShadow receiveShadow geometry={nodes.Object_161.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_159" castShadow receiveShadow geometry={nodes.Object_159.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube067_78" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube065_77" scale={0.95}>
                        <mesh name="Object_165" castShadow receiveShadow geometry={nodes.Object_165.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_163" castShadow receiveShadow geometry={nodes.Object_163.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube070_80" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube068_79" scale={0.95}>
                        <mesh name="Object_169" castShadow receiveShadow geometry={nodes.Object_169.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_167" castShadow receiveShadow geometry={nodes.Object_167.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_157" castShadow receiveShadow geometry={nodes.Object_157.geometry} material={materials.hide} />
                  </group>
                  <group name="Cube081_88" position={[0, 0, -0.01]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.34, 0.98]}>
                    <group name="Cube074_83" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube072_82" scale={0.95}>
                        <mesh name="Object_175" castShadow receiveShadow geometry={nodes.Object_175.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_173" castShadow receiveShadow geometry={nodes.Object_173.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube077_85" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube075_84" scale={0.95}>
                        <mesh name="Object_179" castShadow receiveShadow geometry={nodes.Object_179.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_177" castShadow receiveShadow geometry={nodes.Object_177.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube080_87" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube078_86" scale={0.95}>
                        <mesh name="Object_183" castShadow receiveShadow geometry={nodes.Object_183.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_181" castShadow receiveShadow geometry={nodes.Object_181.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_171" castShadow receiveShadow geometry={nodes.Object_171.geometry} material={materials.hide} />
                  </group>
                  <group name="Cube091_95" position={[0.66, 0, -0.01]} rotation={[0, 0, -Math.PI]} scale={[0.34, 1, 0.98]}>
                    <group name="Cube084_90" position={[0, 0, 0.69]} scale={[1, 1, 0.34]}>
                      <group name="Cube082_89" scale={0.95}>
                        <mesh name="Object_189" castShadow receiveShadow geometry={nodes.Object_189.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_187" castShadow receiveShadow geometry={nodes.Object_187.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube087_92" position={[0, 0, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.34, 1]}>
                      <group name="Cube085_91" scale={0.95}>
                        <mesh name="Object_193" castShadow receiveShadow geometry={nodes.Object_193.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_191" castShadow receiveShadow geometry={nodes.Object_191.geometry} material={materials.hide} />
                    </group>
                    <group name="Cube090_94" position={[0, 0, -0.64]} rotation={[-Math.PI, 0, 0]} scale={[1, 1, 0.34]}>
                      <group name="Cube088_93" scale={0.95}>
                        <mesh name="Object_197" castShadow receiveShadow geometry={nodes.Object_197.geometry} material={materials.material_2} />
                      </group>
                      <mesh name="Object_195" castShadow receiveShadow geometry={nodes.Object_195.geometry} material={materials.hide} />
                    </group>
                    <mesh name="Object_185" castShadow receiveShadow geometry={nodes.Object_185.geometry} material={materials.hide} />
                  </group>
                  <mesh name="Object_155" castShadow receiveShadow geometry={nodes.Object_155.geometry} material={materials.hide} />
                </group>
              </group>
              <group name="Sphere_27" rotation={[0, Math.PI / 4, Math.PI / 4]} scale={11.2}>
                <mesh name="Object_58" castShadow receiveShadow geometry={nodes.Object_58.geometry} material={materials.material_1} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
