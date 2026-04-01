import { OFFER_RETAIL_PRICE } from '../constants';
import { PriceFootnoteMark } from './PriceFootnoteMark';

/** Retail comparison amount, always shown struck through (single source for $3,464* display). */
export function StruckRetailPrice({
  className = '',
  amount = OFFER_RETAIL_PRICE,
}: {
  className?: string;
  amount?: string;
}) {
  return (
    <span
      className={`line-through decoration-solid [text-decoration-thickness:max(2px,0.08em)] ${className}`}
    >
      {amount}
      <PriceFootnoteMark />
    </span>
  );
}
