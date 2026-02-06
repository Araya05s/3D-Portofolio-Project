import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const IntroModel = ({ scale = 1, ...props }) => {
    const meshRef1 = useRef();
    const meshRef2 = useRef();
    const meshRef3 = useRef();
    const meshRef4 = useRef();


  useFrame(({ clock }) => {
    const base = typeof scale === "number" ? scale : 1;
    const pulse = Math.sin(clock.getElapsedTime() * 2) * 0.1;
    const delta = clock.getDelta();
    const time = clock.getElapsedTime();
    const finalScale = (base + pulse) * 1.25;
    if (meshRef1.current) {
      meshRef1.current.rotation.x = Math.sin((time + delta * 0.8)) * 0.4;
      meshRef1.current.rotation.y = time / 2.5;
      meshRef1.current.scale.set(finalScale, finalScale, finalScale);
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = Math.sin((time + (delta + 2) * 0.8)) * 0.4;;
      meshRef2.current.rotation.y = time + ((delta + 0.4) / 2);
      meshRef2.current.scale.set(finalScale-0.8, finalScale-0.8, finalScale-0.8);
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x = Math.sin((time + (delta + 4) * 0.8)) * 0.4;;
      meshRef3.current.rotation.y = time + ((delta + 1.2));
      meshRef3.current.scale.set(finalScale-1.25, finalScale-1.25, finalScale-1.25);
    }
    if (meshRef4.current) {
      meshRef4.current.rotation.x = Math.sin((time + (delta + 4) * 0.8)) * 0.4;;
      meshRef4.current.rotation.y = time + ((delta + 1.2) * 2);
      meshRef4.current.scale.set(finalScale-1.75, finalScale-1.75, finalScale-1.75);
    }
  });

  return (
    <mesh {...props}>
      <mesh ref={meshRef1} position={[0, 0, 0]} rotation={[Math.PI/4, 0, 0]}>
        <torusGeometry args={[0.6, 0.035, 12, 42]} />
        <meshPhysicalMaterial color="#6341B4" metalness={0.2} roughness={0.0} />
      </mesh>
      <mesh ref={meshRef2} position={[0, 0, 0]} rotation={[0, Math.PI/4, 0]}>
        <torusGeometry args={[0.52, 0.065, 12, 32]} />
        <meshPhysicalMaterial color="#9D4DFF" metalness={0.15} roughness={0.3} />
      </mesh>
      <mesh ref={meshRef3} position={[0, 0, 0]} rotation={[0, Math.PI/4, 0]}>
        <torusGeometry args={[0.34, 0.095, 12, 28]} />
        <meshPhysicalMaterial color="#F85ACA" metalness={0.95} roughness={0.6} />
      </mesh>
      <mesh ref={meshRef4} position={[0, 0, 0]} rotation={[Math.PI/2, Math.PI/12, 0]}>
        <sphereGeometry args={[0.2, 18, 18]} />
        <meshPhysicalMaterial color="#DAFA8B" metalness={0.05} roughness={0.0} />
      </mesh>
    </mesh>
  );
};

export default IntroModel;