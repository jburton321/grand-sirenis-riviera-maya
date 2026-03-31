import {
  OFFER_HEADLINE_BEACHFRONT,
  OFFER_HEADLINE_DESTINATION,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';

/** Top-of-page promo strip (LP “hello bar”). */
export function HelloBar() {
  return (
    <div
      className="bg-plum px-4 py-2.5 text-center text-fluid-sm font-semibold uppercase tracking-wide text-white sm:text-fluid-base"
      role="status"
    >
      {OFFER_STAY_LABEL} · {OFFER_HEADLINE_BEACHFRONT} {OFFER_HEADLINE_DESTINATION} · just{' '}
      {OFFER_TOTAL_AMOUNT}
      <PriceFootnoteMark /> Per Couple!
    </div>
  );
}
