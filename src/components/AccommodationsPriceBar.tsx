import { useCountdown } from '../hooks/useCountdown';
import { PriceBadge } from './PriceBadge';
import { OFFER_DECK_ONE_LINER, OFFER_ROOM_SHORT, RESORT_DISPLAY_NAME } from '../constants';

export function AccommodationsPriceBar() {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <div className="hidden lg:block w-full rounded-b-3xl border border-cardline border-t-0 bg-white/95 overflow-hidden">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 xl:gap-6 px-4 xl:px-6 py-4">
        <div className="flex-shrink-0">
          <PriceBadge width={220} className="xl:w-[280px]" />
        </div>

        <div className="flex flex-col justify-center flex-1 min-w-0">
          <h2 className="mb-2 text-fluid-lg font-bold leading-tight text-plum xl:mb-3 xl:text-fluid-xl">
            {OFFER_DECK_ONE_LINER}
          </h2>
          <div className="space-y-1.5 xl:space-y-2">
            <div className="flex items-start gap-2">
              <BedIcon className="w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0 mt-0.5 text-sky" />
              <span className="text-fluid-xs xl:text-fluid-sm text-plum">
                <span className="font-bold">
                  {OFFER_ROOM_SHORT} at {RESORT_DISPLAY_NAME}
                </span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CocktailIcon className="w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0 mt-0.5 text-sky" />
              <span className="text-fluid-xs xl:text-fluid-sm text-plum">
                <span className="font-bold">All-inclusive: </span>
                Dining, drinks, pools, beach, and most on-resort activities included.
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-shrink-0">
          <div className="min-w-[170px] rounded-lg bg-orange px-4 py-3 text-center text-white xl:min-w-[200px] xl:px-6 xl:py-4">
            <div className="mb-1.5 text-fluid-sm font-bold tracking-wide text-white xl:mb-2 xl:text-fluid-base">
              OFFER EXPIRES:
            </div>
            {!isExpired ? (
              <div className="flex items-center justify-center gap-1">
                <div className="text-center">
                  <span className="text-fluid-xl font-bold tabular-nums text-white xl:text-fluid-2xl">{hours}</span>
                  <div className="text-fluid-xs font-medium text-white/90">HR</div>
                </div>
                <span className="mb-3 animate-pulse text-fluid-lg font-bold text-white xl:mb-4 xl:text-fluid-xl">:</span>
                <div className="text-center">
                  <span className="text-fluid-xl font-bold tabular-nums text-white xl:text-fluid-2xl">{minutes}</span>
                  <div className="text-fluid-xs font-medium text-white/90">MIN</div>
                </div>
                <span className="mb-3 animate-pulse text-fluid-lg font-bold text-white xl:mb-4 xl:text-fluid-xl">:</span>
                <div className="text-center">
                  <span className="text-fluid-xl font-bold tabular-nums text-white xl:text-fluid-2xl">{seconds}</span>
                  <div className="text-fluid-xs font-medium text-white/90">SEC</div>
                </div>
              </div>
            ) : (
              <div className="text-fluid-lg font-bold text-white">EXPIRED</div>
            )}
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
