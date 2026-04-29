import { BackgroundSection } from './BackgroundSection';
import { PriceBadge } from './PriceBadge';
import {
  HILTON_CANCUN_NAME,
  HILTON_TULUM_NAME,
  HILTON_VALLARTA_NAME,
  RESORT_DISPLAY_NAME,
} from '../constants';

/**
 * ParadiseSection — circle-art background with the centred PriceBadge,
 * followed by the dark "A Private Collection" descriptor band.
 *
 * The headline / glass card content has moved to its own dedicated
 * `<OfferIntroSection>` above this component; this section now owns
 * just the circle artwork and the badge.
 */
export function ParadiseSection() {
  return (
    <>
      <BackgroundSection
        backgroundImage="images/home/interior-divider2.png"
        backgroundImageMobile="images/home/interior-divider2.png"
        // lg:aspect locks the desktop section height to the background
        // image's native 3842:2413 ratio so the image fills the section
        // edge-to-edge as the viewport scales — and keeps the absolute-
        // positioned PriceBadge centered inside the circle baked into the
        // image at every screen width.
        className="relative z-20 pt-10 sm:pt-12 md:pt-16 lg:-mt-[110px] lg:aspect-[3842/601]"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
          {/* Mobile / tablet keep the badge in document flow.
              Desktop floats it absolutely at 50% / ~62% of the section so it
              always lands inside the circle baked into the background image as
              both scale together with the viewport. */}
          <div className="flex justify-center lg:absolute lg:left-1/2 lg:top-[14%] lg:m-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
            {/* Decorative graphic frame around the price badge — the badge
                sits centred on top of `graphic.png`. The wrapper is square
                (graphic is 706x707) and sized larger than the badge so the
                artwork forms a visible halo. */}
            <div
              className="relative my-10 flex aspect-square w-[280px] max-w-full items-center justify-center bg-contain bg-center bg-no-repeat sm:my-12 sm:w-[320px] md:my-14 md:w-[360px] lg:my-0 lg:w-[440px]"
              style={{ backgroundImage: 'url(images/home/graphic.png)' }}
            >
              <PriceBadge width={260} className="max-w-full" />
            </div>
          </div>
        </div>
      </BackgroundSection>

      {/* Bottom band: lifted out of BackgroundSection so it sits flush against
          the section's bottom edge instead of leaving the page color visible
          between the natural-aspect background image and this band. */}
      <div className="relative z-10 bg-plum px-4 py-fluid-8 sm:px-6 md:py-fluid-10">
        <div className="max-w-content mx-auto text-center">
          <h3 className="mb-6 text-xl font-extrabold text-white sm:mb-8 sm:text-2xl md:mb-10">
            A Private Collection of Luxury All-Inclusive Resorts
          </h3>
          <p className="text-pretty text-base leading-relaxed text-white sm:text-lg md:text-xl">
            {RESORT_DISPLAY_NAME} is a private vacation club operating across Mexico's Caribbean
            and Pacific coasts, curating certificate programs for members and invited guests of
            its partner properties. Today that includes three flagship Hilton properties:{' '}
            {HILTON_CANCUN_NAME}; {HILTON_TULUM_NAME}; and {HILTON_VALLARTA_NAME}.
          </p>
        </div>
      </div>
    </>
  );
}
