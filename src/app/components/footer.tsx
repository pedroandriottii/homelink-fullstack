import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex bg-[#F5F5F5] items-center justify-between p-6' >
      <div className='flex flex-col text-[#00000080] underline gap-6'>
        <a href="/">Home</a>
        <a href="/about">Portfólio</a>
        <a href="/services">Serviços</a>
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
        <a href="https://api.whatsapp.com/send?phone=5581988145903&text=Ol%C3%A1!%20Queria%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Automa%C3%A7%C3%A3o%20Residencial" target='__blank'>
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