import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 text-center bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <a
          href="https://t.me/canalfreesafegreen"
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta-section-click"
          className="cta-button group inline-flex"
        >
          <span className="relative z-10">QUERO FORRAR AGORA</span>
          <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-6 text-white/60 text-sm font-inter">
          ⚡ Vagas limitadas - garanta seu acesso agora
        </p>
      </div>
    </section>
  );
}
