import React from 'react'

import Navbar from './pages/section/Navbar'
import Hero from './pages/section/Hero'
import Skills from './pages/section/Skills'
import Education from './pages/section/Education'
import Projects from './pages/section/Projects'
import Organizations from './pages/section/Organizations'
import Footer from './pages/section/Footer'
// import About from './pages/section/About'


const homepage = () => {
  return (
    <main className='max-w-10xl mx-auto px-5 sm:px-10'>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Education />
      <Organizations />
      <Footer />
    </main>
  )
}

export default homepage