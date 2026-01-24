import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 pt-55 px-5 sm:px-10 gap-1  bg-[#1A1128] pointer-events-none transition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">About Me</h1>
            <p className='pt-12 text-center relative z-10 font-medium text-base sm:text-xl text-slate-200'>
            I’m a fifth-semester student majoring in Computer Science with expertise in Web Development, Kotlin & Blender. As someone passionate about handling multiple tasks, I possess strong problem-solving skills and learn new software quickly. I am highly enthusiastic about contributing to meaningful projects to continue learning and develop industry-ready skills in a professional environment.
            </p>
        </div>
    </section>
  )
}

export default About