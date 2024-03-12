import Image from 'next/image';

export default function AboutBody() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex align-center gap-6 pl-6 pr-6 align-left'>
            <Image
            src="/about/vector-line.svg"
            alt='Vector Line'
            width={15}
            height={232}
            style={{transform: 'translateY(-33px)'}}
            />
            <p className='text-home-link-seccond-blue font-sans tracking-wider leading-5'>A Home Link é uma empresa de Automação Residencial & Corporativa fundada em 2019.
                    Trabalhando com qualidade e transparência, procuramos atingir o mercado imobiliário com tecnologias inovadoras
                    para simplificar rotinas e tarefas do dia a dia e trazer mais conforto!
                    </p>
        </div>
        <h1 className='uppercase text-home-link-background-blue mb-2 font-[700] font-sans'>Confira Nossos Trabalhos</h1>
    </div>
  );
}