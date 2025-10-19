'use client';

import { ArrowRight } from 'lucide-react';
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}


export default function Hero() {
  return (
    <section className="relative w-full hero-section overflow-x-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-background" />
      <div className="absolute inset-0 md:bg-black/40" />

      <div className="relative z-20 w-full h-full flex flex-col justify-start md:justify-center items-center px-6 md:px-6 pt-[52vh] md:pt-0 pb-0 md:pb-0 md:min-h-[75vh]">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
          <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start w-full max-w-lg">
            <h1 className="mb-5 md:mb-8 w-full">
              <span className="block text-safegreen font-montserrat font-extrabold text-[3rem] md:text-6xl lg:text-7xl uppercase leading-[0.9] mb-2 drop-shadow-[0_0_25px_rgba(0,255,0,0.6)]">
                ACESSO
              </span>
              <span className="block text-white font-montserrat font-extrabold text-[3rem] md:text-6xl lg:text-7xl uppercase leading-[0.9] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
                LIBERADO
              </span>
            </h1>

            <p className="text-white font-inter text-[1rem] md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-[90%] md:max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Receba entradas diárias pra buscar um retorno alto, sem risco algum.
            </p>

            <a
  href="https://t.me/canalfreesafegreen"
  target="_blank"
  rel="noopener noreferrer"
  id="cta"
  data-gtm="hero-cta-click"
  className="cta-button group inline-flex mx-auto md:mx-0"
  onClick={() => {
    // Dispara o evento personalizado do Meta Pixel
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
  window.fbq('trackCustom', 'EnterChannel');
      console.log('Pixel Event: EnterChannel enviado ✅');
    } else {
      console.warn('Pixel não detectado ❌');
    }
  }}
>
  <span className="relative z-10">QUERO FORRAR AGORA</span>
  <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
</a>

          </div>

          <div className="hidden lg:block">
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .hero-background {
            background-image: url('/images/background-mobile.png') !important;
            background-position: center 10% !important;
            background-size: contain !important;
          }
          .hero-section {
            min-height: 100vh;
            height: auto;
            width: 100%;
            max-width: 100vw;
          }
        }

        @media (min-width: 768px) {
          .hero-background {
            background-image: url('/images/background-desktop.png') !important;
            background-position: center center !important;
          }
          .hero-section {
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
}
