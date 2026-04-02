import { useState } from 'react';
import { Lightbox, type LightboxImageItem } from './Lightbox';
import { RESORT_DISPLAY_NAME } from '../constants';
import {
  AMENITIES_HOME_GRID_INTRO,
  AMENITIES_HOME_GRID_ITEMS,
} from '../content/amenityLists';

const lightboxItems: LightboxImageItem[] = AMENITIES_HOME_GRID_ITEMS.map((item) => ({
  src: item.src,
  label: item.label,
  description: item.description,
}));

/** Matches ResortBento.jsx areas; `lightboxIndex` aligns with AMENITIES_HOME_GRID_ITEMS. */
const bentoCells = [
  {
    lightboxIndex: 0,
    tag: 'Featured',
    hero: 'large' as const,
    placement:
      'col-span-2 min-h-[13rem] md:col-span-3 md:col-start-1 md:row-start-1 md:min-h-[16rem]',
  },
  {
    lightboxIndex: 3,
    tag: 'Wellness',
    hero: false as const,
    placement:
      'min-h-[10rem] md:col-span-1 md:col-start-4 md:row-start-1 md:min-h-[16rem]',
  },
  {
    lightboxIndex: 1,
    tag: 'Fitness',
    hero: false as const,
    placement:
      'min-h-[10rem] md:col-span-1 md:col-start-1 md:row-start-2 md:min-h-[10rem]',
  },
  {
    lightboxIndex: 2,
    tag: 'Activity',
    hero: false as const,
    placement:
      'min-h-[10rem] md:col-span-1 md:col-start-2 md:row-start-2 md:min-h-[10rem]',
  },
  {
    lightboxIndex: 4,
    tag: 'Leisure',
    hero: false as const,
    placement:
      'min-h-[10rem] md:col-span-1 md:col-start-3 md:row-start-2 md:min-h-[10rem]',
  },
  {
    lightboxIndex: 5,
    tag: 'Wellness',
    hero: false as const,
    placement:
      'min-h-[10rem] md:col-span-1 md:col-start-4 md:row-start-2 md:min-h-[10rem]',
  },
  {
    lightboxIndex: 6,
    tag: 'Social',
    hero: false as const,
    placement:
      'min-h-[10rem] md:col-span-1 md:col-start-1 md:row-start-3 md:min-h-[16rem]',
  },
  {
    lightboxIndex: 7,
    tag: 'Culinary',
    hero: 'medium' as const,
    placement:
      'col-span-2 min-h-[13rem] md:col-span-3 md:col-start-2 md:row-start-3 md:min-h-[16rem]',
  },
] as const;

function BentoCard({
  src,
  label,
  tag,
  hero,
  onOpen,
}: {
  src: string;
  label: string;
  tag: string;
  hero: false | 'large' | 'medium';
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative h-full min-h-0 min-w-0 w-full cursor-pointer overflow-hidden rounded-xl bg-plum text-left transition-transform duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-page hover:scale-[1.02] active:scale-[0.99] md:rounded-2xl md:hover:scale-[1.03]"
      aria-label={`Open details: ${label}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 md:group-hover:scale-[1.08]"
          loading="lazy"
        />
      </div>
      {/* Same treatment as Gallery.tsx image captions */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16"
        aria-hidden
      />
      <div className="relative flex h-full min-h-0 flex-col justify-end p-4 md:px-5 md:pb-5 md:pt-16">
        <span className="mb-1 block text-fluid-xs font-semibold uppercase tracking-widest text-sky-light">
          {tag}
        </span>
        <p
          className={`m-0 font-sans leading-snug text-white drop-shadow-lg ${
            hero === 'large'
              ? 'text-fluid-lg font-bold md:text-fluid-2xl'
              : hero === 'medium'
                ? 'text-fluid-base font-bold md:text-fluid-xl'
                : 'text-fluid-sm font-semibold md:text-fluid-base'
          }`}
        >
          {label}
        </p>
      </div>
    </button>
  );
}

export function AmenitiesGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-page px-4 pb-10 pt-0 sm:pb-12 md:px-6 md:pb-16 lg:px-10">
      <div className="mx-auto max-w-content text-center">
        <img
          className="mx-auto mb-6 block h-auto w-full max-w-[min(100%,20rem)] object-contain object-center transition-transform duration-300 hover:scale-[1.02] sm:mb-8 sm:max-w-[min(100%,24rem)] md:max-w-[min(100%,28rem)] lg:max-w-[min(100%,32rem)]"
          src="images/ULC-Grand-Sirenis-logo.png"
          alt={RESORT_DISPLAY_NAME}
          width={1112}
          height={171}
          loading="lazy"
        />

        <h2 className="mb-3 px-2 text-xl font-black text-slate-800 sm:mb-4 sm:text-2xl md:text-3xl">
          Explore the amenities at<br />
          Grand Sirenis Riviera Maya Resort &amp; Spa
        </h2>

        <p className="mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-gray-800 sm:mb-10 sm:text-lg md:mb-12">
          {AMENITIES_HOME_GRID_INTRO}
        </p>

        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-[minmax(12rem,16rem)_minmax(7.5rem,10rem)_minmax(12rem,16rem)] md:gap-3 lg:gap-4">
            {bentoCells.map((cell) => {
              const item = AMENITIES_HOME_GRID_ITEMS[cell.lightboxIndex];
              return (
                <div
                  key={`${cell.lightboxIndex}-${item.label}`}
                  className={`flex min-h-0 ${cell.placement}`}
                >
                  <BentoCard
                    src={item.src}
                    label={item.label}
                    tag={cell.tag}
                    hero={cell.hero}
                    onOpen={() => openLightbox(cell.lightboxIndex)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
        title="Resort amenity"
      />
    </section>
  );
}
