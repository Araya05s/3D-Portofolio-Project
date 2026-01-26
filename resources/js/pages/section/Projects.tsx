import React from 'react'
import site from "@/data/projects.json"

const projects = site.projects
  
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 pt-20 px-5 sm:px-10 gap-1  bg-slate-950 pointer-events-none transition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Projects</h1>
        </div>

        <div className="flex flex-col justify-start align-top gap-12 max-w-6xl mx-auto pt-38 lg:pb-10 pb-35">
        {projects.map((project) => (
        <div
            key={project.title}
            className="flex flex-col sm:flex-row gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-400/40"
        >
            <div className="w-full sm:w-64 h-40 rounded-xl overflow-hidden bg-black/20 shrink-0">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
            />
            </div>

            <div className="flex flex-col flex-1 gap-3">
            <h3 className="font-generalsans text-lg sm:text-xl text-white">
                {project.title}
            </h3>

            <p className="text-sm text-white/70 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((item) => (
                <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                >
                    {item}
                </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 w-fit px-5 py-2 rounded-lg text-sm font-generalsans text-white overflow-hidden group inline-flex items-center justify-center font-bold transition-all duration-300 ease-out bg-linear-to-br from-purple-600 to-indigo-600 hover:scale-110 hover:rotate-1 active:scale-95 hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)]"
            >
                <span className="absolute inset-0 bg-gradient-to from-purple-500/0 via-purple-500/40 to-purple-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">View Project</span>
            </a>
            </div>
        </div>
        ))}
    </div>
    </section>
  )
}

export default Projects