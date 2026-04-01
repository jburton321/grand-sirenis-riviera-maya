import { Zap, Bed, Wine, Eye } from 'lucide-react';
import {
  OFFER_HEADLINE_DESTINATION,
  OFFER_HEADLINE_VACATION,
  OFFER_RETAIL_PRICE,
  OFFER_ROOM_SHORT,
  OFFER_SAVE_PERCENT,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_LABEL,
  RESORT_DISPLAY_NAME,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';
import { StruckRetailPrice } from './StruckRetailPrice';
import { Button } from './Button';
import { useCountdown } from '../hooks/useCountdown';

interface BookingCardProps {
  normalRate?: string;
  roomDescription?: string;
  totalAmount?: string;
  totalLabel?: string;
}

export function BookingCard({
  normalRate = OFFER_RETAIL_PRICE,
  roomDescription = `${OFFER_ROOM_SHORT} at ${RESORT_DISPLAY_NAME}`,
  totalAmount = OFFER_TOTAL_AMOUNT,
  totalLabel = OFFER_TOTAL_LABEL,
}: BookingCardProps) {
  const { hours, minutes, seconds, isExpired } = useCountdown(45);

  return (
    <aside className="bg-white shadow-xl w-full max-w-none lg:max-w-md lg:rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-shadow duration-500">
      <div className="flex items-center justify-center gap-2 bg-orange px-2 py-2.5 md:px-3">
        <Zap className="h-4 w-5 animate-pulse text-white" />
        <span className="text-fluid-sm font-bold uppercase text-white">
          {isExpired ? 'Offer expired' : 'Offer expires:'}
        </span>
        {!isExpired && (
          <div className="flex items-center gap-0.5 text-fluid-lg font-bold tabular-nums text-white">
            <span className="min-w-[28px] text-center">{hours}</span>
            <span className="animate-pulse">:</span>
            <span className="min-w-[28px] text-center">{minutes}</span>
            <span className="animate-pulse">:</span>
            <span className="min-w-[28px] text-center">{seconds}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 pt-3 md:gap-4 md:p-6 md:pt-4">
        <img
          className="block h-auto w-full object-contain object-center transition-transform duration-300 hover:scale-[1.02]"
          src="images/ULC-Grand-Sirenis-logo.png"
          alt={RESORT_DISPLAY_NAME}
          width={1112}
          height={171}
        />

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex-1 h-0.5 bg-slate-800"></div>
          <span className="text-slate-800 font-bold text-fluid-base whitespace-nowrap">{OFFER_STAY_LABEL}</span>
          <div className="flex-1 h-0.5 bg-slate-800"></div>
        </div>

        <h3 className="text-center text-fluid-xl font-bold leading-tight text-slate-800">
          Grand Sirenis Riviera Maya<br />
          <span className="text-fluid-lg font-bold text-slate-700">
            {OFFER_HEADLINE_DESTINATION} ·{' '}
            <span className="font-extrabold text-primary">{OFFER_HEADLINE_VACATION}</span>
          </span>
        </h3>
      </div>

      <div className="bg-gray-100 py-3 md:py-4 px-3 md:px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="rounded-xl bg-amber px-2 py-3 text-center text-fluid-lg font-bold leading-tight text-plum shadow-lg animate-bounce-subtle md:px-4 md:py-4 md:text-fluid-2xl">
            <div>{OFFER_SAVE_PERCENT}%</div>
            <div>OFF!</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-600 text-fluid-xs">
              Retail rate:{' '}
              <StruckRetailPrice amount={normalRate} className="font-bold text-muted" />
            </p>
            <div className="mt-1">
              <p className="text-fluid-2xl font-black leading-none tracking-tight text-black md:text-fluid-3xl">
                {totalAmount}
                <PriceFootnoteMark />
              </p>
              <p className="mt-0.5 font-bold uppercase tracking-[0.12em] text-fluid-xs text-slate-600 md:text-fluid-sm">
                {totalLabel}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Bed className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
          <p className="text-black font-bold text-fluid-sm">{roomDescription}</p>
        </div>

        <div className="flex items-start gap-2">
          <Wine className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
          <p className="text-black text-fluid-sm">
            <span className="font-bold text-primary">All-inclusive: </span>
            Dining, drinks, pools, beach, and most on-resort activities included.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-4">
        <Button className="w-full min-h-touch touch-manipulation" asCta>Reserve Now</Button>
      </div>

      <div className="flex items-center justify-center py-4 md:py-5 px-4">
        <img src="images/trust.png" alt="Secure Transaction Badge" className="h-auto max-w-[200px] object-contain transition-transform duration-300 hover:scale-110" />
      </div>

      <div className="flex items-center justify-between gap-2 bg-plum px-3 py-2 md:px-4">
        <p className="text-white text-fluid-xs text-center flex-1">
          This offer is getting a lot of attention.<br />
          Viewed 181 times in the past hour!
        </p>
        <Eye className="h-5 w-5 shrink-0 animate-pulse text-sky md:h-6 md:w-6" />
      </div>
    </aside>
  );
}
