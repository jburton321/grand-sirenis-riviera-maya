import { useState } from 'react';
import { Expand } from 'lucide-react';
import { Lightbox, type LightboxImageItem } from './Lightbox';
import {
  AMENITIES_HOME_GRID_INTRO,
  AMENITIES_HOME_GRID_ITEMS,
} from '../content/amenityLists';

const amenities: LightboxImageItem[] = AMENITIES_HOME_GRID_ITEMS.map((item) => ({
  src: item.src,
  label: item.label,
  description: item.description,
}));

export function AmenitiesGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="px-4 pb-10 pt-0 sm:pb-12 sm:px-6 md:pb-16">
      <div className="mx-auto max-w-content text-center">
        <img
          className="mx-auto mb-6 h-10 transition-transform duration-300 hover:scale-105 sm:mb-8 sm:h-12 md:h-14"
          src="home/image-30.png"
          alt="Grand Sirenis Riviera Maya Resort & Spa"
        />

        <h2 className="mb-3 px-2 text-xl font-black text-slate-800 sm:mb-4 sm:text-2xl md:text-3xl">
          Explore the amenities at<br />
          Grand Sirenis Riviera Maya Resort &amp; Spa
        </h2>

        <p className="mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-gray-800 sm:mb-10 sm:text-lg md:mb-12">
          {AMENITIES_HOME_GRID_INTRO}
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <button
              key={amenity.src}
              type="button"
              onClick={() => openLightbox(index)}
              className="group flex w-full cursor-pointer flex-col items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:gap-3"
              aria-label={`Open details: ${amenity.label}`}
            >
              <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src={amenity.src}
                  alt=""
                  className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-36 md:h-44"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <div className="absolute inset-0 rounded-lg border-[3px] border-white/40 sm:rounded-xl" />
                </div>
                <div className="absolute right-2 top-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:right-3 sm:top-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-lg sm:h-10 sm:w-10">
                    <Expand className="h-4 w-4 text-gray-800 sm:h-5 sm:w-5" aria-hidden />
                  </span>
                </div>
              </div>
              <span className="text-center text-xs font-medium leading-tight text-black transition-colors duration-300 group-hover:text-primary sm:text-sm">
                {amenity.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={amenities}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
        title="Resort amenity"
      />
    </section>
  );
}
