import {
  OFFER_HEADLINE_DESTINATION,
  OFFER_HEADLINE_VACATION,
  OFFER_SAVE_PERCENT,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  RESORT_DISPLAY_NAME,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';
import { StruckRetailPrice } from './StruckRetailPrice';

/**
 * OfferIntroSection — full-bleed offer headline.
 *
 * Renders the PHH frosted-glass card (logo + stay label + destination
 * headline + supporting price copy) horizontally and vertically centered
 * on top of a full-width background image. Lifted out of ParadiseSection
 * so each visual zone owns its own section and background.
 *
 * Background is a placeholder right now (`HERO-BCK-Desktop.png`) — swap
 * the `BACKGROUND_IMAGE` constant when the dedicated artwork is ready.
 */
const BACKGROUND_IMAGE = 'images/home/details-img.png';

export function OfferIntroSection() {
  return (
    <section
      className="relative w-full min-h-[560px] bg-plum bg-cover bg-center bg-no-repeat sm:min-h-[620px] md:min-h-[700px] lg:min-h-[820px]"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      aria-labelledby="offer-intro-heading"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-content items-center justify-center px-4 py-fluid-8 sm:px-6 md:py-fluid-10 lg:px-10 lg:py-fluid-12">
        <div className="ios-frosted-glass mx-auto w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="w-full px-5 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10">
            <img
              src="images/shared/PHH-LOGO.svg"
              alt={RESORT_DISPLAY_NAME}
              className="mx-auto block h-auto w-full max-w-48 object-contain object-center sm:max-w-52 md:max-w-56"
              width={500}
              height={180}
              loading="lazy"
            />
          </div>
          <div className="px-5 pb-7 pt-5 sm:px-8 sm:pb-9 sm:pt-6 md:px-10 md:pb-10 md:pt-7">
            <h2 id="offer-intro-heading" className="text-center text-slate-800">
              <span className="block text-fluid-sm font-bold tracking-tight sm:text-fluid-base">
                {OFFER_STAY_LABEL}
              </span>
              <span className="mt-2 block text-fluid-2xl font-bold tracking-tight sm:mt-3 md:text-fluid-3xl">
                {OFFER_HEADLINE_DESTINATION} · {OFFER_HEADLINE_VACATION}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-pretty text-gray-900 text-fluid-base leading-relaxed sm:mt-8 sm:text-fluid-lg">
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
    </section>
  );
}
