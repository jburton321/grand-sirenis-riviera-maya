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
      className={`relative bg-plum bg-cover bg-center lg:bg-transparent ${className}`}
      style={
        layeredBackgrounds
          ? undefined
          : { backgroundImage: `url(${backgroundImage})` }
      }
    >
      {layeredBackgrounds && (
        <>
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-no-repeat lg:hidden"
            style={{
              backgroundImage: `url(${backgroundImageMobile})`,
              // Fit the viewport width and let the height follow the image's
              // natural aspect ratio — same approach used elsewhere on the
              // site (Hero, mobile sticker row, etc.). Anything below the
              // image's natural height shows the section's `bg-plum` fallback.
              backgroundSize: '100% auto',
              backgroundPosition: 'top center',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 hidden bg-no-repeat lg:block"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              // Match the footer image (`<img w-full h-auto>`): span the full
              // section width and let the height follow the image's natural
              // aspect ratio — no horizontal cropping. Anything below shows
              // the section's bg-plum fallback.
              backgroundSize: '100% auto',
              backgroundPosition: 'top center',
            }}
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
      <div className="relative z-10 flex flex-1 flex-col lg:h-full">{children}</div>
    </section>
  );
}
