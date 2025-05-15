"use client";
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
           {/* Navbar */}
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-transparent bg-opacity-50 text-black z-20 shadow-lg mt-[10px]">
       

      <div className="relative left-1/2"><img 
      src={"/images/logo.jpg"} 
      alt='web_logo'
      width={50}
      height={50}
      className='rounded-full '/></div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-gray-300 cursor-pointer"><Link href={'Components/Hero'}>Home</Link></li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Services</li>
        <li className="hover:text-gray-300 cursor-pointer"><Link href={"/Man"}>Man</Link></li>
        <li className='hover:text-gray-300 cursor-pointer'>Women</li>
        <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
      </ul>

      {/* Hamburger Icon */}
      <button
        className="md:hidden focus:outline-none z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </nav>
    {/* Mobile Menu */}
    {isOpen && (
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 z-10 md:hidden">
        <a onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
          Home
        </a>
        <a onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
          About
        </a>
        <a onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
          Services
        </a>
        <a onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
          Contact
        </a>
      </div>
    )}

   </div>
  )
}

export default Navbar;