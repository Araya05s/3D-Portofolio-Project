import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from "gsap";
import * as THREE from "three";

export default function Stacks({ scale = 1, position = [0,0,0], rotation = [0,0,0], color="#9ca3af", ...props }) {
    const stacksRef = useRef();

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      stacksRef.current.rotation.x = rotation[0] + Math.sin(t * 0.45) * 0.2;
      stacksRef.current.rotation.z = rotation[2] + Math.cos(t * 0.45) * 0.2;
    });
  
    useEffect(() => {
      gsap.to(stacksRef.current.rotation, {
        y: "+=6.283", 
        duration: 60,
        repeat: -1,
        ease: "linear"
      });
    }, []);
  
    return (
      <group ref={stacksRef} scale={scale} position={position} {...props}>
        <mesh position={[0, -0.25, 0]} rotation={[0.3, -0.3, 0]}>
            <boxGeometry args={[0.4, 0.2, 0.4]} />
            <meshPhysicalMaterial metalness={0.25} roughness={0.3} color="#9B5DE0" />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0.2, 0.5, 0]}>
            <boxGeometry args={[0.6, 0.2, 0.2]} />
            <meshPhysicalMaterial transmission={0.25} roughness={0.1} thickness={0.1} color={"#8A2BE2"} />
        </mesh>
        <mesh position={[0, 0.25, 0]} rotation={[-0.1, 0.8, 0.2]}>
            <boxGeometry args={[0.5, 0.2, 0.3]} />
            <meshPhysicalMaterial metalness={0.25} roughness={0.3} color="#C47BE4" />
        </mesh>
      </group>
    );
  }