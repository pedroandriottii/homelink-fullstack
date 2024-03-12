import Image from 'next/image';

export default function AboutHeader() {
  return (
    <div className='flex bg-home-link-background-blue items-center text-white justify-around pr-6 pl-6 mb-8'>
        <h1  className=' h1-underline pb-2 font-sans text-[24px] font-[700] uppercase'>Portfólio</h1>
        <Image
        src="/about/about-icon.svg"
        alt="About Icon"
        width={144}
        height={144}
        style={{transform: 'translateY(20px)'}}
        />
    </div>
  );
}