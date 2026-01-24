import React from 'react'

const organization = [
  {
    title: "Moderator at PKKMB Ilmu Komputer 2024",
    description:
      "A compass-based mobile application designed to help users accurately determine the Qibla direction.",
    organizations: ["BEMP Ilmu Komputer UNJ"],
    image: "/images/null.png",
    link: "",
  },
  {
    title: "KKI 2024",
    description:
      "A concept e-commerce platform showcasing technology products with a clean layout and user-focused browsing experience.",
    organizations: ["Robotic Club"],
    image: "/images/null.png",
    link: "",
  },
]

const Organizations = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 pt-15 px-5 sm:px-10 gap-1  bg-[#1A1128] pointer-events-none transition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Organizations</h1>
        </div>
        <div className="flex flex-row gap-12 max-w-6xl mx-auto">
        {organization.map((organization) => (
        <div
            key={organization.title}
            className="flex flex-row gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-400/40"
        >
            <div className="w-full sm:w-64 h-40 rounded-xl overflow-hidden bg-black/20 shrink-0">
            <img
                src={organization.image}
                alt={organization.title}
                className="w-full h-full object-cover"
            />
            </div>

            <div className="flex flex-col flex-1 gap-3">
            <h3 className="font-generalsans text-lg sm:text-xl text-white">
                {organization.title}
            </h3>

            <p className="text-sm text-white/70 line-clamp-3">
                {organization.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
                {organization.organizations.map((item) => (
                <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                >
                    {item}
                </span>
                ))}
            </div>
            </div>
        </div>
        ))}
    </div>
    </section>
  )
}

export default Organizations