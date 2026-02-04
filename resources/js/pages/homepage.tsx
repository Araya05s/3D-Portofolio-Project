import React from 'react'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Skills from './section/Skills'
import Education from './section/Education'
import Projects from './section/Projects'
import Organizations from './section/Organizations'
import Footer from './section/Footer'
// import About from './section/About'


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