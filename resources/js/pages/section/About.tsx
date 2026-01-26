import React from 'react'

import site from "@/data/profile.json"

const About = () => {

  const { title, paragraphs } = site.about

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 lg:pt-55 pt-20 px-5 lg:px-10 gap-1  bg-[#1A1128] pointer-events-none transition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">{title}</h1>
            <p className='lg:pt-12 pt-6 text-center relative z-10 font-medium text-sm lg:text-xl text-slate-200'>
              {paragraphs}            
            </p>
        </div>
    </section>
  )
}

export default About