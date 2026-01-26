import React from 'react'

const education = [
    {
        name: "State University of Jakarta",
        status: "In Progress",
        year: "2023 – Present",
        location: "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
        image: "/images/State_University_of_Jakarta.jpg",
        link: "https://unj.ac.id/",
      },
      {
        name: "SMAN 27 Jakarta",
        status: "Graduated",
        year: "2020 – 2023",
        location: "Jl. Mardani Raya No.39 2, RT.2/RW.5, Johar Baru, Kec. Johar Baru, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10560",
        image: "/images/SMAN_27_Jakarta.jpg",
        link: "https://sman27jkt.sch.id/",
      },
  ]

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 lg:pt-15 pt-0 px-5 sm:px-10 gap-1  bg-linear-to-b from-slate-950 to-[#1A1128] pointer-events-none transition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Education</h1>
        </div>
        <div className="flex flex-col justify-start align-top gap-12 max-w-6xl mx-auto lg:pt-5 pt-12 lg:pb-10 pb-25">
        {education.map((edu) => (
        <div
        key={edu.name}
        className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-400/40"
      >
        <div className="w-full sm:w-56 h-36 rounded-xl overflow-hidden shrink-0 bg-black/20">
          <img
            src={edu.image}
            alt={edu.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 gap-2">

          <h3 className="font-generalsans text-lg sm:text-xl text-white">
            {edu.name}
          </h3>

          <div className="text-sm text-white/70 flex flex-wrap gap-x-4">
            <span>{edu.year}</span>
            <span>•</span>
            <span>{edu.status}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/50">
            <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"
            />
            <circle cx="12" cy="10" r="2.5" />
            </svg>
            <span>{edu.location}</span>
        </div>

          <a
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-4 w-fit px-5 py-2 rounded-lg text-sm font-generalsans text-white overflow-hidden group inline-flex items-center justify-center font-bold transition-all duration-300 ease-out bg-linear-to-br from-purple-600 to-indigo-600 hover:scale-110 hover:rotate-1 active:scale-95 hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)]"
          >
            <span className="absolute inset-0 bg-gradient-to from-purple-500/0 via-purple-500/40 to-purple-500/0 translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Visit Institution</span>
          </a>
        </div>
      </div>
        ))}
    </div>

    </section>
  )
}

export default Education