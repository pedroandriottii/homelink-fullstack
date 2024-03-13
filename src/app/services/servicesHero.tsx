import React from 'react';
import Image from 'next/image';

export default function ServicesHero() {
  return (
    <div className='bg-home-link-background-blue flex items-center justify-around pr-6 pl-6 mb-8'>
      <Image
        src={'/services/service-icon.svg'}
        alt="Services Hero"
        width={144}
        height={144}
        style={{ transform: 'translateY(20px)' }}
      />
      <h1 className='text-white uppercase h1-underline pb-2 font-sans text-[24px] font-[700]'>Serviços</h1>
    </div>
  );
}
