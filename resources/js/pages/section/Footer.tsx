import React from 'react'

const connections = [
  { name: "Linkedln", icon: "/icons/linkedin.svg" },
  { name: "Github", icon: "/icons/github.svg" },
  { name: "Instagram", icon: "/icons/instagram.svg" },
  { name: "Tiktok", icon: "/icons/tiktok.svg" },
];

const Footer = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 pt-40 px-5 sm:px-10 gap-1  bg-slate-950 align-middle items-center justify-center">
          <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Curriculum Vitae</h1>
          <div
            className="flex flex-col align-center justify-center text-center sm:flex-row gap-8 p-8"
        >
          <a
            href="https://drive.google.com/file/d/1drr4eTFQWOkjRl_M6szAZoI7XQ_tdJAQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-4 mb-24 w-fit px-5 py-2 text-center rounded-lg text-sm font-generalsans text-white overflow-hidden group inline-flex items-center justify-center font-bold transition-all duration-300 ease-out bg-linear-to-br from-purple-600 to-indigo-600 hover:scale-110 hover:rotate-1 active:scale-95 hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)]"
          >
            <span className="absolute inset-0 align-middle justify-center bg-gradient-to from-purple-500/0 via-purple-500/40 to-purple-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Check out My resume!</span>
          </a>
        </div>
          <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Connect with Me!</h1>
      </div>
      <div className="pt-32 lg:pt-2 flex flex-wrap mt-88 justify-center gap-6 px-6 max-w-5xl mx-auto">
      {connections.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/2 border border-white/10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:bg-white/[0.07] hover:border-purple-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(168,85,247,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-20" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

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
            </div>
          ))}
        </div>
    </section>
  )
}

export default Footer