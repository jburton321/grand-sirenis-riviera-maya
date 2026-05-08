import {
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_LABEL,
} from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';

interface PriceBadgeProps {
  days?: string;
  ribbonText?: string;
  totalAmount?: string;
  totalLabel?: string;
  width?: number;
  className?: string;
}

const BASE_SIZE = 350;

/** Navy fill (PHH brand). Silver gradient outer ring + reversed silver gradient inner band. */
const PRICE_BADGE_FILL = '#002C63';
/**
 * Brushed-silver/chrome gradient applied to the outer ring. Diagonal sweep
 * with highlights at ~30% and ~75% to mimic light catching a polished edge.
 */
const PRICE_BADGE_RING_GRADIENT =
  'linear-gradient(135deg, #A7B0BC 0%, #FFFFFF 30%, #C8CFD8 55%, #FFFFFF 75%, #94A0AD 100%)';
/** Same silver gradient mirrored 180° (315deg) for the inner band — direction reversed. */
const PRICE_BADGE_BAND_GRADIENT =
  'linear-gradient(315deg, #A7B0BC 0%, #FFFFFF 30%, #C8CFD8 55%, #FFFFFF 75%, #94A0AD 100%)';


export function PriceBadge({
  days = OFFER_STAY_LABEL,
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
          className="box-border h-full w-full rounded-full shadow-[0_10px_30px_-6px_rgba(0,0,0,0.3)]"
          style={{
            // Outer ring layer: silver gradient sits in the border zone via
            // the standard double-background trick (transparent border +
            // navy fill clipped to padding-box, gradient to border-box).
            background: `linear-gradient(${PRICE_BADGE_FILL}, ${PRICE_BADGE_FILL}) padding-box, ${PRICE_BADGE_RING_GRADIENT} border-box`,
            border: '12px solid transparent',
            marginTop: '-23px',
            marginBottom: '-23px',
          }}
        >
          <div
            className="box-border flex h-full w-full flex-col items-center justify-center rounded-full text-white"
            style={{
              // Inner band layer: same gradient 180° mirrored. The reversed
              // sweep makes the two metallic rings catch light from opposite
              // sides, giving a polished medallion feel.
              background: `linear-gradient(${PRICE_BADGE_FILL}, ${PRICE_BADGE_FILL}) padding-box, ${PRICE_BADGE_BAND_GRADIENT} border-box`,
              border: '8px solid transparent',
              padding: '12px 14px',
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
    </div>
  );
}
