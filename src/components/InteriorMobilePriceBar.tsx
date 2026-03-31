import { useCountdown } from '../hooks/useCountdown';
import { PriceBadge } from './PriceBadge';
import { OFFER_DECK_ONE_LINER, OFFER_ROOM_SHORT, RESORT_DISPLAY_NAME } from '../constants';

export function InteriorMobilePriceBar() {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <div className="block w-full overflow-hidden lg:hidden">
      <div className="bg-orange px-6 py-6">
        <div className="text-center text-white">
          <div className="mb-3 text-[22px] font-bold tracking-wide text-white">
            OFFER EXPIRES:
          </div>
          {!isExpired ? (
            <div className="flex items-start justify-center gap-1">
              <div className="text-center">
                <span className="text-[32px] font-bold leading-none tabular-nums text-white">
                  {hours}
                </span>
                <div className="mt-1 text-[11px] font-medium tracking-wider text-white/90">
                  HR
                </div>
              </div>
              <span className="mx-1 text-[28px] font-medium leading-none text-white/90">:</span>
              <div className="text-center">
                <span className="text-[32px] font-bold leading-none tabular-nums text-white">
                  {minutes}
                </span>
                <div className="mt-1 text-[11px] font-medium tracking-wider text-white/90">
                  MIN
                </div>
              </div>
              <span className="mx-1 text-[28px] font-medium leading-none text-white/90">:</span>
              <div className="text-center">
                <span className="text-[32px] font-bold leading-none tabular-nums text-white">
                  {seconds}
                </span>
                <div className="mt-1 text-[11px] font-medium tracking-wider text-white/90">
                  SEC
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xl font-bold text-white">EXPIRED</div>
          )}
        </div>
      </div>

      <div className="bg-page px-6 py-10">
        <div className="flex justify-center">
          <PriceBadge width={220} />
        </div>
      </div>

      <div className="border-t border-cardline bg-white px-6 py-7">
        <h2 className="mb-5 text-[22px] font-bold leading-snug text-plum sm:text-[24px]">
          {OFFER_DECK_ONE_LINER}
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <BedIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-sky" />
            <span className="text-[15px] leading-relaxed text-plum">
              <span className="font-bold">
                {OFFER_ROOM_SHORT} at {RESORT_DISPLAY_NAME}
              </span>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CocktailIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-sky" />
            <span className="text-[15px] leading-relaxed text-plum">
              <span className="font-bold">All-inclusive: </span>
              Dining, drinks, pools, beach, and most on-resort activities included.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" />
    </svg>
  );
}

function CocktailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 7l-2-2h13l-2 2m2 5.27L12 7.5l-5.5 4.77V18h11v-5.73M8 19c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M21 3H3v2l8 7.5V18H5v2h14v-2h-6v-5.5L21 5V3z" />
    </svg>
  );
}
