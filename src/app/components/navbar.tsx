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
    <>
      < header className="bg-home-link-background-blue" >
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
          style={{ maxHeight: maxHeight }} className={`overflow-hidden lg:hidden`}>
          <div className="bg-home-link-background-blue w-full p-6">
            <a href="/" className=" text-white border-white link block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Home</a>
            <a href="/about" className=" text-white border-white link block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Portfólio</a>
            <a href="/services" className=" text-white border-white link block py-2 border border-solid rounded-xl mb-3 pl-4 uppercase text-xl">Nossos Serviços</a>
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
            <a href="/" className="link text-white">Home</a>
            <a href="/about" className="link text-white">Portfólio</a>
            <a href="/services" className="link text-white">Nossos Serviços</a>
          </div>
          <a href="https://api.whatsapp.com/send?phone=5581988145903&text=Ol%C3%A1!%20Queria%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Automa%C3%A7%C3%A3o%20Residencial" target='__blank' className=' text-white font-bold font-sans inline-block border border-solid rounded-xl border-home-link-background-blue p-2 bg-home-link-seccond-blue hover:bg-home-link-light-blue hover:text-home-link-background-blue'>Solicitar Orçamento</a>
        </div>
      </header >
    </>
  );
}
