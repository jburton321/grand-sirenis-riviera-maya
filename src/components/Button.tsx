import { ReactNode, MouseEvent } from 'react';
import { DUMMY_CTA_HREF } from '../constants';

export { DUMMY_CTA_HREF } from '../constants';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'small';
  /**
   * `brand` = purple primary surface; `cta` = pink reserve CTA with white label text.
   * Defaults to `cta` when `asCta`, otherwise `brand`.
   */
  color?: 'brand' | 'cta';
  className?: string;
  onClick?: () => void;
  /** Renders as &lt;a&gt;. */
  href?: string;
  /** When true, links to `DUMMY_CTA_HREF` from `../constants`. */
  asCta?: boolean;
}

export function Button({
  children = 'RESERVE NOW',
  variant = 'primary',
  color,
  className = '',
  onClick,
  href,
  asCta = false,
}: ButtonProps) {
  const anchorHref = asCta ? DUMMY_CTA_HREF : href;
  const surface = color ?? (asCta ? 'cta' : 'brand');
  const surfaceStyles =
    surface === 'cta'
      ? `bg-cta text-white visited:text-white visited:bg-cta hover:bg-cta-dark hover:visited:bg-cta-dark`
      : `bg-primary text-white visited:text-white visited:bg-primary hover:bg-primary-dark hover:visited:bg-primary-dark`;

  const baseStyles = `
    relative overflow-hidden
    ${surfaceStyles}
    text-center font-bold uppercase tracking-wide cursor-pointer
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-0.5
    active:scale-[0.98] active:translate-y-0
    touch-manipulation shadow-lg
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
  `;

  const variantStyles = {
    primary: 'rounded-3xl py-3 md:py-3.5 px-8 md:px-16 text-fluid-sm min-h-touch',
    small: 'rounded-3xl py-2 px-4 text-fluid-xs min-h-touch min-w-[100px] md:min-w-[120px]',
  };

  const sharedClassName = `${baseStyles} ${variantStyles[variant]} ${className} inline-flex items-center justify-center no-underline`;

  const isExternal =
    typeof anchorHref === 'string' && /^https?:\/\//i.test(anchorHref);

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (anchorHref === '#' || anchorHref === '') e.preventDefault();
    onClick?.();
  };

  if (anchorHref !== undefined) {
    return (
      <a
        href={anchorHref}
        className={sharedClassName}
        onClick={handleAnchorClick}
        role="button"
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={sharedClassName} onClick={onClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
