import React from 'react';
import honey from "../assets/images/honey-bee.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">

      <img className='size-16' src={honey} alt="honey-bee" />

      <div className="space-x-6 text-gray-600">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar