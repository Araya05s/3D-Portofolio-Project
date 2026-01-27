import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import site from "@/data/organizations.json"

const organization = site.organizations

const Organizations = () => {
  return (
    <section id="organizations" className="min-h-screen flex flex-col justify-center relative">
       <div className="absolute inset-0 px-5 sm:px-10 gap-1  bg-[#1A1128] pointer-events-auto sition-colors duration-700 align-middle justify-center">
            <h1 className="sm:text-3xl text-xl text-white font-bold text-center underline decoration-purple-500 decoration-4 underline-offset-8 font-generalsans">Organizations</h1>
            <div
            className='w-full'
            >
              <div className="flex flex-row pt-12 gap-12 max-w-6xl mx-auto">
              <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={24}
              loop={true}
              speed={3000}
              allowTouchMove={true}
              grabCursor={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              className="w-full"
              >
                {organization.map((organization) => (
                  <SwiperSlide
                      key={organization.title}
                      className="max-w-82 flex flex-col gap-8 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-400/40 overflow-hidden"
                  >
                      <div className="group w-44 lg:w-64 h-40 rounded-lg overflow-hidden bg-black/20 mb-5">
                        <img
                            src={organization.image}
                            alt={organization.title}
                            className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-110"
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
                  </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Organizations