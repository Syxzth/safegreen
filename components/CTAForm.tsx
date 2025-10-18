'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function CTAForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="cta-form" className="py-16 md:py-24 bg-gradient-to-b from-dark-900 to-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-gradient-to-br from-dark-900 via-[#051225] to-dark-900 rounded-3xl p-8 md:p-12 border border-safegreen/20 shadow-2xl shadow-safegreen/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-safegreen/10 border-2 border-safegreen mb-6">
              <ArrowRight className="w-10 h-10 text-safegreen" />
            </div>
            <h2 className="text-3xl md:text-4xl font-anton uppercase text-white mb-4 glow-green">
              ÚLTIMAS VAGAS DISPONÍVEIS
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Insira seu melhor e-mail para receber acesso imediato ao grupo SafeGreen
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-safegreen text-white placeholder:text-white/40 transition-all duration-300 outline-none text-base md:text-lg"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="cta-button w-full disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {submitted ? (
                <>
                  <Check className="w-6 h-6" />
                  <span>ACESSO ENVIADO!</span>
                </>
              ) : (
                <>
                  <span>GARANTIR MINHA VAGA AGORA</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-4 text-white/50 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-safegreen" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-safegreen" />
              <span>Sem Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-safegreen" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
