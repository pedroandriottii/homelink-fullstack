import Image from 'next/image';

export default function ServicesBody() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <Image
          src="/services/iluminacao.jpg"
          alt='Iluminação'
          width={168}
          height={177}
        />
        <h1>Iluminação Inteligente</h1>
        <p>Controle sua Iluminação por Comandos de voz ou pelo Smartphone.</p>
      </div>
      <div>
        <Image
          src="/services/servico-2.jpg"
          alt='Televisao e ar-condicionado'
          width={168}
          height={177}
        />
        <h1>Termostato e Televisores</h1>
        <p>Controle a temperatura do Ar-condicionado por comandos de voz ou Smartphone</p>
      </div>
      <div>
        <Image
          src="/services/servico-3.jpg"
          alt='Piscinas Inteligentes'
          width={168}
          height={177}
        />
        <h1>Piscinas Inteligentes</h1>
        <p>Controle os Leds e a temperatura da piscina por comandos de voz ou Smartphone</p>
      </div>
      <div>
        <Image
          src='/services/servico-4.jpg'
          alt='Segurança'
          width={168}
          height={177}
        />
        <h1>Segurança</h1>
        <p>Faça o monitoramento da sua casa com Fechaduras Digitais e Câmeras de Segurança</p>
      </div>
      <div>
        <Image
          src='/services/twibi.png'
          alt='Roteadores'
          width={168}
          height={177}
        />
        <h1>Wi-Fi Prosissional</h1>
        <p>Expanda o sinal do Wi-Fi para toda a casa! Com tecnologia de ponta.</p>
      </div>
      <div>
        <Image
          src="/services/sound-system.png"
          alt='Sistema de Som'
          width={168}
          height={177}
        />
        <h1>Sonorização</h1>
        <p>Deixe seu ambiente com um som ambiente de qualidade.</p>
      </div>
    </div>
  )
}