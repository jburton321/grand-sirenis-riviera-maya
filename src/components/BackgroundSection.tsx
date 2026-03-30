import { ReactNode } from 'react';

interface BackgroundSectionProps {
  backgroundImage: string;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
  children: ReactNode;
}

export function BackgroundSection({
  backgroundImage,
  overlay = false,
  overlayOpacity = 30,
  className = '',
  children,
}: BackgroundSectionProps) {
  return (
    <section
      className={`relative bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
        />
      )}
      <div className="relative flex-1 flex flex-col">{children}</div>
    </section>
  );
}
