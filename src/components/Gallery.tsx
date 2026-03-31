import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface GalleryImage {
  src: string;
  label?: string;
}

interface GalleryProps {
  images: (string | GalleryImage)[];
  className?: string;
  /** Tighter strip under hero: smaller cards, less padding/gap. */
  compact?: boolean;
}

export function Gallery({ images, className = '', compact = false }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const normalizedImages = images.map((img) =>
    typeof img === 'string' ? { src: img } : img
  );

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [compact, images.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector('button')?.offsetWidth ?? (compact ? 200 : 300);
      const gap = compact ? 10 : 16;
      const scrollAmount = direction === 'left' ? -cardWidth - gap : cardWidth + gap;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className={`relative bg-gray-100 ${className}`}>
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className={`scrollbar-hide scroll-touch-x scroll-smooth overflow-x-auto ${compact ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}
        >
          <div
            className={`flex ${compact ? 'gap-2 px-3 md:gap-2.5 md:px-4 lg:px-6' : 'gap-3 px-4 md:gap-4 md:px-6 lg:gap-5 lg:px-8'}`}
          >
            {normalizedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:rounded-xl ${compact ? 'min-h-0' : 'min-h-touch md:rounded-2xl'}`}
              >
                <img
                  src={image.src}
                  alt={image.label || `Resort photo ${index + 1}`}
                  className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                    compact
                      ? 'h-[120px] w-[180px] sm:h-[132px] sm:w-[200px] md:h-[144px] md:w-[220px] lg:h-[156px] lg:w-[240px]'
                      : 'h-[200px] w-[280px] md:h-[240px] md:w-[340px] lg:h-[280px] lg:w-[400px] xl:h-[300px] xl:w-[420px]'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Expand className="w-5 h-5 text-gray-800" />
                  </div>
                </div>

                {image.label && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-4 md:pb-5 px-4 transition-opacity duration-300">
                    <p className="text-white text-fluid-sm md:text-fluid-base lg:text-fluid-lg font-semibold text-center drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                      {image.label}
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 border-4 border-white/30 rounded-xl md:rounded-2xl" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll('left')}
            className={`absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-xl active:scale-95 touch-manipulation ${
              compact
                ? 'left-1 h-9 w-9 min-h-9 min-w-9 md:left-2'
                : 'left-2 min-h-touch min-w-touch h-10 w-10 md:left-3 md:h-11 md:w-11 lg:left-4 lg:h-12 lg:w-12'
            }`}
            aria-label="Previous"
          >
            <ChevronLeft
              className={`text-gray-800 ${compact ? 'h-4 w-4 md:h-5 md:w-5' : 'h-5 w-5 md:h-6 md:w-6'}`}
            />
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll('right')}
            className={`absolute top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-xl active:scale-95 touch-manipulation ${
              compact
                ? 'right-1 h-9 w-9 min-h-9 min-w-9 md:right-2'
                : 'right-2 min-h-touch min-w-touch h-10 w-10 md:right-3 md:h-11 md:w-11 lg:right-4 lg:h-12 lg:w-12'
            }`}
            aria-label="Next"
          >
            <ChevronRight
              className={`text-gray-800 ${compact ? 'h-4 w-4 md:h-5 md:w-5' : 'h-5 w-5 md:h-6 md:w-6'}`}
            />
          </button>
        )}
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={normalizedImages}
        currentIndex={currentImageIndex}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
}
