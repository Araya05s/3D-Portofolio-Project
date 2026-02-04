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
import { Fade, Slide } from "react-awesome-reveal";

import site from "@/data/profile.json"

import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: 768});  
  const { headline, subheadline } = site.home
  const { title, paragraphs } = site.about


  return (
    <section id="home" className='min-h-screen flex flex-col relative'>
        <div className="absolute inset-0 pt-20 sm:mt36 mt-32 px-5 sm:px-24 gap-3 bg-linear-to-b from-[#0E1117]/0 via-[#0E1117]/80 to-[#2A1E3F]">
        <div>
          <div className="group relative gap-4 z-10 flex flex-row">
            <div className="relative group w-32 h-32 lg:w-24 lg:h-24 flex items-center justify-center">
              <Fade duration={1000}>
                <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#d946ef,#6366f1,#d946ef)] blur-md opacity-70 transition-all duration-500 animate-[spin_6s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] group-hover:opacity-100 group-hover:blur-xl z-0" />
                  <div className="relative z-10 w-32 h-32 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/50">
                    <img src="/images/profile_photo.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </Fade>
              </div>
              <div>
                <div className='overflow-hidden'>
                <Fade direction='up' duration={1000} delay={250}>
                  <h1 className="sm:text-5xl text-xl text-white font-medium text-left font-generalsans">{headline} <span className="waving-hand">👋</span></h1>
                  <p className="sm:text-3xl text-2xl text-neutral-300 font-extrabold text-left font-generalsans">
                  <Typewriter
                    words={subheadline}
                    loop={0}              
                    cursor
                    cursorStyle="|"
                    typeSpeed={75}
                    deleteSpeed={60}
                    delaySpeed={2000}
                  />
                  </p>
                </Fade>
              </div>
              </div>
            </div>
          </div>
          <div className=''>
            <Fade duration={500}>
              <h1 className="lg:mt-12 sm:text-3xl text-xl text-white font-bold text-left underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">{title}</h1>
            </Fade>
            <Slide direction='left' duration={750} delay={150}>
              <p className='lg:w-180 w-60 lg:pt-6 pt-4 text-justify relative z-10 font-light text-sm lg:text-lg text-slate-200 font-generalsans'>
                {paragraphs}            
              </p>
            </Slide>
          </div>
        </div>

        <div className="lg:visible w-xl h-full absolute right-0 top-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 28]} />
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.5} />
              <IntroModel position={[0, 0, 0]} rotation={[15, 60, 0]} scale={8}/>

              <group> 
                <directionalLight position={[-10, 10, 5]} intensity={1.75} />
                <Donut scale={25} position={[-7.4, -5, 3]} rotation={[-5.9, -6, 0]}/>
                <Int_Cube scale={3} position={[6.7, 3, 6]} rotation={[-5.9, -4, 0]}/>
                <React_Logo scale={0.6} position={[-6.4, 6, -2.5]} rotation={[-0.1, 0.2, 0]}/>
                <Diamonds scale={0.9} position={[6, -6.5, -3]} rotation={[-0.1, 0.2, -2]}/>
              </group>
            </Suspense>
          </Canvas>
        </div>

        <div className="visible lg:hidden w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 28]} />
              <ambientLight intensity={1.0} />
              <directionalLight position={[10, 10, 5]} intensity={2} />
              <IntroModel position={[0, -4, 5]} rotation={[15, 60, 0]} scale={5.0}/>
            </Suspense>
          </Canvas>
        </div>
    </section>
  )
}

export default Hero