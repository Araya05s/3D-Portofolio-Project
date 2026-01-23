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
      <torusGeometry args={[4, 1, 32, 48]} />
      <meshStandardMaterial color="orange" metalness={0.1} roughness={0.3} emissive="red" emissiveIntensity={0.2} />
    </mesh>
  );
};

export default IntroModel;