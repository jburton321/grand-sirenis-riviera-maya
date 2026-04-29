import { BackgroundSection } from './BackgroundSection';
import { PriceBadge } from './PriceBadge';
import {
  HILTON_CANCUN_NAME,
  HILTON_TULUM_NAME,
  HILTON_VALLARTA_NAME,
  OFFER_HEADLINE_DESTINATION,
  OFFER_HEADLINE_VACATION,
  OFFER_SAVE_PERCENT,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  RESORT_DISPLAY_NAME,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';
import { StruckRetailPrice } from './StruckRetailPrice';

export function ParadiseSection() {
  return (
    <>
      <BackgroundSection
        backgroundImage="images/home/section-wrapper0.png"
        backgroundImageMobile="images/home/section-wrapper-MOBILE4.png"
        // lg:aspect locks the desktop section height to the background
        // image's native 3842:2413 ratio so the image fills the section
        // edge-to-edge as the viewport scales — and keeps the absolute-
        // positioned PriceBadge centered inside the circle baked into the
        // image at every screen width.
        className="pt-10 sm:pt-12 md:pt-16 lg:aspect-[3842/2413]"
      >
        <div className="max-w-content mx-auto -mt-6 px-4 sm:-mt-8 sm:px-6 md:-mt-10 text-center">
          {/* Mobile / tablet: in document flow with margin spacing.
              Desktop: pinned to the top-center of the aspect-ratioed section
              (same anchoring rule as the PriceBadge below) so the headline
              card always sits above the circle baked into the background
              image, regardless of viewport width. */}
          <div className="mb-6 sm:mb-8 lg:absolute lg:left-1/2 lg:top-[4%] lg:m-0 lg:w-full lg:max-w-3xl lg:-translate-x-1/2 lg:px-4">
            <div className="ios-frosted-glass mx-auto w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl">
              <div className="w-full px-5 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 lg:pt-6">
                <img
                  src="images/shared/PHH-LOGO.svg"
                  alt={RESORT_DISPLAY_NAME}
                  className="mx-auto block h-auto w-full max-w-48 object-contain object-center sm:max-w-52 md:max-w-56 lg:max-w-44"
                  width={500}
                  height={180}
                  loading="lazy"
                />
              </div>
              <div className="px-5 pb-7 pt-5 sm:px-8 sm:pb-9 sm:pt-6 md:px-10 md:pb-10 md:pt-7 lg:pb-6 lg:pt-4">
                <h2 className="text-slate-800">
                  <span className="block text-fluid-sm font-bold tracking-tight sm:text-fluid-base">
                    {OFFER_STAY_LABEL}
                  </span>
                <span className="mt-2 block text-fluid-2xl font-bold tracking-tight sm:mt-3 md:text-fluid-3xl lg:text-fluid-2xl">
                  {OFFER_HEADLINE_DESTINATION} · {OFFER_HEADLINE_VACATION}
                </span>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-gray-900 text-fluid-base leading-relaxed sm:mt-8 sm:text-fluid-lg lg:mt-4 lg:text-fluid-base">
                  <span className="font-bold text-slate-950">{RESORT_DISPLAY_NAME}</span>
                  {': '}
                  <span className="font-extrabold text-black">
                    {OFFER_TOTAL_AMOUNT}
                    <PriceFootnoteMark /> deposit today
                  </span>{' '}
                  — pay $999 at booking. $1,499 total for a{' '}
                  <StruckRetailPrice className="font-extrabold text-slate-950" /> all-inclusive
                  retreat (save {OFFER_SAVE_PERCENT}%).{' '}
                  <span className="font-semibold text-slate-950">
                    12 months to travel. Total price, not per person or per night.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile / tablet keep the badge in document flow (margins + flex-center).
              Desktop floats it absolutely at 50% / ~38% of the section so it
              always lands inside the circle baked into the background image as
              both scale together with the viewport. Tweak `top-[38%]` if the
              circle's centre needs a different anchor. */}
          <div className="mt-24 sm:mt-12 mb-6 sm:mb-8 md:mt-20 flex justify-center lg:absolute lg:left-1/2 lg:top-[62%] lg:m-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <PriceBadge width={260} className="max-w-full my-[61px] lg:my-0" />
          </div>
        </div>
      </BackgroundSection>

      {/* Bottom band: lifted out of BackgroundSection so it sits flush against
          the section's bottom edge instead of leaving the page color visible
          between the natural-aspect background image and this band. */}
      <div className="bg-plum py-14 sm:py-16 md:py-20 lg:pb-12 px-4 sm:px-6 -mt-[10px]">
        <div className="max-w-content mx-auto text-center">
          <h3 className="mb-6 text-xl font-extrabold text-white sm:mb-8 sm:text-2xl md:mb-10">
            A Private Collection of Luxury All-Inclusive Resorts
          </h3>
          <p className="text-base leading-relaxed text-white sm:text-lg md:text-xl">
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
