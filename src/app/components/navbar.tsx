"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const maxHeight = isMenuOpen ? '500px' : '0px';

  return (
    <>
      <header className="bg-home-link-background-blue">
        <div className="lg:hidden flex items-center justify-between pt-10 pl-6 pb-6 pr-6 w-full box-border">
          <button className="relative p-4 focus:outline-none" onClick={toggleMenu}>
            <div className="block w-8">
              <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
              <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
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

        {/* Navbar mobile */}
        <div
          style={{ maxHeight: maxHeight }} className={`transition-max-height duration-700 ease-in-out overflow-hidden lg:hidden`}>
          <div className="bg-home-link-background-blue w-full p-6 text-white">
            <Link href="/" className="block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Home</Link>
            <Link href="/about" className="block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Portfólio</Link>
            <Link href="/services" className="block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Nossos Serviços</Link>
            <Link href="/auth/login" className="block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Login</Link>
          </div>
        </div>

        {/* Navbar desktop */}
        <div className="hidden lg:flex justify-between items-center p-6">
          <a href="/">
            <Image
              src="/media/logo.png"
              alt="Logo Home Link"
              width={242}
              height={28}
            />
          </a>
          <div className='flex gap-12'>
            <Link href="/" className="relative text-white no-underline pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link>
            <Link href="/about" className="relative text-white no-underline pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Portfólio</Link>
            <Link href="/services" className="relative text-white no-underline pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Nossos Serviços</Link>
            <Link href="/auth/login" className="relative text-white no-underline pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Login</Link>
          </div>
          <a href="" className=' text-white font-bold font-sans inline-block border border-solid rounded-xl border-home-link-background-blue p-2 bg-home-link-seccond-blue hover:bg-home-link-light-blue hover:text-home-link-background-blue'>Solicitar Orçamento</a>
        </div>
      </header >
    </>
  );
}
