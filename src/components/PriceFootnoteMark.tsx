/** Small, non-bold asterisk for price footnotes (see footer disclaimer). */
export function PriceFootnoteMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block align-super font-normal leading-none ml-px ${className}`}
      style={{
        fontSize: 'clamp(9px, 28%, 14px)',
        fontWeight: 400,
      }}
      aria-hidden
    >
      *
    </span>
  );
}
