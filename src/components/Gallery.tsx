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
}

export function Gallery({ images, className = '' }: GalleryProps) {
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
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth - 16 : cardWidth + 16;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className={`bg-gray-100 relative ${className}`}>
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="overflow-x-auto py-4 md:py-6 scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-3 md:gap-4 lg:gap-5 px-4 md:px-6 lg:px-8">
            {normalizedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="rounded-xl md:rounded-2xl overflow-hidden shrink-0 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-touch"
              >
                <img
                  src={image.src}
                  alt={image.label || `Resort photo ${index + 1}`}
                  className="w-[280px] h-[200px] md:w-[340px] md:h-[240px] lg:w-[400px] lg:h-[280px] xl:w-[420px] xl:h-[300px] object-cover transition-all duration-500 group-hover:scale-110"
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
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-3 lg:left-4 top-1/2 -translate-y-1/2 min-w-touch min-h-touch w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 touch-manipulation z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 min-w-touch min-h-touch w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 touch-manipulation z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
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
