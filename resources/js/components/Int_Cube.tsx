import React from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Model(props) {
  const groupRef = React.useRef()
  const { nodes, materials } = useGLTF('./models/Int_Cube/Int_Cube.gltf')

  useGSAP(() => {
    if (!groupRef.current) return;
    
    const originalY = groupRef.current.position.y;

    const bounce = gsap.fromTo(
      groupRef.current.position,
      { y: groupRef.current.position.y - 1 },
      {
        y: groupRef.current.position.y,
        duration: 2.5,
        ease: 'circ.out',
        repeat: -1,
        yoyo: true,
      }
    );

    const randomRotation = () => {
      gsap.to(groupRef.current.rotation, {
        x: Math.random() * Math.PI * 2,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * Math.PI * 2,
        duration: 12 + Math.random() * 2,
        ease: 'power1.inOut',
        onComplete: randomRotation,
      });
    };

    randomRotation();
  }, []);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Cube Hehe']} scale={0.309} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/Int_Cube/Int_Cube.gltf')
