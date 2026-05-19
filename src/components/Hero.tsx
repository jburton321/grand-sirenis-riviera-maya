import { useState } from 'react';
import { Play } from 'lucide-react';
import { PLAY_VIDEO_LABEL, RESORT_VIDEO_MP4_SRC } from '../constants';
import { Button } from './Button';
import { BookingCard } from './BookingCard';
import { Lightbox } from './Lightbox';

export function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[500px] flex-col overflow-hidden bg-plum md:min-h-[600px] lg:min-h-[800px] lg:overflow-visible">
        {/* Full-bleed hero background — same image on all devices */}
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-center lg:block"
          style={{ backgroundImage: 'url(images/HERO-BCK-Desktop.png)' }}
          aria-hidden
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          <div className="mx-auto flex w-full max-w-content flex-1 flex-col pt-8 md:pt-12 lg:px-8 lg:pt-fluid-3">
            <div className="flex flex-1 flex-col gap-0 lg:flex-row lg:items-stretch lg:justify-between lg:gap-fluid-4">
              {/* Mobile/tablet bg uses the same desktop image, scoped to this column so the existing layout box (and `bg-cover` framing) is preserved. */}
              <div className="relative order-1 -mt-8 flex min-h-[500px] flex-col md:-mt-12 md:min-h-[600px] lg:mt-0 lg:min-h-0 lg:flex-1 lg:justify-center lg:overflow-visible overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center lg:hidden"
                  style={{ backgroundImage: 'url(images/HERO-BCK-Desktop.png)' }}
                  aria-hidden
                />
                <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col px-4 md:px-6 lg:min-h-0 lg:px-0">
                  <div className="flex min-h-0 flex-1 flex-col justify-center">
                    <div className="-translate-y-3 flex flex-col items-center gap-6 md:gap-5 lg:-translate-y-4 lg:gap-6">
                      <div className="max-md:-mx-4 max-md:w-[calc(100%+2rem)] max-md:shrink-0 max-md:px-4 md:contents">
                        <img
                          className="hero-sticker-element !mt-0"
                          src="images/mexico-10.png"
                          alt="Mexico destination"
                          loading="eager"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsLightboxOpen(true)}
                        className="flex w-max max-w-none shrink-0 flex-nowrap items-center gap-1.5 whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1.5 shadow-xl shadow-plum/20 backdrop-blur-sm transition-all duration-300 group hover:bg-white hover:shadow-2xl hover:shadow-plum/25 md:gap-2 md:px-3.5 md:py-2"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D30093] shadow-md shadow-black/25 transition-[color,box-shadow] group-hover:bg-[#AD007E] group-hover:shadow-lg md:h-9 md:w-9 lg:h-10 lg:w-10">
                          <Play className="ml-0.5 h-4 w-4 shrink-0 fill-white text-white md:h-5 md:w-5" />
                        </span>
                        <span className="shrink-0 whitespace-nowrap pr-0.5 text-sm font-semibold leading-none text-gray-900 md:text-base">
                          {PLAY_VIDEO_LABEL}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="relative z-10 mt-4 mb-8 w-full max-w-none shrink-0 lg:hidden md:mt-5 md:mb-10">
                    <Button className="w-full justify-center" asCta>
                      RESERVE NOW
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 order-2 w-full lg:w-auto lg:self-start">
                <BookingCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        title="Resort Video"
        videoUrl={RESORT_VIDEO_MP4_SRC}
      />
    </>
  );
}
