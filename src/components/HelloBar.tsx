import { RECURRING_RIBBON_LINE } from '../constants';

/** Top-of-page promo strip (LP “hello bar”). */
export function HelloBar() {
  return (
    <div
      className="bg-plum px-3 py-2 text-center text-fluid-xs font-semibold uppercase leading-snug tracking-normal text-white sm:px-4 sm:py-2.5 sm:text-fluid-sm sm:leading-normal sm:tracking-wide md:text-fluid-base"
      style={{ textWrap: 'balance' }}
      role="status"
    >
      {RECURRING_RIBBON_LINE}
    </div>
  );
}
