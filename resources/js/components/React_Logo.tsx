import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('./models/React_Logo/scene.gltf')
  return (
    <Float speed={2} floatIntensity={3} rotationIntensity={0.5}>
      <group position={[ 8,8,0 ]}  {...props} dispose={null}>
        <group scale={0.01}>
          <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.935, 18.102]} rotation={[0, 0, -Math.PI / 2]} scale={[39.166, 39.166, 52.734]} />
        </group>
      </group>
    </Float>
  )
}

useGLTF.preload('/assets/React_Logo/scene.gltf')
