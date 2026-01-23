import React from 'react'
import Hero from './section/Hero'
import Navbar from './section/Navbar'


const homepage = () => {
  return (
    <main className='max-w-7xl mx-auto px-5 sm:px-10'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default homepage