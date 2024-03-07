import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className='bg-home-link-background-blue text-white uppercase flex flex-col pl-8 pt-7 pr-8'>
            <div className='flex'> 
                <h1 className='font-extrabold tracking-wider text-2xl leading-7 pl-12 antialiased' style={{ textRendering: 'optimizeLegibility' }}>Tenha sua casa na palma da sua mão.</h1>
                <Image src="/favicon/wifi.svg" alt="Wifi Icon" width={89} height={115}/>
            </div>
            <a href="" className='antialiased' style={{ textRendering: 'optimizeLegibility' }}>Fale Conosco</a>
        </div>
        
    );
}