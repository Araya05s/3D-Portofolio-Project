import React from 'react'

const skills = [
    { name: "HTML", icon: "/icons/html-5.svg" },
    { name: "CSS", icon: "/icons/css-3.svg" },
    { name: "Javascript", icon: "/icons/js.svg" },
    { name: "C++", icon: "/icons/cpp3.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Kotlin", icon: "/icons/kotlin.svg" },
    { name: "Three.js", icon: "/icons/three-js.svg" },
    { name: "React.js", icon: "/icons/react.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "Blender", icon: "/icons/blender.svg" },
    { name: "VS Code", icon: "/icons/vs-code.svg" },
  ];

const Skills = () => {
  return (
    <section className='min-h-screen flex flex-col relative'>
        <div className="absolute inset-0 pt-50 px-5 sm:px-10 gap-1 bg-[#2A1E3F] pointer-events-none transition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Skills</h1>
        </div>
        <div className="mt-68 flex flex-wrap justify-center gap-6 px-6 max-w-5xl mx-auto">
            {skills.map(skill => (
            <div
            key={skill.name}
            className="group relative flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-purple-400/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
            <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <img src={skill.icon} alt={skill.name} className="w-6 h-6 block relative z-10" />
            <span className="font-generalsans text-sm sm:text-base text-white/90 tracking-wide relative z-10">
                {skill.name}
            </span>
            </div>
            ))}
        </div>

    </section>
  )
}

export default Skills