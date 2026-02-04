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

import site_p from "@/data/profile.json"
import site_c from "@/data/contacts.json"

import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: 768});  
  const { headline, subheadline } = site_p.home
  const { title, paragraphs } = site_p.about
  const resume_link = site_c['resume-link']
  const connections = site_c.contacts



  return (
    <section id="home" className='min-h-screen flex flex-col relative'>
        <div className="absolute inset-0 pt-20 sm:mt32 mt-12 px-5 sm:px-24 gap-3 bg-linear-to-b from-[#0E1117]/0 via-[#0E1117]/80 to-[#2A1E3F]">
          <div className="group relative gap-4 z-10 flex flex-row">
            <div className="relative group w-18 h-18 sm:w-24 sm:h-24 flex items-center justify-center">
              <Fade duration={1000}>
                <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#d946ef,#6366f1,#d946ef)] blur-md opacity-70 transition-all duration-500 animate-[spin_6s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] group-hover:opacity-100 group-hover:blur-xl z-0" />
                  <div className="relative z-10 w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/50">
                    <img src="/images/profile_photo.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </Fade>
              </div>
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
            <div className="hidden lg:flex flex-wrap justify-left lg:gap-6 gap-0 lg:max-w-64 pt-2 ml-12">
              {connections.map((contact) => (
                <div
                  key={contact.name}
                >
                  <Fade direction='up' duration={750} cascade damping={1000} delay={200}>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center px-2 py-2 rounded-2xl bg-white/2 border border-white/10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-20" />
    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
    
                    <div className="relative z-10 p-1 rounded-lg bg-white/85 border border-white/5 group-hover:scale-110 group-hover:bg-white/85 group-hover:border-purple-400/30 transition-all duration-300">
                      <img 
                        src={contact.icon} 
                        alt={contact.name} 
                        className="w-7 h-7 object-contain brightness-90 group-hover:brightness-110" 
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-700" />
                    </a>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Fade duration={500}>
              <h1 className="lg:mt-6 mt-6 sm:text-3xl text-xl text-white font-bold lg:text-left text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">{title}</h1>
            </Fade>
            <Slide direction='left' duration={750} delay={150}>
              <p className='lg:max-w-180 w-full lg:pt-6 pt-4 text-justify relative z-10 font-light text-md md:text-lg text-slate-200 font-generalsans'>
                {paragraphs}            
              </p>
            </Slide>
          </div>
          <div className="hidden lg:block w-3xl h-full absolute right-0 top-0">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[-10, 2, 22]} />
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
                <IntroModel position={[0, -6, 5]} rotation={[15, 60, 0]} scale={isMobile? 5.0 : 6.5}/>
              </Suspense>
            </Canvas>
          </div>
          <Slide direction='left' duration={1000} delay={500}>
          <div className="flex align-center justify-left text-left flex-row gap-8 pt-4">
              <a
                href= {resume_link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative lg:mt-4 mt-0 mb-24 w-fit px-5 py-2 text-center rounded-lg text-sm font-generalsans text-white overflow-hidden group inline-flex items-center justify-center font-bold transition-all duration-300 ease-out bg-linear-to-br from-purple-600 to-indigo-600 hover:scale-110 hover:rotate-1 active:scale-95 hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)]"
              >
                <span className="absolute inset-0 align-middle justify-center bg-gradient-to from-purple-500/0 via-purple-500/40 to-purple-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Check out My resume!</span>
              </a>
            </div>
          </Slide>
        </div>

    </section>
  )
}

export default Hero