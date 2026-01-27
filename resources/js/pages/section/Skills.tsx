import React from 'react'
import { Fade } from "react-awesome-reveal";

import site from "@/data/skills.json"


const skills = site.skills

const Skills = () => {
  return (
    <section id="skills" className='min-h-screen flex flex-col relative'>
        <div className="absolute inset-0 lg:pt-30 pt-10 px-5 lg:px-10  gap-1 bg-[#2A1E3F] pointer-events-none transition-colors duration-700 align-middle justify-center">
          <Fade duration={750}>
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Skills</h1>
          </Fade>
        </div>
        <div className="lg:mt-50 mt-25 pb-10 lg:pb-0 flex flex-wrap justify-center gap-6 px-6 max-w-5xl mx-auto">
  {skills.map((skill) => (
        <div
          key={skill.name}
          className="group relative flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/2 border border-white/10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
        >
          <Fade direction='up' duration={500} delay={100} damping={40}>
          <div className="relative z-10 p-2 rounded-lg bg-white/85 border border-white/5 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400/30 transition-all duration-300">
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-7 h-7 object-contain brightness-90 group-hover:brightness-110" 
            />
          </div>
          
          <span className="relative z-10 font-medium text-sm sm:text-base text-slate-300 group-hover:text-white ransition-colors duration-300">
            {skill.name}
          </span>

          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-transparent via-purple-400 to-transparent group-hover:w-full transition-all duration-700" />

          </Fade>
        </div>
      ))}
    </div>

    </section>
  )
}

export default Skills