import { BackgroundSection } from './BackgroundSection';
import { PriceBadge } from './PriceBadge';
import {
  OFFER_HEADLINE_BEACHFRONT,
  OFFER_HEADLINE_DESTINATION,
  OFFER_HEADLINE_VACATION,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  RESORT_DISPLAY_NAME,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';

export function ParadiseSection() {
  return (
    <BackgroundSection
      backgroundImage="home/section-wrapper0.png"
      className="pt-10 sm:pt-12 md:pt-16"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="ios-frosted-glass mx-auto w-full max-w-3xl rounded-2xl px-5 py-7 sm:rounded-3xl sm:px-8 sm:py-9 md:px-10 md:py-10">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <img
                src="home/ULC-Grand-Sirenis-logo.png"
                alt={RESORT_DISPLAY_NAME}
                className="mx-auto h-auto max-h-12 w-auto max-w-[min(100%,220px)] object-contain sm:max-h-14 md:max-h-16 md:max-w-[260px]"
                width={1112}
                height={171}
                loading="lazy"
              />
            </div>
            <h2 className="text-slate-800">
              <span className="block text-fluid-sm font-bold uppercase tracking-tight sm:text-fluid-base">
                {OFFER_STAY_LABEL}
              </span>
              <span className="mt-2 block text-fluid-2xl font-bold uppercase tracking-tight sm:mt-3 md:text-fluid-3xl">
                {OFFER_HEADLINE_BEACHFRONT} · {OFFER_HEADLINE_DESTINATION}
              </span>
              <span className="mt-1 block text-fluid-2xl font-bold uppercase tracking-tight md:text-fluid-3xl">
                {OFFER_HEADLINE_VACATION}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-gray-900 text-fluid-base leading-relaxed sm:mt-8 sm:text-fluid-lg">
              <span className="font-bold text-slate-950">{RESORT_DISPLAY_NAME}</span>
              {': '}
              <span className="font-extrabold text-amber">
                {OFFER_TOTAL_AMOUNT}
                <PriceFootnoteMark /> per couple
              </span>{' '}
              all-inclusive stay (save 96% vs. retail).{' '}
              <span className="font-semibold text-slate-950">
                12 months to travel. Total price, not per person or per night.
              </span>
            </p>
          </div>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-center">
          <PriceBadge width={260} className="max-w-full" />
        </div>
      </div>

      <div className="bg-plum py-10 sm:py-12 md:py-16 px-4 sm:px-6 -mt-[10px]">
        <div className="max-w-content mx-auto text-center">
          <h3 className="text-xl font-extrabold uppercase text-purple sm:text-2xl mb-6 sm:mb-8 md:mb-10">
            Your Caribbean sanctuary
          </h3>
          <p className="text-base leading-relaxed text-white sm:text-lg md:text-xl">
            All-inclusive on two miles of Caribbean beachfront between Playa del Carmen and Tulum.
            Junior Suite Deluxe, pools, lazy river, dining, spa, and jungle-meets-coast setting at{' '}
            {RESORT_DISPLAY_NAME}.
          </p>
          <img
            src="home/divider.png"
            alt=""
            className="mx-auto mt-8 sm:mt-10 md:mt-12 w-[470px] max-w-full h-auto"
          />
        </div>
      </div>
    </BackgroundSection>
  );
}
