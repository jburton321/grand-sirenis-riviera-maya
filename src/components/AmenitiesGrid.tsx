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

/**
 * Accordion panels. `lightboxIndex` maps to AMENITIES_HOME_GRID_ITEMS
 * and drives which image + description loads for each vertical slice.
 */
const accordionPanels = [
  { lightboxIndex: 0, tag: 'Featured' },
  { lightboxIndex: 3, tag: 'Wellness' },
  { lightboxIndex: 1, tag: 'Fitness' },
  { lightboxIndex: 2, tag: 'Activity' },
] as const;

function AccordionPanel({
  src,
  label,
  tag,
  description,
  isActive,
  onActivate,
  onOpen,
}: {
  src: string;
  label: string;
  tag: string;
  description: string;
  isActive: boolean;
  onActivate: () => void;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onOpen}
      aria-label={`Open details: ${label}`}
      className={`group relative overflow-hidden bg-plum text-left
        transition-[flex-grow,height] duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset
        md:h-full md:flex-shrink md:basis-0
        ${isActive ? 'h-80 md:flex-grow-[3.5]' : 'h-24 md:flex-grow'}
      `}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={src}
          alt=""
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            isActive ? 'scale-105' : 'scale-100'
          }`}
          loading="lazy"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
        aria-hidden
      />

      <div className="relative flex h-full min-h-0 flex-col justify-end p-4 md:p-5">
        {/* Tag — fades in on desktop when active; always visible on mobile. */}
        <span
          className={`mb-1 block text-fluid-xs font-semibold uppercase tracking-widest text-sky-light transition-opacity duration-300 ${
            isActive ? 'opacity-100 md:delay-200' : 'opacity-100 md:opacity-0'
          }`}
        >
          {tag}
        </span>

        {/*
          Label — single element that rotates between vertical (collapsed)
          and horizontal (active) on desktop. Stays fully opaque so the
          motion reads as a rotation, not a fade.
        */}
        <p
          className={`m-0 whitespace-nowrap font-sans font-bold leading-snug text-white drop-shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] md:whitespace-normal ${
            isActive
              ? 'origin-bottom-left text-fluid-base md:rotate-0 md:translate-x-0 md:text-fluid-xl'
              : 'text-fluid-sm md:absolute md:bottom-5 md:left-1/2 md:top-auto md:h-fit md:w-fit md:origin-bottom-left md:-rotate-90 md:translate-x-[0.4em] md:text-fluid-base'
          }`}
        >
          {label}
        </p>

        {/* Description — expands + fades in on active. */}
        <p
          className={`m-0 overflow-hidden text-sm leading-snug text-white/90 transition-all duration-500 ${
            isActive
              ? 'mt-2 max-h-40 opacity-100 md:delay-200'
              : 'mt-0 max-h-0 opacity-0'
          }`}
        >
          {description}
        </p>
      </div>
    </button>
  );
}

export function AmenitiesGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-white pb-10 pt-0 sm:pb-12 md:pb-16">
      <div className="mx-auto max-w-content px-4 text-center md:px-6 lg:px-10">
        <img
          className="mx-auto mb-6 block h-auto w-full max-w-[min(100%,9rem)] object-contain object-center transition-transform duration-300 hover:scale-[1.02] sm:mb-8 sm:max-w-[min(100%,10.5rem)] md:max-w-[min(100%,12rem)] lg:max-w-[min(100%,14rem)]"
          src="images/shared/WW.svg"
          alt={RESORT_DISPLAY_NAME}
          width={500}
          height={180}
          loading="lazy"
        />

        <h2 className="mb-3 px-2 text-xl font-black text-slate-800 sm:mb-4 sm:text-2xl md:text-3xl">
          The Luxury Amenities You'll Find<br />
          Across Every Collection Property
        </h2>

        <p className="mx-auto mb-8 max-w-3xl px-2 text-base leading-relaxed text-gray-800 sm:mb-10 sm:text-lg md:mb-12">
          {AMENITIES_HOME_GRID_INTRO}
        </p>
      </div>

      <div
        className="flex w-full flex-col md:h-[28rem] md:flex-row lg:h-[32rem]"
        onMouseLeave={() => setActivePanel(0)}
      >
        {accordionPanels.map((panel, idx) => {
          const item = AMENITIES_HOME_GRID_ITEMS[panel.lightboxIndex];
          return (
            <AccordionPanel
              key={`${panel.lightboxIndex}-${item.label}`}
              src={item.src}
              label={item.label}
              tag={panel.tag}
              description={item.description}
              isActive={activePanel === idx}
              onActivate={() => setActivePanel(idx)}
              onOpen={() => openLightbox(panel.lightboxIndex)}
            />
          );
        })}
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
