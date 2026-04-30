import { useCallback, useState } from 'react';
import { Play } from 'lucide-react';
import { BookingCard } from './BookingCard';
import { Button } from './Button';
import { Lightbox } from './Lightbox';
import {
  HILTON_RESORTS_BY_KEY,
  type HiltonResort,
  type HiltonResortKey,
} from '../content/hiltonResorts';

/**
 * HeroVariant — homepage destinations hero.
 *
 * Mobile / Tablet (<lg): five stacked rows —
 *                        1) decorative sticker row (bg image + contrast gradient + mexico-10)
 *                        2) Hilton Cancun  3) Hilton Tulum Riviera  4) Hilton Vallarta
 *                        5) BookingCard (duplicate of the one in <Hero />).
 * Desktop (lg+):        4-column grid — three destination cards + BookingCard, edge-to-edge.
 *                        A decorative mexico-10 sticker + top contrast gradient float over
 *                        the destination columns (independent of card hover).
 *
 * Each destination card carries the canonical full Hilton resort name and an
 * always-visible play button that opens the same `Lightbox` video popup used
 * by the `HotelOptions` "Your Choice of Three Hilton Resorts" section.
 */

type Destination = HiltonResort & {
  /** Full-bleed hero photo for the destination card (different from the lightbox poster). */
  src: string;
};

const DESTINATIONS: Destination[] = [
  { ...HILTON_RESORTS_BY_KEY.cancun, src: 'images/home/Cancun.png' },
  { ...HILTON_RESORTS_BY_KEY.tulum, src: 'images/home/Tullum.png' },
  { ...HILTON_RESORTS_BY_KEY.vallarta, src: 'images/home/PuertoVallarta.png' },
];

function DestinationCard({
  destination,
  onOpenVideo,
}: {
  destination: Destination;
  onOpenVideo: (key: HiltonResortKey) => void;
}) {
  const handleClick = useCallback(() => {
    onOpenVideo(destination.key);
  }, [destination.key, onOpenVideo]);
  const addInnerShadow =
    destination.key === 'tulum' || destination.key === 'vallarta';

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Play ${destination.name} highlight reel`}
      className="group relative flex h-40 cursor-pointer overflow-hidden bg-plum text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset md:h-48 lg:h-auto"
    >
      <img
        src={destination.src}
        alt={destination.name}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-black/45"
      />
      {addInnerShadow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.35)]"
        />
      )}

      {/* Bottom gradient for contrast behind destination titles.
          Explicit z-0 so the text block (z-20 below) is unambiguously above. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/5 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
      />

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-2 px-fluid-4 pb-fluid-3 pt-fluid-3 text-center text-white transition-transform duration-500 ease-out lg:mt-auto lg:h-auto lg:-translate-y-[78px] lg:justify-start lg:pb-fluid-4 lg:pt-fluid-4 lg:group-hover:-translate-y-[86px]">
        <span className="text-balance font-sans text-fluid-base font-semibold leading-tight text-white drop-shadow md:text-fluid-lg lg:text-fluid-xl">
          {destination.name}
        </span>

        {/* Always-visible play affordance under the resort title. */}
        <span
          aria-hidden
          className="mt-1 inline-flex items-center gap-2 transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-amber shadow-md ring-1 ring-plum/10 backdrop-blur-sm md:h-9 md:w-9">
            <Play className="ml-0.5 h-3.5 w-3.5 fill-current md:h-4 md:w-4" />
          </span>
          <span className="text-fluid-xs font-semibold uppercase tracking-[0.18em] text-white/95 drop-shadow">
            Watch Video
          </span>
        </span>
      </div>
    </button>
  );
}

export function HeroVariant() {
  const [openKey, setOpenKey] = useState<HiltonResortKey | null>(null);

  const openLightbox = useCallback((key: HiltonResortKey) => {
    setOpenKey(key);
  }, []);
  const closeLightbox = useCallback(() => setOpenKey(null), []);

  return (
    <section className="relative flex flex-col overflow-hidden bg-plum lg:min-h-[800px] lg:overflow-visible">
      {/* Independent decorative mexico-10 sticker, sized + positioned over the contrast layer.
          Desktop only — same width as the gradient (cols 1-3). */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-[calc(100%-28rem)] items-center justify-center lg:flex lg:-translate-y-[126px]"
        aria-hidden
      >
        <img
          src="images/home/mexico-10.png"
          alt=""
          className="block h-auto w-auto max-w-[58rem] object-contain xl:max-w-[70rem]"
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {/* lg+: 4 equal columns. <lg: 5 stacked rows (sticker → 3 destinations → BookingCard). */}
        <div className="flex flex-1 flex-col gap-0 lg:grid lg:grid-cols-[1fr_1fr_1fr_28rem] lg:items-stretch lg:gap-0">
          {/* Row 1 on <lg only: decorative sticker row.
              Mirrors the desktop sticker treatment — a background image with an
              independent top-down contrast gradient layered UNDER the mexico-10 sticker.
              No fixed height: row sizes to the sticker so it never gets cropped. */}
          <div className="relative flex min-h-[32rem] w-full items-center justify-center overflow-hidden px-0 py-fluid-3 md:min-h-[40rem] lg:hidden">
            <img
              src="images/home/MobileHERO-Top.png"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-black/40"
            />
            <img
              src="images/home/mexico-10.png"
              alt=""
              aria-hidden
              className="relative z-10 mx-auto my-auto block h-auto w-full max-w-3xl origin-center -translate-y-[54px] scale-[1.35] object-contain md:max-w-5xl md:-translate-y-[38px] md:scale-[1.18]"
            />
            <div className="absolute inset-x-0 bottom-[94px] z-20 px-4 md:bottom-[102px] md:px-6">
              <Button asCta className="w-full">
                RESERVE NOW
              </Button>
            </div>
          </div>

          {DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.key}
              destination={destination}
              onOpenVideo={openLightbox}
            />
          ))}

          {/* Col 4 on lg+ / Row 5 on <lg: BookingCard (duplicate of the one in <Hero />). */}
          <div className="relative z-10 w-full lg:w-full">
            <BookingCard />
          </div>
        </div>
      </div>

      {/* Single Lightbox instance shared across all three destination cards.
          Driven by `openKey` state — null when closed, key when one is open. */}
      {DESTINATIONS.map((destination) => (
        <Lightbox
          key={destination.key}
          isOpen={openKey === destination.key}
          onClose={closeLightbox}
          videoUrl={destination.videoSrc}
          title={destination.name}
          videoSubtitle={destination.subtitle}
          videoDescription={destination.description}
          videoCta={
            <Button className="w-full sm:w-auto" asCta>
              RESERVE
            </Button>
          }
          videoAutoPlayMuted
          videoStartSeconds={destination.videoStartSeconds}
        />
      ))}
    </section>
  );
}
