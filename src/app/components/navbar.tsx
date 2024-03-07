"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const maxHeight = isMenuOpen ? '500px' : '0px';

  return (
    <header className="bg-home-link-background-blue">
      <div className="lg:hidden flex items-center justify-between pt-10 pl-6 pb-6 pr-6 w-full box-border">
        <button className="relative p-4 focus:outline-none" onClick={toggleMenu}>
          <div className="block w-8">
            <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}/>
            <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}/>
            <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}/>
          </div>
        </button>

        <a href="/">
          <Image
            src="/media/logo.png"
            alt="Logo Home Link"
            width={242}
            height={28}
          />
        </a>
      </div>

      {/* Menu móvel */}
      <div
        style={{ maxHeight: maxHeight }}
        className={`transition-max-height duration-700 ease-in-out overflow-hidden lg:hidden`}
      >
        <div className="bg-home-link-background-blue w-full p-6">
          <a href="/" className="block py-2 text-white  border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Home</a>
          <a href="/portfolio" className="block py-2 text-white  border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Portfólio</a>
          <a href="/services" className="block py-2 text-white  border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Nossos Serviços</a>
        </div>
      </div>

      {/* Menu desktop */}
      <div className="hidden lg:flex justify-between items-center">
        <a href="/">
          <Image
            src="/media/logo.png"
            alt="Logo Home Link"
            width={242}
            height={28}
          />
        </a>
        <nav className="space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/portfolio" className="text-white">Portfólio</a>
          <a href="/services" className="text-white">Nossos Serviços</a>
        </nav>
      </div>
    </header>
  );
}
