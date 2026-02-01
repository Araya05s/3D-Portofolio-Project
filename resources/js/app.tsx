import { Analytics } from '@vercel/analytics/react'
import React from 'react'

import About from './pages/section/About'
import Education from './pages/section/Education'
import Footer from './pages/section/Footer'
import Hero from './pages/section/Hero'
import Navbar from './pages/section/Navbar'
import Organizations from './pages/section/Organizations'
import Projects from './pages/section/Projects'
import Skills from './pages/section/Skills'


const homepage = () => {
  return (
    <main className='max-w-10xl mx-auto px-5 sm:px-10'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Organizations />
      <Footer />
      <Analytics />
    </main>
  )
}

export default homepage