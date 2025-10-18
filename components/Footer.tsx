import { Instagram, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{borderColor: 'rgba(0,255,0,0.1)', boxShadow: '0 -2px 15px rgba(0,255,0,0.3)'}}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <img
              src="/images/cropped-bah-gurizao.png"
              alt="SafeGreen Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm font-inter">
            SafeGreen 2025 © Todos os direitos reservados
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 font-inter mb-6">
          <span className="inline-flex items-center gap-1">
            <span className="text-xl">+18</span>
          </span>
          <span>|</span>
          <span>Jogue com responsabilidade</span>
          <span>|</span>
          <span>Selo de jogo legal</span>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="#"
              className="text-gray-400 hover:text-safegreen transition-colors font-inter"
            >
              Política de privacidade
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-safegreen transition-colors font-inter"
            >
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
