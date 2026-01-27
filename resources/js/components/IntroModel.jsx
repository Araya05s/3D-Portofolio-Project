import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const IntroModel = ({ scale = 1, ...props }) => {
    const meshRef = useRef();

  useFrame(({ clock }) => {
    const base = typeof scale === "number" ? scale : 1;
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.1;
    const finalScale = base + pulse;
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime();
      meshRef.current.rotation.y = clock.getElapsedTime();
      meshRef.current.scale.set(finalScale, finalScale, finalScale);
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <mesh position={[0, 0, 0]} rotation={[Math.PI/4, 0, 0]}>
        <torusGeometry args={[0.5, 0.1, 12, 32]} />
        <meshPhysicalMaterial color="#9929EA" metalness={0.4} roughness={0.0} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI/4, 0]}>
        <torusGeometry args={[0.35, 0.07, 12, 32]} />
        <meshPhysicalMaterial color="#FF5FCF" metalness={0.65} roughness={0.0} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI/2, Math.PI/12, 0]}>
        <torusGeometry args={[0.25, 0.05, 12, 32]} />
        <meshPhysicalMaterial color="#FAEB92" metalness={0.15} roughness={0.0} />
      </mesh>
    </mesh>
  );
};

export default IntroModel;