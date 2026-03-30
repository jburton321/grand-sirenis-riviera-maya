import { Zap, Bed, Wine, Eye, Car } from 'lucide-react';
import {
  OFFER_DEPOSIT_LINE,
  OFFER_SECURE_LINE,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_LABEL,
} from '../constants';
import { Button } from './Button';
import { useCountdown } from '../hooks/useCountdown';

interface BookingCardProps {
  normalRate?: string;
  roomDescription?: string;
  totalAmount?: string;
  totalLabel?: string;
  depositLine?: string;
  secureLine?: string;
}

export function BookingCard({
  normalRate = '$5,600',
  roomDescription = 'Deluxe Room for two adults at the 5-Star Hyatt Zilara Riviera Maya',
  totalAmount = OFFER_TOTAL_AMOUNT,
  totalLabel = OFFER_TOTAL_LABEL,
  depositLine = OFFER_DEPOSIT_LINE,
  secureLine = OFFER_SECURE_LINE,
}: BookingCardProps) {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <aside className="bg-white shadow-xl w-full max-w-none lg:max-w-md lg:rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-shadow duration-500">
      <div className="bg-[#FFD174] px-2 md:px-3 py-2.5 flex items-center justify-center gap-2">
        <Zap className="w-4 h-5 text-red-600 animate-pulse" />
        <span className="text-slate-900 font-bold text-fluid-sm uppercase">
          {isExpired ? 'Offer expired' : 'Offer expires:'}
        </span>
        {!isExpired && (
          <div className="flex items-center gap-0.5 font-bold text-red-600 text-fluid-lg tabular-nums">
            <span className="min-w-[28px] text-center">{hours}</span>
            <span className="animate-pulse">:</span>
            <span className="min-w-[28px] text-center">{minutes}</span>
            <span className="animate-pulse">:</span>
            <span className="min-w-[28px] text-center">{seconds}</span>
          </div>
        )}
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
        <img
          className="h-10 md:h-14 w-auto mx-auto transition-transform duration-300 hover:scale-105"
          src="home/image-30.png"
          alt="Hyatt Zilara"
        />

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex-1 h-0.5 bg-slate-800"></div>
          <span className="text-slate-800 font-bold text-fluid-base whitespace-nowrap">5-Days / 4-Nights</span>
          <div className="flex-1 h-0.5 bg-slate-800"></div>
        </div>

        <h3 className="text-slate-800 font-bold text-fluid-xl text-center leading-tight">
          Luxury All-Inclusive<br />Riviera Cancun Vacation
        </h3>
      </div>

      <div className="bg-gray-100 py-3 md:py-4 px-3 md:px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-[var(--rgb-117-53-173-replacement)] text-white font-bold text-fluid-lg md:text-fluid-2xl py-3 md:py-4 px-2 md:px-4 rounded-xl text-center leading-tight shadow-lg animate-bounce-subtle">
            <div>84%</div>
            <div>OFF!</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-600 text-fluid-xs">
              Normal Rate: <span className="line-through font-bold text-red-600">{normalRate}</span>
            </p>
            <div className="mt-1 text-slate-800">
              <p className="font-black text-fluid-2xl leading-none tracking-tight md:text-fluid-3xl">
                {totalAmount}
              </p>
              <p className="mt-0.5 font-bold uppercase tracking-[0.12em] text-fluid-xs text-slate-600 md:text-fluid-sm">
                {totalLabel}
              </p>
              <p className="mt-2 font-bold text-fluid-base leading-snug md:text-fluid-lg">
                {depositLine}
              </p>
              <p className="mt-1.5 font-semibold text-fluid-sm text-slate-700 md:text-fluid-base">
                {secureLine}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Bed className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-black font-bold text-fluid-sm">{roomDescription}</p>
        </div>

        <div className="flex items-start gap-2">
          <Wine className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-black text-fluid-sm">
            <span className="font-bold">Unlimited-Luxury, Where Everything's Included:
</span>{' '}
           Unlimited Dining, Drinks, Wifi, Entertainment, Resort & Beach Amenities!
          </p>
        </div>

        <div className="flex items-start gap-2">
          <Car className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-black text-fluid-sm">
            <span className="font-bold">Private Airport Transfers:</span>{' '}
            Complimentary round-trip ride
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-4">
        <Button className="w-full min-h-touch touch-manipulation" asCta>Reserve Now</Button>
      </div>

      <div className="flex items-center justify-center py-4 md:py-5 px-4">
        <img src="images/trust.png" alt="Secure Transaction Badge" className="h-auto max-w-[200px] object-contain transition-transform duration-300 hover:scale-110" />
      </div>

      <div className="bg-brand-900 px-3 md:px-4 py-2 flex items-center justify-between gap-2">
        <p className="text-white text-fluid-xs text-center flex-1">
          This offer is getting a lot of attention.<br />
          Viewed 181 times in the past hour!
        </p>
        <Eye className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0 animate-pulse" />
      </div>
    </aside>
  );
}
