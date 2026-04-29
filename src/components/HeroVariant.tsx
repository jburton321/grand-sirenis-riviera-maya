import { BookingCard } from './BookingCard';

/**
 * HeroVariant — experimental "destinations" hero.
 *
 * Mobile / Tablet (<lg): five stacked rows —
 *                        1) decorative sticker row (bg image + contrast gradient + mexico-10)
 *                        2) Cancún 3) Tulum 4) Puerto Vallarta
 *                        5) BookingCard (duplicate of the one in <Hero />).
 * Desktop (lg+):        4-column grid — three destination cards + BookingCard, edge-to-edge.
 *                        A decorative mexico-10 sticker + top contrast gradient float over
 *                        the destination columns (independent of card hover).
 */
const DESTINATIONS = [
  { label: 'Cancún', src: 'images/home/Cancun.png' },
  { label: 'Tulum', src: 'images/home/Tullum.png' },
  { label: 'Puerto Vallarta', src: 'images/home/PuertoVallarta.png' },
] as const;

export function HeroVariant() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-plum lg:min-h-[800px] lg:overflow-visible">
      {/* Independent contrast layer: top-only dark gradient sized to the sticker zone.
          Desktop only — does NOT extend down across the destination cards. */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-[28rem] w-3/4 bg-gradient-to-b from-black/70 via-black/30 to-transparent xl:h-[36rem] lg:block"
        aria-hidden
      />

      {/* Independent decorative mexico-10 sticker, sized + positioned over the contrast layer.
          Desktop only. */}
      <div
        className="pointer-events-none absolute left-0 top-[20px] z-30 hidden w-3/4 justify-center xl:top-[10px] lg:flex"
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
        <div className="flex flex-1 flex-col gap-0 lg:grid lg:grid-cols-4 lg:items-stretch lg:gap-0">
          {/* Row 1 on <lg only: decorative sticker row.
              Mirrors the desktop sticker treatment — a background image with an
              independent top-down contrast gradient layered UNDER the mexico-10 sticker.
              No fixed height: row sizes to the sticker so it never gets cropped. */}
          <div
            className="relative flex min-h-[32rem] w-full items-center justify-center overflow-hidden px-0 py-fluid-3 md:min-h-[40rem] lg:hidden"
          >
            <img
              src="images/home/HERO-BCK-MOBILE.png"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Independent contrast gradient — sits between the bg image and the sticker. */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"
              aria-hidden
            />
            <img
              src="images/home/mexico-10.png"
              alt=""
              aria-hidden
              className="relative z-10 mx-auto my-auto block h-auto w-full max-w-3xl origin-center scale-[1.35] object-contain md:max-w-5xl md:scale-[1.18]"
            />
          </div>

          {DESTINATIONS.map((destination) => (
            <div
              key={destination.label}
              className="group relative flex h-40 cursor-pointer overflow-hidden md:h-48 lg:h-auto"
            >
              <img
                src={destination.src}
                alt={`Hilton ${destination.label}`}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Bottom gradient for contrast behind destination titles */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                aria-hidden
              />
              <div className="relative z-10 mt-auto flex w-full flex-col items-center gap-1 px-fluid-4 pb-0 pt-fluid-3 text-center text-white transition-transform duration-500 ease-out group-hover:-translate-y-1 lg:pb-fluid-4 lg:pt-fluid-4">
                <span className="text-fluid-xs font-semibold uppercase tracking-[0.18em] text-yellow">
                  Hilton
                </span>
                <span className="font-serif text-fluid-2xl font-semibold leading-tight text-white drop-shadow">
                  {destination.label}
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
          <div className="relative z-10 w-full lg:w-auto">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
}
