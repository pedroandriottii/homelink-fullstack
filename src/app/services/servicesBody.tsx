export default function ServicesBody() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
      <div className='flex flex-col items-center text-center gap-2'>
        <div className='w-full h-40 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('/services/iluminacao.jpg')"}}></div>
        <h1 className='font-bold font-sans text-home-link-seccond-blue'>Iluminação Inteligente</h1>
        <p className='font-sans text-home-link-seccond-blue'>Controle sua Iluminação por Comandos de voz ou pelo Smartphone.</p>
      </div>

      <div className='flex flex-col items-center text-center gap-2'>
        <div className='w-full h-40 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('/services/servico-2.jpg')"}}></div>
        <h1 className='font-bold font-sans text-home-link-seccond-blue'>Termostato e Televisores</h1>
        <p className='font-sans text-home-link-seccond-blue'>Controle a temperatura do Ar-condicionado por comandos de voz ou Smartphone</p>
      </div>

      <div className='flex flex-col items-center text-center gap-2'>
        <div className='w-full h-40 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('/services/servico-3.jpg')"}}></div>
        <h1 className='font-bold font-sans text-home-link-seccond-blue'>Piscinas Inteligentes</h1>
        <p className='font-sans text-home-link-seccond-blue'>Controle os Leds e a temperatura da piscina por comandos de voz ou Smartphone</p>
      </div>

      <div className='flex flex-col items-center text-center gap-2'>
        <div className='w-full h-40 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('/services/servico-4.jpg')"}}></div>
        <h1 className='font-bold font-sans text-home-link-seccond-blue'>Segurança</h1>
        <p className='font-sans text-home-link-seccond-blue'>Faça o monitoramento da sua casa com Fechaduras Digitais e Câmeras de Segurança</p>
      </div>

      <div className='flex flex-col items-center text-center gap-2'>
        <div className='w-full h-40 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('/services/twibi.png')"}}></div>
        <h1 className='font-bold font-sans text-home-link-seccond-blue'>Wi-Fi Profissional</h1>
        <p className='font-sans text-home-link-seccond-blue'>Expanda o sinal do Wi-Fi para toda a casa! Com tecnologia de ponta.</p>
      </div>

      <div className='flex flex-col items-center text-center gap-2'>
        <div className='w-full h-40 bg-cover bg-center rounded-lg' style={{backgroundImage: "url('/services/sound-system.png')"}}></div>
        <h1 className='font-bold font-sans text-home-link-seccond-blue'>Sonorização</h1>
        <p className='font-sans text-home-link-seccond-blue'>Deixe seu ambiente com um som ambiente de qualidade.</p>
      </div>
    </div>
  )
}
