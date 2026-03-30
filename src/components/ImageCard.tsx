import { ReactNode } from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  label?: string;
  overlay?: boolean;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

export function ImageCard({
  src,
  alt,
  label,
  overlay = false,
  className = '',
  imageClassName = '',
  children,
}: ImageCardProps) {
  return (
    <div className={`relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`object-cover transition-transform duration-500 group-hover:scale-110 max-w-full h-auto ${imageClassName}`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />}
      {label && (
        <span className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-fluid-xs md:text-fluid-sm whitespace-nowrap drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
