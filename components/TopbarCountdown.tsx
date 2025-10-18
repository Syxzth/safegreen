'use client';

import { useEffect, useState } from 'react';

export default function TopbarCountdown() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const STORAGE_KEY = 'sg_endTimestamp';
    let endTimestamp = parseInt(localStorage.getItem(STORAGE_KEY) || '0');

    if (!endTimestamp || endTimestamp <= Date.now()) {
      endTimestamp = Date.now() + 10 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, endTimestamp.toString());
    }

    const updateCountdown = () => {
      const now = Date.now();
      const remaining = endTimestamp - now;

      if (remaining <= 0) {
        endTimestamp = Date.now() + 10 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, endTimestamp.toString());
        setTimeLeft({ minutes: 10, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(remaining / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-safegreen h-14 md:h-16 flex items-center justify-center">
        <div className="text-black font-montserrat font-bold text-xs md:text-sm uppercase tracking-wide">
          98% DAS VAGAS ESGOTADAS! ÚLTIMAS 03 DISPONÍVEIS
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-safegreen flex items-center justify-center px-4 py-3 md:py-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
        <div
          className="flex items-center gap-2 md:gap-3"
          data-countdown
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="flex flex-col items-center bg-black rounded-lg px-3 md:px-4 py-1.5 md:py-2 min-w-[70px] md:min-w-[80px]">
            <span className="text-safegreen font-montserrat font-extrabold text-2xl md:text-4xl leading-none">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-white font-montserrat font-semibold text-[10px] md:text-xs uppercase mt-0.5 md:mt-1">
              Minutos
            </span>
          </div>

          <div className="flex flex-col items-center bg-black rounded-lg px-3 md:px-4 py-1.5 md:py-2 min-w-[70px] md:min-w-[80px]">
            <span className="text-safegreen font-montserrat font-extrabold text-2xl md:text-4xl leading-none">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-white font-montserrat font-semibold text-[10px] md:text-xs uppercase mt-0.5 md:mt-1">
              Segundos
            </span>
          </div>
        </div>

        <div className="text-center">
          <div className="text-black font-montserrat font-extrabold text-sm md:text-2xl uppercase tracking-tight leading-tight">
            98% DAS VAGAS ESGOTADAS!
          </div>
          <div className="bg-black text-safegreen font-montserrat font-extrabold text-xs md:text-xl uppercase px-3 md:px-4 py-0.5 md:py-1 mt-1 inline-block rounded">
            ÚLTIMAS 03 DISPONÍVEIS
          </div>
        </div>
      </div>
    </div>
  );
}
