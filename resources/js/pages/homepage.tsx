import React from 'react'
import About from './section/About'
import Education from './section/Education'
import Footer from './section/Footer'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Organizations from './section/Organizations'
import Projects from './section/Projects'
import Skills from './section/Skills'


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
    </main>
  )
}

export default homepage