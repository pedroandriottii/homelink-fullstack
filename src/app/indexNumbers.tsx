"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "../app/components/navbar";
import Hero from "../app/components/hero";
import Footer from "../app/components/footer";


export default function IndexNumber() {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [currentYear, setCurrentYear] = useState(0);
    const targetNumber = 125;
    const targetYear = 6;

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentNumber((prevNumber) => {
            if (prevNumber < targetNumber) {
              return prevNumber + 1;
            }
            return prevNumber;
          });
          setCurrentYear((prevYear) => {
            if (prevYear < targetYear) {
              return prevYear + 1;
            }
            return prevYear;
          });
        
        }, 20);

        return () => clearInterval(interval);
    }, [targetNumber, targetYear]);

  return (
    <div className='flex flex-col items-center m-10'>
        <div className='flex gap-2 items-center'>
            <p className='text-[32px]'>+</p>
            <p className=' text-[48px] font-bold text-home-link-light-blue'>{currentNumber}</p>
        </div>
        <h1 className='text-center mt-2 mb-7 uppercase font-extrabold font-sans text-home-link-background-blue'>Casas Conectadas</h1>
        <div className='flex gap-2 items-center'>
            <p className='text-[32px]'>+</p>
            <p className='text-[48px] font-bold text-home-link-light-blue'>{currentYear}</p>
        </div>
        <h1 className='text-center mt-2 mb-7 uppercase font-extrabold font-sans text-home-link-background-blue'>Anos no Mercado</h1>
        <a href="/about" className='inline-block border border-solid rounded-xl p-3 bg-home-link-background-blue text-white font-bold uppercase font-sans hover:bg-white hover:text-home-link-background-blue'>Veja Nossos Projetos</a>
    </div>
  );
}