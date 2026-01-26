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

import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  // const isMobile = useMediaQuery({maxWidth: 768});  

  return (
    <section className='min-h-screen flex flex-col relative'>
        <div className="absolute inset-0 pt-20 sm:mt36 mt-20 px-5 sm:px-10 gap-3 bg-linear-to-b from-[#0E1117]/0 via-[#0E1117]/80 to-[#2A1E3F]">
          <div className="group relative flex flex-col items-center gap-4 z-10">
          <div className="relative group w-48 h-48 flex items-center justify-center">
            <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#d946ef,#6366f1,#d946ef)] blur-md opacity-70 transition-all duration-500 animate-[spin_6s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] group-hover:opacity-100 group-hover:blur-xl z-0" />
            <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/50">
              <img src="/images/profile_photo.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
            <h1 className="sm:text-6xl text-xl text-white font-medium text-center font-generalsans">Hi, I am Aray <span className="waving-hand">👋</span></h1>
              <p className="sm:text-4xl text-2xl text-neutral-300 font-extrabold text-center font-generalsans">
              <Typewriter
                words={[
                  'Web Developer',
                  '3D Modeler',
                  '3D Animator',
                  'Mobile Developer',
                  'Full-Stack Developer',
                  'Front-End Developer',
                  'Back-End Developer',
                ]}
                loop={0}              
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={50}
                delaySpeed={2000}
              />
              </p>
            </div>
          </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 28]} />
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.5} />
              {/* <IntroModel rotation={[15, 60, 0]} scale={isMobile ? 0.9 : 1.0}/> */}

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