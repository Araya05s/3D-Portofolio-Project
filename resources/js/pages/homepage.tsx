import Education from './section/Education'
import Footer from './section/Footer'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Organizations from './section/Organizations'
import Projects from './section/Projects'
import Skills from './section/Skills'
// import About from './section/About'


const homepage = () => {
  return (
    <main className='max-w-10xl mx-auto px-5 sm:px-10'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Organizations />
      <Footer />
    </main>
  )
}

export default homepage