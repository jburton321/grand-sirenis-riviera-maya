import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type LightboxImageItem = {
  src: string;
  label?: string;
  /** When set, shows a detail layout with title + body (e.g. amenity info). */
  description?: string;
};

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images?: LightboxImageItem[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
  videoUrl?: string;
  title?: string;
}

export function Lightbox({
  isOpen,
  onClose,
  images,
  currentIndex = 0,
  onNavigate,
  videoUrl,
  title,
}: LightboxProps) {
  const isGallery = images && images.length > 0;
  const currentImage = isGallery ? images[currentIndex] : null;
  const detailLayout = Boolean(currentImage?.description);
  const canGoBack = isGallery && currentIndex > 0;
  const canGoForward = isGallery && currentIndex < images.length - 1;

  const goToNext = useCallback(() => {
    if (canGoForward && onNavigate) {
      onNavigate(currentIndex + 1);
    }
  }, [canGoForward, onNavigate, currentIndex]);

  const goToPrev = useCallback(() => {
    if (canGoBack && onNavigate) {
      onNavigate(currentIndex - 1);
    }
  }, [canGoBack, onNavigate, currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    },
    [onClose, goToNext, goToPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title || currentImage?.label || 'Gallery lightbox'}
    >
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full z-20 min-w-touch min-h-touch flex items-center justify-center touch-manipulation"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      {isGallery ? (
        <>
          <div
            className={`relative z-10 w-full max-w-5xl animate-scale-in ${
              detailLayout
                ? 'max-h-[90vh] flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6'
                : 'max-h-[85vh]'
            }`}
          >
            {detailLayout ? (
              <>
                <div className="flex min-h-0 shrink-0 justify-center md:w-[52%] md:max-w-none">
                  <img
                    src={currentImage?.src}
                    alt={currentImage?.label || `Image ${currentIndex + 1}`}
                    className="max-h-[42vh] w-full max-w-full rounded-lg object-contain shadow-2xl md:max-h-[min(78vh,720px)]"
                  />
                </div>
                <div className="flex min-h-0 max-h-[38vh] flex-col overflow-y-auto rounded-xl bg-black/40 px-4 py-4 text-left backdrop-blur-md md:max-h-none md:w-[48%] md:px-6 md:py-6">
                  {currentImage?.label ? (
                    <h3 className="mb-3 text-fluid-lg font-black uppercase tracking-tight text-white sm:text-fluid-xl md:mb-4">
                      {currentImage.label}
                    </h3>
                  ) : null}
                  <p className="text-fluid-sm leading-relaxed text-white/90 sm:text-fluid-base">
                    {currentImage?.description}
                  </p>
                </div>
              </>
            ) : (
              <div className="relative">
                <div className="relative flex items-center justify-center">
                  <img
                    src={currentImage?.src}
                    alt={currentImage?.label || `Image ${currentIndex + 1}`}
                    className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
                  />
                </div>

                {currentImage?.label ? (
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                    <p className="text-center text-fluid-base font-semibold text-white md:text-fluid-lg lg:text-fluid-xl">
                      {currentImage.label}
                    </p>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {canGoBack && (
            <button
              onClick={goToPrev}
              className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 min-w-touch min-h-touch w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 touch-manipulation"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
          )}

          {canGoForward && (
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 min-w-touch min-h-touch w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 touch-manipulation"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate?.(idx)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  idx === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 left-4 text-white/80 text-fluid-sm z-20">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      ) : (
        <div className="relative w-full max-w-4xl aspect-video animate-scale-in">
          <div className="w-full h-full bg-black rounded-lg overflow-hidden shadow-2xl">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title || 'Video'}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-fluid-lg">
                Video content will appear here
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
