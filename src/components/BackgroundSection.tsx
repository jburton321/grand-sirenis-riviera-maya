import { ReactNode } from 'react';

interface BackgroundSectionProps {
  backgroundImage: string;
  /** Below `lg`, show this image instead of `backgroundImage` (desktop unchanged at `lg+`). */
  backgroundImageMobile?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  children: ReactNode;
}

export function BackgroundSection({
  backgroundImage,
  backgroundImageMobile,
  overlay = false,
  overlayOpacity = 30,
  className = '',
  children,
}: BackgroundSectionProps) {
  const layeredBackgrounds = Boolean(backgroundImageMobile);

  return (
    <section
      className={`relative bg-cover bg-center ${className}`}
      style={
        layeredBackgrounds
          ? undefined
          : { backgroundImage: `url(${backgroundImage})` }
      }
    >
      {layeredBackgrounds && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center lg:hidden"
            style={{ backgroundImage: `url(${backgroundImageMobile})` }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-center lg:block"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden
          />
        </>
      )}
      {overlay && (
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        />
      )}
      <div className="relative z-10 flex flex-1 flex-col">{children}</div>
    </section>
  );
}
