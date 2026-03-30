import {
  OFFER_DEPOSIT_LINE,
  OFFER_SECURE_LINE,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_LABEL,
} from '../constants';
import { Button } from './Button';

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:p-4 z-40 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-fluid-xs text-gray-600 truncate">5-Day Luxury Vacation</p>
          <p className="font-black leading-none text-slate-800 text-fluid-base md:text-fluid-lg">
            {OFFER_TOTAL_AMOUNT}
          </p>
          <p className="mt-0.5 font-bold uppercase tracking-[0.1em] text-slate-600 text-[10px] md:text-fluid-xs">
            {OFFER_TOTAL_LABEL}
          </p>
          <p className="mt-0.5 font-bold leading-snug text-slate-800 text-fluid-xs md:text-fluid-sm">
            {OFFER_DEPOSIT_LINE}
          </p>
          <p className="mt-0.5 font-semibold leading-snug text-gray-700 text-[11px] md:text-fluid-xs">
            {OFFER_SECURE_LINE}
          </p>
        </div>
        <Button className="shrink-0 min-h-touch px-6 md:px-8" asCta>
          Reserve
        </Button>
      </div>
    </div>
  );
}
