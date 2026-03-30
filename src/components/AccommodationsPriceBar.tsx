import { useCountdown } from '../hooks/useCountdown';
import { PriceBadge } from './PriceBadge';

export function AccommodationsPriceBar() {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <div className="hidden lg:block w-full bg-[#e8e8e8]/90 rounded-b-3xl overflow-hidden">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 xl:gap-6 px-4 xl:px-6 py-4">
        <div className="flex-shrink-0">
          <PriceBadge width={220} className="xl:w-[280px]" />
        </div>

        <div className="flex flex-col justify-center flex-1 min-w-0">
          <h2 className="text-[#1a365d] text-fluid-lg xl:text-fluid-xl font-bold leading-tight mb-2 xl:mb-3">
            Luxury All-Inclusive<br />
            Riviera Cancun Vacation
          </h2>
          <div className="space-y-1.5 xl:space-y-2">
            <div className="flex items-start gap-2">
              <BedIcon className="w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0 mt-0.5 text-accent" />
              <span className="text-fluid-xs xl:text-fluid-sm text-[#1a365d]">
                <span className="font-bold">Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya</span>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CocktailIcon className="w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0 mt-0.5 text-accent" />
              <span className="text-fluid-xs xl:text-fluid-sm text-[#1a365d]">
                <span className="font-bold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
                Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-shrink-0">
          <div className="bg-[#FFD174] rounded-lg px-4 xl:px-6 py-3 xl:py-4 text-center min-w-[170px] xl:min-w-[200px]">
            <div className="text-slate-900 font-bold text-fluid-sm xl:text-fluid-base tracking-wide mb-1.5 xl:mb-2">
              OFFER EXPIRES:
            </div>
            {!isExpired ? (
              <div className="flex items-center justify-center gap-1">
                <div className="text-center">
                  <span className="text-red-600 font-bold text-fluid-xl xl:text-fluid-2xl tabular-nums">{hours}</span>
                  <div className="text-slate-900 text-fluid-xs font-medium">HR</div>
                </div>
                <span className="text-red-600 font-bold text-fluid-lg xl:text-fluid-xl mb-3 xl:mb-4 animate-pulse">:</span>
                <div className="text-center">
                  <span className="text-red-600 font-bold text-fluid-xl xl:text-fluid-2xl tabular-nums">{minutes}</span>
                  <div className="text-slate-900 text-fluid-xs font-medium">MIN</div>
                </div>
                <span className="text-red-600 font-bold text-fluid-lg xl:text-fluid-xl mb-3 xl:mb-4 animate-pulse">:</span>
                <div className="text-center">
                  <span className="text-red-600 font-bold text-fluid-xl xl:text-fluid-2xl tabular-nums">{seconds}</span>
                  <div className="text-slate-900 text-fluid-xs font-medium">SEC</div>
                </div>
              </div>
            ) : (
              <div className="text-red-600 font-bold text-fluid-lg">EXPIRED</div>
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
