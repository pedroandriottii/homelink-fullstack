import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex bg-[#F5F5F5] items-center justify-between p-6' >
      <div className='flex flex-col text-[#00000080] underline gap-6'>
        <p>Home</p>
        <p>Portfólio</p>
        <p>Serviços</p>
      </div>
      <p className='text-[#00000080] font-extrabold'>©2024 HOME LINK</p>
      <div className='flex flex-col items-center gap-3'>
        <a href="https://www.instagram.com/homelinkbr/" target='__blank'>
          <Image
            src="/media/instagram.png"
            alt="Instagram Logo"
            width={94}
            height={53}
          /></a>
        <a href="">
          <Image
            src="/media/whatsapp.png"
            alt="Whatsapp Logo"
            width={72}
            height={53}
          />
        </a>
      </div>
    </div>
  );
}