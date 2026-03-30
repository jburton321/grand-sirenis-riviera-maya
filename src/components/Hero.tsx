import { useState } from 'react';
import { Play } from 'lucide-react';
import { BookingCard } from './BookingCard';
import { BackgroundSection } from './BackgroundSection';
import { Lightbox } from './Lightbox';

export function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <BackgroundSection
        backgroundImage="home/section0.png"
        className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex flex-col overflow-visible"
      >
        <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-fluid-3 w-full flex-1 flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0 lg:gap-fluid-4 flex-1">
            <div className="flex flex-col items-center order-1">
              <img
                className="hero-sticker-element"
                src="home/mexico-10.png"
                alt="Mexico destination"
                loading="eager"
              />
              <div className="hero-composite-wrap relative lg:hidden">
                <img
                  className="hero-couple-element hero-layer-couple"
                  src="home/layer-0-10.png"
                  alt="Couple enjoying resort"
                  loading="eager"
                />
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 md:gap-3 bg-white/95 backdrop-blur-sm px-3 py-2 md:px-5 md:py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full group-hover:bg-amber-600 transition-colors">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                  </span>
                  <span className="text-gray-900 font-semibold text-base md:text-lg pr-1">Play video</span>
                </button>
              </div>
            </div>
            <div className="w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] lg:w-auto -mx-4 md:-mx-6 lg:mx-0 order-2">
              <BookingCard />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <div className="max-w-content w-full mx-auto px-4 md:px-6 lg:px-8 flex">
            <div className="relative pointer-events-auto flex-1 flex justify-center">
              <div className="hero-composite-wrap relative">
                <img
                  className="hero-couple-element hero-layer-couple"
                  src="home/layer-0-10.png"
                  alt="Couple enjoying resort"
                  loading="eager"
                />
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-[12%] left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full group-hover:bg-amber-600 transition-colors">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </span>
                  <span className="text-gray-900 font-semibold text-lg pr-1">Play video</span>
                </button>
              </div>
            </div>
            <div className="flex-shrink-0" style={{width: 'calc(28rem + 2rem)'}}></div>
          </div>
        </div>
      </BackgroundSection>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title="Resort Video"
      />
    </>
  );
}
