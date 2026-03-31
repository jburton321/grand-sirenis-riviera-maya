import {
  OFFER_DEPOSIT_LINE,
  OFFER_SECURE_LINE,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_LABEL,
} from '../constants';

interface PriceBadgeProps {
  days?: string;
  oldPrice?: string;
  ribbonText?: string;
  totalAmount?: string;
  totalLabel?: string;
  depositLine?: string;
  secureLine?: string;
  width?: number;
  className?: string;
}

const BASE_SIZE = 350;

export function PriceBadge({
  days = '5-Days / 4-Nights',
  oldPrice = '$5,600',
  ribbonText = 'ONLY',
  totalAmount = OFFER_TOTAL_AMOUNT,
  totalLabel = OFFER_TOTAL_LABEL,
  depositLine = OFFER_DEPOSIT_LINE,
  secureLine = OFFER_SECURE_LINE,
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
          transform: `scale(${scale})`,
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
            backgroundColor: '#003782',
            border: '12px solid #44AD98',
            outline: '8px solid white',
            outlineOffset: '-20px',
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
            className="line-through"
            style={{
              fontSize: '18px',
              marginBottom: '4px',
            }}
          >
            {oldPrice}
          </div>

          <div
            className="flex flex-col items-center text-center leading-tight"
            style={{ marginTop: '2px' }}
          >
            <div
              className="font-black"
              style={{
                fontSize: '52px',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
              }}
            >
              {totalAmount}
            </div>
            <div
              className="font-semibold uppercase tracking-[0.14em]"
              style={{
                fontSize: '11px',
                marginTop: '2px',
                opacity: 0.92,
              }}
            >
              {totalLabel}
            </div>
            <div
              className="font-semibold"
              style={{
                fontSize: '13px',
                marginTop: '10px',
                maxWidth: '220px',
                lineHeight: 1.25,
              }}
            >
              {depositLine}
            </div>
            <div
              className="font-semibold"
              style={{
                fontSize: '12px',
                marginTop: '6px',
                maxWidth: '220px',
                lineHeight: 1.25,
              }}
            >
              {secureLine}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
