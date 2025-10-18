'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    image: '/images/1-depoimento.png',
    alt: 'Depoimento de cliente satisfeito 1',
  },
  {
    id: 2,
    image: '/images/2-depoimento.png',
    alt: 'Depoimento de cliente satisfeito 2',
  },
  {
    id: 3,
    image: '/images/3-depoimento.png',
    alt: 'Depoimento de cliente satisfeito 3',
  },
  {
    id: 4,
    image: '/images/4-depoimento.png',
    alt: 'Depoimento de cliente satisfeito 4',
  },
  {
    id: 5,
    image: '/images/5-depoimento.png',
    alt: 'Depoimento de cliente satisfeito 5',
  },
];

export default function TestimonialCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return;
      if (e.key === 'ArrowLeft') {
        swiperRef.current.slidePrev();
      } else if (e.key === 'ArrowRight') {
        swiperRef.current.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="pt-16 md:pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title mb-12 md:mb-16">VEJA O QUE ELES TÊM A DIZER:</h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={10}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-custom-active',
            }}
            breakpoints={{
              640: {
                effect: 'slide',
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                effect: 'slide',
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonial-swiper"
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 md:hover:scale-105 md:h-[550px]"
                  style={{boxShadow: '0 0 15px rgba(0,255,0,0.3)'}}
                >
                  <div className="relative w-full md:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      loading="lazy"
                      className="w-full h-auto md:h-full md:object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          const placeholder = document.createElement('div');
                          placeholder.className = 'w-full h-full flex items-center justify-center text-gray-400 text-sm';
                          placeholder.textContent = `Depoimento ${testimonial.id}`;
                          target.parentElement.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="carousel-nav-button left-2 md:-left-6"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="carousel-nav-button right-2 md:-right-6"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 639px) {
          .testimonial-swiper .swiper-slide {
            opacity: 0.4;
            transform: scale(0.85);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          .testimonial-swiper .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
