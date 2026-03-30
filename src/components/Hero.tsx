import { useState } from 'react';
import { Play } from 'lucide-react';
import { PLAY_VIDEO_LABEL } from '../constants';
import { BookingCard } from './BookingCard';
import { Lightbox } from './Lightbox';

export function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[500px] flex-col overflow-hidden md:min-h-[600px] lg:min-h-[800px] lg:overflow-visible">
        {/* Desktop: full-bleed hero (unchanged) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-center lg:block"
          style={{ backgroundImage: 'url(home/HERO-BCK-Desktop.png)' }}
          aria-hidden
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-content flex-1 flex-col pt-8 md:pt-12 lg:px-8 lg:pt-fluid-3">
            <div className="flex flex-1 flex-col gap-0 lg:flex-row lg:items-start lg:justify-between lg:gap-fluid-4">
              {/* Mobile / tablet: background in this column only, above booking; full-bleed under lg (parent has lg:px-8 only). */}
              <div className="relative order-1 flex min-h-[500px] flex-col items-center overflow-hidden md:min-h-[600px] lg:min-h-0 lg:overflow-visible">
                <div
                  className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center md:hidden"
                  style={{ backgroundImage: 'url(home/HERO-BCK-MOBILE.png)' }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-center md:block lg:hidden"
                  style={{ backgroundImage: 'url(home/HERO-BCK-TAB.png)' }}
                  aria-hidden
                />
                <div className="relative z-10 flex w-full flex-col items-center px-4 md:px-6 lg:px-0">
                  <img
                    className="hero-sticker-element"
                    src="home/mexico-10.png"
                    alt="Mexico destination"
                    loading="eager"
                  />
                  <div className="hero-composite-wrap relative overflow-visible lg:hidden">
                    <img
                      className="hero-couple-element hero-layer-couple"
                      src="home/layer-0-10.png"
                      alt="Couple enjoying resort"
                      loading="eager"
                    />
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      className="absolute bottom-[12%] left-1/2 z-10 flex w-max max-w-none shrink-0 -translate-x-1/2 flex-nowrap items-center gap-2 whitespace-nowrap rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 group hover:bg-white hover:shadow-xl md:gap-3 md:px-5 md:py-3"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 transition-colors group-hover:bg-amber-600 md:h-12 md:w-12">
                        <Play className="ml-0.5 h-5 w-5 shrink-0 fill-white text-white md:h-6 md:w-6" />
                      </span>
                      <span className="shrink-0 whitespace-nowrap pr-1 text-base font-semibold leading-none text-gray-900 md:text-lg">
                        {PLAY_VIDEO_LABEL}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 order-2 w-full lg:w-auto">
                <BookingCard />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 hidden lg:flex">
            <div className="mx-auto flex w-full max-w-content px-4 md:px-6 lg:px-8">
              <div className="relative flex flex-1 justify-center pointer-events-auto">
                <div className="hero-composite-wrap hero-desktop-play-shell relative min-h-[280px]">
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute bottom-[12%] left-1/2 z-10 flex w-max max-w-none shrink-0 -translate-x-1/2 flex-nowrap items-center gap-3 whitespace-nowrap rounded-full bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 group hover:bg-white hover:shadow-xl"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500 transition-colors group-hover:bg-amber-600">
                      <Play className="ml-0.5 h-6 w-6 shrink-0 fill-white text-white" />
                    </span>
                    <span className="shrink-0 whitespace-nowrap pr-1 text-lg font-semibold leading-none text-gray-900">
                      {PLAY_VIDEO_LABEL}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0" style={{ width: 'calc(28rem + 2rem)' }} />
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title="Resort Video"
      />
    </>
  );
}
