import * as THREE from 'three';

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "@/components/CanvasLoader";
import IntroModel from "@/components/IntroModel";
import { useMediaQuery } from "react-responsive";
import Donut from "@/components/Donut";
import Int_Cube from "@/components/Int_Cube";
import React_Logo from "@/components/React_Logo";
import Diamonds from "@/components/Diamonds";

const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <section className='min-h-screen flex flex-col relative'>
        <div className="absolute inset-0 sm:mt36 mt-20 px-5 sm:px-10 gap-3 bg-linear-to-b from-[#0E1117]/0 via-[#0E1117]/80 to-[#2A1E3F]">
            <h1 className="sm:text-3xl text-xl text-white font-medium text-center font-generalsans">Hi, I am Aray <span className="waving-hand">👋</span></h1>
            <p className="sm:text-4xl text-2xl text-neutral-300 font-extrabold text-center font-generalsans">Crafting experiences where code meets motion.</p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 28]} />
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.5} />
              <IntroModel rotation={[15, 60, 0]} scale={isMobile ? 0.9 : 1.0}/>

              <group> 
                <directionalLight position={[-10, 10, 5]} intensity={0.75} />
                <Donut scale={25} position={[-12, -9, 0]} rotation={[-5.9, -6, 0]}/>
                <Int_Cube scale={3} position={[18, 4, 0]} rotation={[-5.9, -4, 0]}/>
                <React_Logo scale={0.6} position={[-18, 8, 0]} rotation={[-0.1, 0.2, 0]}/>
                <Diamonds scale={0.9} position={[12, -6, 0]} rotation={[-0.1, 0.2, -2]}/>
              </group>
            </Suspense>
          </Canvas>
        </div>
    </section>
  )
}

export default Hero