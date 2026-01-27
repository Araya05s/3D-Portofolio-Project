import React, { Suspense } from 'react'

import Stacks from "@/components/Stacks";
import site from "@/data/profile.json"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "@/components/CanvasLoader";
import {Fade, Slide } from "react-awesome-reveal";


const About = () => {

  const { title, paragraphs } = site.about

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 lg:pt-55 pt-20 px-5 lg:px-10 gap-1  bg-[#1A1128] pointer-events-none transition-colors duration-700 align-middle justify-center">
       <div className="absolute top-1/4 left-1/3 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-indigo-500/10 rounded-full blur-[120px]" />
          <Fade duration={500}>
            <h1 className="ml-10 sm:text-3xl text-xl text-white font-bold text-left underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">{title}</h1>
          </Fade>
          <Slide direction='left' duration={750} delay={150}>
            <p className='ml-10 w-220 lg:pt-12 pt-6 text-left relative z-10 font-medium text-sm lg:text-xl text-slate-200'>
              {paragraphs}            
            </p>
          </Slide>
        </div>
        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 28]} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.5} />
              {/* <IntroModel rotation={[15, 60, 0]} scale={isMobile ? 0.9 : 1.0}/> */}

              <group> 
                <directionalLight position={[-20, 10, 5]} intensity={1.25} />
                <Stacks scale={12.5} position={[17, 0, 0]} rotation={[-6, 5.0, -10]}/>
              </group>
            </Suspense>
          </Canvas>
        </div>
    </section>
  )
}

export default About