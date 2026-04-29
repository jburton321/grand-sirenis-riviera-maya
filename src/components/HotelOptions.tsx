import { useCallback, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from './Button';
import { Lightbox } from './Lightbox';

/** Background video jumps past the intro so viewers see the scenery right away. */
const VIDEO_START_SECONDS = 4;

type HotelOption = {
  /** Primary card title (without the "All-Inclusive Resort" suffix). */
  name: string;
  /** Eyebrow rendered below the card title. */
  tagline: string;
  /** Full marketing name for the lightbox heading (may include "All-Inclusive Resort"). */
  lightboxName: string;
  /** Eyebrow / location tagline rendered in the lightbox. */
  subtitle: string;
  /** Short description paragraph shown in the lightbox, sourced from hilton.com. */
  description: string;
  /** Poster image used as fallback and as the `poster` for video cards. */
  src: string;
  alt: string;
  /** Optional looping background video. When present, it replaces the still image. */
  videoSrc?: string;
};

/**
 * Real copy and stats below are drawn from the official hilton.com resort
 * pages and Hilton newsroom announcements for each property. Update the
 * poster paths (`src`) to drop in real hero photography when available.
 */
const HOTELS: HotelOption[] = [
  {
    name: 'Hilton Cancun',
    tagline: 'All-Inclusive Resort',
    lightboxName: 'Hilton Cancun, an All-Inclusive Resort',
    subtitle: "Cancún Hotel Zone · 600 ft of Caribbean beachfront",
    description:
      "Endless adventures and thoughtful amenities meet at this oceanfront all-inclusive resort in the heart of Cancún's Hotel Zone. Guests enjoy 540 ocean-view rooms and suites, twelve restaurants and bars, family and adults-only pools with a waterslide, direct beach access, and a signature spa with a hydrotherapy circuit — all just 10 miles from Cancún International Airport.",
    src: 'images/accommodations/hilton-cancun-mar-caribe-01.png',
    alt: 'Hilton Cancun Mar Caribe — beachfront all-inclusive resort',
    videoSrc: 'media/hilton-cancun-hero.mp4',
  },
  {
    name: 'Hilton Tulum Riviera Maya',
    tagline: 'All-Inclusive Resort',
    lightboxName: 'Hilton Tulum Riviera Maya All-Inclusive Resort',
    subtitle: 'Riviera Maya · Secluded Caribbean bay',
    description:
      "Tucked in a secluded bay overlooking white sands and turquoise water, this is Hilton's largest resort in the Caribbean and Latin America. Spread across 735 rooms and suites in three-story villa-style buildings, discover eight resort pools, 13 restaurants and bars, a luxury spa, and a dedicated Family Zone with a water park — all inspired by the allure of Mayan civilization and modern Mexican culture.",
    src: 'images/accommodations/hilton-tulum-riviera-maya-01.png',
    alt: 'Hilton Tulum Riviera Maya — Caribbean all-inclusive resort',
    videoSrc: 'media/telum.webm',
  },
  {
    name: 'Hilton Vallarta Riviera',
    tagline: 'All-Inclusive Resort',
    lightboxName: 'Hilton All-Inclusive Resort Vallarta Riviera',
    subtitle: 'Puerto Vallarta · Bahía de Banderas Pacific coast',
    description:
      "A spectacularly oceanfront all-inclusive escape between the beaches of Bahía de Banderas and downtown Puerto Vallarta. Every one of the 444 rooms and suites faces the Pacific with a private balcony, complemented by two sparkling infinity pools, twelve restaurants, bars and lounges, a full-service Eforea Spa, nightly entertainment, and all-inclusive dining, cocktails, and pool and beach service — just nine miles from Puerto Vallarta International Airport.",
    src: 'images/accommodations/hilton-vallarta-riviera-01.png',
    alt: 'Hilton Vallarta Riviera — Pacific-coast all-inclusive resort',
    videoSrc: 'media/Vallerta.webm',
  },
];

function HotelCard({ hotel }: { hotel: HotelOption }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasVideo = Boolean(hotel.videoSrc);

  const jumpToStart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.currentTime = VIDEO_START_SECONDS;
    } catch {
      /* `currentTime` set can throw if metadata isn't ready; ignored. */
    }
    video.play().catch(() => {
      /* Autoplay may be blocked on some browsers; poster covers that case. */
    });
  }, []);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <li className="group mx-auto flex w-full max-w-md flex-col lg:max-w-none">
      {hasVideo ? (
        <button
          type="button"
          onClick={openLightbox}
          aria-label={`Play ${hotel.name} highlight reel`}
          className="relative block w-full cursor-pointer overflow-hidden rounded-lg bg-plum/5 p-0 text-left shadow-sm ring-1 ring-plum/10 aspect-[3/4] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:aspect-[4/5]"
        >
          {/*
            Background-video fill: absolute inset-0 + min-w/h-full centered,
            plus a slight `scale-110` to crop any baked-in letterbox bars
            from the source clip. The `overflow-hidden` on the parent keeps
            the overscan hidden.
          */}
          <video
            ref={videoRef}
            src={hotel.videoSrc}
            poster={hotel.src}
            aria-label={hotel.alt}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={jumpToStart}
            onEnded={jumpToStart}
            className="absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-110 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.16]"
          />

          {/* Permanent, subtle bottom vignette so the play control always reads against bright scenes. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent"
          />

          {/* Always-visible play button + eyebrow — centered, stacked, scales up on hover / focus. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-plum shadow-2xl ring-1 ring-plum/10 backdrop-blur-sm md:h-20 md:w-20">
              <Play
                className="ml-0.5 h-7 w-7 fill-current md:h-8 md:w-8"
                aria-hidden
              />
            </span>
            <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-md backdrop-blur-sm md:text-xs">
              Watch video
            </span>
          </div>
        </button>
      ) : (
        <div className="overflow-hidden rounded-lg bg-plum/5 shadow-sm ring-1 ring-plum/10 aspect-[3/4] sm:aspect-[4/5]">
          <img
            src={hotel.src}
            alt={hotel.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="mt-4">
        <p className="text-fluid-lg font-bold leading-tight tracking-tight text-slate-900 md:text-fluid-xl">
          {hotel.name}
        </p>
        <p className="mt-1 text-fluid-sm font-normal leading-snug text-gray-700">
          {hotel.tagline}
        </p>
      </div>
      <div className="mt-4">
        <Button className="w-full" asCta>
          RESERVE
        </Button>
      </div>

      {hasVideo ? (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          videoUrl={hotel.videoSrc}
          title={hotel.lightboxName}
          videoSubtitle={hotel.subtitle}
          videoDescription={hotel.description}
          videoCta={
            <Button className="w-full sm:w-auto" asCta>
              RESERVE
            </Button>
          }
          videoAutoPlayMuted
          videoStartSeconds={VIDEO_START_SECONDS}
        />
      ) : null}
    </li>
  );
}

export function HotelOptions() {
  return (
    <section className="bg-white px-4 py-fluid-8 md:px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <div className="mb-fluid-6 text-center">
          <h2 className="font-sans text-fluid-2xl font-bold tracking-tight text-slate-800 md:text-fluid-3xl">
            Your Choice of Three Hilton Resorts
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-fluid-base leading-relaxed text-gray-700">
            Every Paradise Retreat certificate unlocks your pick of these three
            Hilton luxury all-inclusive resorts in Mexico &mdash; Cancún, Tulum,
            or Puerto Vallarta.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3">
          {HOTELS.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </ul>
      </div>
    </section>
  );
}
