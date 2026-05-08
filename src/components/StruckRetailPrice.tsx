import { PriceFootnoteMark } from './PriceFootnoteMark';

/** Struck-through amount helper with optional footnote marker. */
export function StruckRetailPrice({
  className = '',
  amount = '',
}: {
  className?: string;
  amount?: string;
}) {
  if (!amount) return null;

  return (
    <span
      className={`line-through decoration-solid [text-decoration-thickness:max(2px,0.08em)] ${className}`}
    >
      {amount}
      <PriceFootnoteMark />
    </span>
  );
}
