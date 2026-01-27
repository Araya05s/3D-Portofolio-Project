import React from 'react'
import { useState } from 'react'



const NavItems = () => {
  return (
    <ul className='flex flex-col sm:flex-row gap-5 justify-center sm:justify-start'>
      {[
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Organizations", id: "organizations" },
    { label: "Contact", id: "contact" },
  ].map(({ label, id }) => (
    <li key={id} className="text-neutral-400 hover:text-white text-sm font-semibold transition-colors duration-300">
      <a href={`#${id}`} className="cursor-pointer">{label}</a>
    </li>
      ))}
    </ul>

  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-black/90'>
      <div className='mx-auto max-w-10xl px-4 sm:px-6'>
          <div className='lg:ml-5 ml-5 lg:mr-5 mr-5 flex h-14 items-center justify-between'>
              <div className='text-neutral-400 hover:text-white transition-colors duration-300'>
                <a href="/" className='font-bold lg:text-xl text-sm'>
                    Muhammad <span className='text-white'>Akhsan Araya </span> Choirunnas
                </a>
              </div>

              <button onClick={toggleMenu} className='aria-label="Toggle navigation menu" focus:outline-none sm:hidden flex'>
                <img src={isOpen ? "/public/icons/close.svg" : "/public/icons/menu.svg"} alt="toggle" className='invert brightness-0 w-6 h-6'/>
              </button>

              <nav className='lg:flex hidden'>
                <NavItems />
              </nav>
          </div>
      </div>
      <div className={`absolute left-0 right-0 top-full bg-black text-white z-40 sm:hidden origin-top
transition-transform duration-300 ease-in-out px-5 sm:px-10 ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}>
        <nav className='py-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar;