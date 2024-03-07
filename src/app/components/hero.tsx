import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className='bg-home-link-background-blue text-white uppercase flex flex-col pl-8 pt-7 pr-8 justify-between' >
            <div className='flex items-center  w-auto justify-between'> {/* Ajuste para centralizar verticalmente o texto e a imagem */}
                <h1 className='tracking-[1px] text-[24px] leading-7 pl-4 pb-4 font-[700] max-w-64'>Tenha sua casa na palma da sua mão.</h1>
                <Image src="/favicon/wifi.svg" alt="Wifi Icon" width={89} height={115}/>
            </div>
            {/* Botão Fale Conosco com ajustes */}
            <a href="" className='inline-block border border-solid rounded-xl border-white max-w-44 ml-3 p-1 m-4 mb-6 font-bold text-center hover:bg-white hover:text-home-link-background-blue hover:transition-colors duration-300'>
                Fale Conosco
            </a>
        </div>
    );
}
