import { BackgroundSection } from './BackgroundSection';
import { PriceBadge } from './PriceBadge';
import {
  OFFER_HEADLINE_DESTINATION,
  OFFER_HEADLINE_VACATION,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  RESORT_DISPLAY_NAME,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';
import { StruckRetailPrice } from './StruckRetailPrice';

export function ParadiseSection() {
  return (
    <BackgroundSection
      backgroundImage="images/section-wrapper0.png"
      className="pt-10 sm:pt-12 md:pt-16"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="ios-frosted-glass mx-auto w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="w-full px-5 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10">
              <img
                src="images/ULC-Grand-Sirenis-logo.png"
                alt={RESORT_DISPLAY_NAME}
                className="mx-auto block h-auto w-full max-w-48 object-contain object-center sm:max-w-52 md:max-w-56"
                width={1112}
                height={171}
                loading="lazy"
              />
            </div>
            <div className="px-5 pb-7 pt-5 sm:px-8 sm:pb-9 sm:pt-6 md:px-10 md:pb-10 md:pt-7">
              <h2 className="text-slate-800">
                <span className="block text-fluid-sm font-bold tracking-tight sm:text-fluid-base">
                  {OFFER_STAY_LABEL}
                </span>
              <span className="mt-2 block text-fluid-2xl font-bold tracking-tight sm:mt-3 md:text-fluid-3xl">
                {OFFER_HEADLINE_DESTINATION} · {OFFER_HEADLINE_VACATION}
              </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-gray-900 text-fluid-base leading-relaxed sm:mt-8 sm:text-fluid-lg">
                <span className="font-bold text-slate-950">{RESORT_DISPLAY_NAME}</span>
                {': '}
                <span className="font-extrabold text-black">
                  {OFFER_TOTAL_AMOUNT}
                  <PriceFootnoteMark /> per couple
                </span>{' '}
                all-inclusive stay (save 96% vs.{' '}
                <StruckRetailPrice className="font-extrabold text-slate-950" /> retail).{' '}
                <span className="font-semibold text-slate-950">
                  12 months to travel. Total price, not per person or per night.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-center">
          <PriceBadge width={260} className="max-w-full" />
        </div>
      </div>

      <div className="bg-plum py-10 sm:py-12 md:py-16 px-4 sm:px-6 -mt-[10px]">
        <div className="max-w-content mx-auto text-center">
          <h3 className="mb-6 text-xl font-extrabold text-purple sm:mb-8 sm:text-2xl md:mb-10">
            Your Caribbean sanctuary
          </h3>
          <p className="text-base leading-relaxed text-white sm:text-lg md:text-xl">
            All-inclusive with two miles of Caribbean beach between Playa del Carmen and Tulum.
            Junior Suite Deluxe, pools, lazy river, dining, spa, and jungle-meets-coast setting at{' '}
            {RESORT_DISPLAY_NAME}.
          </p>
          <img
            src="images/divider.png"
            alt=""
            className="mx-auto mt-8 sm:mt-10 md:mt-12 w-[470px] max-w-full h-auto"
          />
        </div>
      </div>
    </BackgroundSection>
  );
}
