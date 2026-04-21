import {
  OFFER_RETAIL_PRICE,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_LABEL,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';
import { StruckRetailPrice } from './StruckRetailPrice';

interface PriceBadgeProps {
  days?: string;
  oldPrice?: string;
  ribbonText?: string;
  totalAmount?: string;
  totalLabel?: string;
  width?: number;
  className?: string;
}

const BASE_SIZE = 350;

/** Navy Deep fill for the circular badge (PHH brand). Gold ring + cream outline frame it. */
const PRICE_BADGE_FILL = '#0B1929';
const PRICE_BADGE_RING = '#D4A43C';
const PRICE_BADGE_OUTLINE = '#FAF8F4';


export function PriceBadge({
  days = OFFER_STAY_LABEL,
  oldPrice = OFFER_RETAIL_PRICE,
  ribbonText = 'ONLY',
  totalAmount = OFFER_TOTAL_AMOUNT,
  totalLabel = OFFER_TOTAL_LABEL,
  width = 220,
  className = '',
}: PriceBadgeProps) {
  const scale = width / BASE_SIZE;

  return (
    <div
      className={`flex-shrink-0 overflow-visible ${className}`}
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      <div
        className="relative overflow-visible"
        style={{
          width: `${BASE_SIZE}px`,
          height: `${BASE_SIZE}px`,
          transform: `scale(${scale}) translateY(23px)`,
          transformOrigin: 'top left',
        }}
      >
        <div
          className="absolute left-[-15px] top-1/2 z-10 -translate-y-1/2 whitespace-nowrap shadow-[0_10px_30px_-6px_rgba(0,0,0,0.3)]"
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '8px 16px',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          {ribbonText}
        </div>

        <div
          className="box-border flex h-full w-full flex-col items-center justify-center rounded-full text-white shadow-[0_10px_30px_-6px_rgba(0,0,0,0.3)]"
          style={{
            backgroundColor: PRICE_BADGE_FILL,
            border: `12px solid ${PRICE_BADGE_RING}`,
            outline: `8px solid ${PRICE_BADGE_OUTLINE}`,
            outlineOffset: '-20px',
            padding: '12px 14px',
            marginTop: '-23px',
            marginBottom: '-23px',
          }}
        >
          <div
            className="rounded-md bg-white text-center font-bold text-black"
            style={{
              padding: '3px 12px',
              fontSize: '14px',
              marginBottom: '6px',
              lineHeight: 1.2,
              maxWidth: '240px',
            }}
          >
            {days.toUpperCase()}
          </div>

          <div
            className="text-white"
            style={{
              fontSize: '18px',
              marginBottom: '4px',
            }}
          >
            <StruckRetailPrice amount={oldPrice} className="text-white" />
          </div>

          <div
            className="flex flex-col items-center text-center leading-tight text-white"
            style={{ marginTop: '2px' }}
          >
            <div
              className="font-black text-white"
              style={{
                fontSize: '64px',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
              }}
            >
              {totalAmount}
              <PriceFootnoteMark />
            </div>
            <div
              className="font-semibold uppercase tracking-[0.14em] text-white"
              style={{
                fontSize: '12px',
                marginTop: '4px',
                opacity: 0.95,
              }}
            >
              {totalLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
