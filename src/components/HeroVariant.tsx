import { BookingCard } from './BookingCard';
import {
  HILTON_CANCUN_NAME,
  HILTON_TULUM_NAME,
  HILTON_VALLARTA_NAME,
} from '../constants';

/**
 * HeroVariant — experimental "destinations" hero.
 *
 * Mobile / Tablet (<lg): five stacked rows —
 *                        1) decorative sticker row (bg image + contrast gradient + mexico-10)
 *                        2) Hilton Cancun  3) Hilton Tulum Riviera Maya  4) Hilton Vallarta
 *                        5) BookingCard (duplicate of the one in <Hero />).
 * Desktop (lg+):        4-column grid — three destination cards + BookingCard, edge-to-edge.
 *                        A decorative mexico-10 sticker + top contrast gradient float over
 *                        the destination columns (independent of card hover).
 *
 * Each card carries the canonical full Hilton resort name (see `constants.ts`).
 */
const DESTINATIONS = [
  { name: HILTON_CANCUN_NAME, src: 'images/home/Cancun.png' },
  { name: HILTON_TULUM_NAME, src: 'images/home/Tullum.png' },
  { name: HILTON_VALLARTA_NAME, src: 'images/home/PuertoVallarta.png' },
] as const;

export function HeroVariant() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-plum lg:min-h-[800px] lg:overflow-visible">
      {/* Independent contrast layer: top-only dark gradient sized to the sticker zone.
          Desktop only — spans cols 1-3 (viewport - 28rem BookingCard track). */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[28rem] w-[calc(100%-28rem)] bg-gradient-to-b from-black/70 via-black/30 to-transparent xl:h-[36rem] lg:block"
        aria-hidden
      />

      {/* Independent decorative mexico-10 sticker, sized + positioned over the contrast layer.
          Desktop only — same width as the gradient (cols 1-3). */}
      <div
        className="pointer-events-none absolute left-0 top-[20px] z-30 hidden w-[calc(100%-28rem)] justify-center xl:top-[10px] lg:flex"
        aria-hidden
      >
        <img
          src="images/home/mexico-10.png"
          alt=""
          className="block h-auto w-auto max-w-[46rem] object-contain xl:max-w-[58rem]"
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {/* lg+: 4 equal columns. <lg: 5 stacked rows (sticker → 3 destinations → BookingCard). */}
        <div className="flex flex-1 flex-col gap-0 lg:grid lg:grid-cols-[1fr_1fr_1fr_28rem] lg:items-stretch lg:gap-0">
          {/* Row 1 on <lg only: decorative sticker row.
              Mirrors the desktop sticker treatment — a background image with an
              independent top-down contrast gradient layered UNDER the mexico-10 sticker.
              No fixed height: row sizes to the sticker so it never gets cropped. */}
          <div
            className="relative flex min-h-[32rem] w-full items-center justify-center overflow-hidden px-0 py-fluid-3 md:min-h-[40rem] lg:hidden"
          >
            <img
              src="images/home/mobile-hero-top-bg.png"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="images/home/mexico-10.png"
              alt=""
              aria-hidden
              className="relative z-10 mx-auto my-auto block h-auto w-full max-w-3xl origin-center translate-y-16 scale-[1.35] object-contain md:max-w-5xl md:translate-y-20 md:scale-[1.18]"
            />
          </div>

          {DESTINATIONS.map((destination) => (
            <div
              key={destination.name}
              className="group relative flex h-40 cursor-pointer overflow-hidden md:h-48 lg:h-auto"
            >
              <img
                src={destination.src}
                alt={destination.name}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Bottom gradient for contrast behind destination titles */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                aria-hidden
              />
              <div className="relative z-10 mt-auto flex w-full flex-col items-center gap-1 px-fluid-4 pb-0 pt-fluid-3 text-center text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 lg:pb-fluid-4 lg:pt-fluid-4">
                <span className="text-balance font-serif text-fluid-base font-semibold leading-tight text-white drop-shadow md:text-fluid-lg lg:text-fluid-xl">
                  {destination.name}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-fluid-xs font-medium uppercase tracking-[0.2em] text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                  Explore
                  <span aria-hidden className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          ))}

          {/* Col 4 on lg+ / Row 5 on <lg: BookingCard (duplicate of the one in <Hero />). */}
          <div className="relative z-10 w-full lg:w-full">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}
