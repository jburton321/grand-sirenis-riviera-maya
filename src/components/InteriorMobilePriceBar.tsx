import { useCountdown } from '../hooks/useCountdown';
import { PriceBadge } from './PriceBadge';

export function InteriorMobilePriceBar() {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <div className="block lg:hidden w-full overflow-hidden">
      <div className="bg-[#E5C778] px-6 py-6">
        <div className="text-center">
          <div className="text-[#1a1a1a] font-bold text-[22px] tracking-wide mb-3">
            OFFER EXPIRES:
          </div>
          {!isExpired ? (
            <div className="flex items-start justify-center gap-1">
              <div className="text-center">
                <span className="text-[#1a1a1a] font-bold text-[32px] leading-none tabular-nums">
                  {hours}
                </span>
                <div className="text-[#6b6b6b] text-[11px] font-medium tracking-wider mt-1">
                  HR
                </div>
              </div>
              <span className="text-[#6b6b6b] font-medium text-[28px] leading-none mx-1">:</span>
              <div className="text-center">
                <span className="text-[#1a1a1a] font-bold text-[32px] leading-none tabular-nums">
                  {minutes}
                </span>
                <div className="text-[#6b6b6b] text-[11px] font-medium tracking-wider mt-1">
                  MIN
                </div>
              </div>
              <span className="text-[#6b6b6b] font-medium text-[28px] leading-none mx-1">:</span>
              <div className="text-center">
                <span className="text-[#1a1a1a] font-bold text-[32px] leading-none tabular-nums">
                  {seconds}
                </span>
                <div className="text-[#6b6b6b] text-[11px] font-medium tracking-wider mt-1">
                  SEC
                </div>
              </div>
            </div>
          ) : (
            <div className="text-red-600 font-bold text-xl">EXPIRED</div>
          )}
        </div>
      </div>

      <div className="bg-[#e8e8e8] px-6 py-10">
        <div className="flex justify-center">
          <PriceBadge width={220} />
        </div>
      </div>

      <div className="bg-white px-6 py-7">
        <h2 className="text-[#1a365d] text-[26px] font-bold leading-tight mb-5">
          Luxury All-Inclusive Riviera Maya Vacation
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <BedIcon className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
            <span className="text-[15px] text-[#374151] leading-relaxed">
              <span className="font-bold">Deluxe Room for two adults at the 5-Star ULC Grand Sirenis Riviera Maya</span>
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CocktailIcon className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
            <span className="text-[15px] text-[#374151] leading-relaxed">
              <span className="font-bold">Unlimited-Luxury, Where Everything's Included:</span>{' '}
              Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
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
