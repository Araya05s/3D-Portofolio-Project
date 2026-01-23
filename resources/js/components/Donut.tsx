import React from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Model(props) {
  const groupRef = React.useRef()
  const { nodes, materials } = useGLTF('./models/Donut/donut.gltf')

  useGSAP(() => {
    if (!groupRef.current) return;
    
    const originalY = groupRef.current.position.y;

    gsap.fromTo(
      groupRef.current.position,
      { y: originalY },
      {
        y: originalY - 0.5,
        duration: 1.5,
        ease: 'bounce.out',
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Donut1_Material_0.geometry} material={materials.Material} />
          <mesh geometry={nodes.Donut1_Material002_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Donut1_Material001_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Donut1_Material006_0.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Donut1_Material004_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Donut1_Material005_0.geometry} material={materials['Material.005']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/Donut/donut.gltf')
