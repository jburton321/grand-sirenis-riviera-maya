import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GUEST_REVIEW_GALLERY_IMAGES } from '../content/guestReviewGalleryFilenames';
import { Button } from './Button';
import { Gallery } from './Gallery';

const TRIPADVISOR_LOGO_SRC =
  'images/_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg0.svg';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: '418alanap',
    date: 'TripAdvisor',
    rating: 5,
    text: 'Just returned from a fabulous stay at Grand Sirenis Riviera Maya Resort and Spa. Would highly recommend this property. The rooms were beautiful, spacious, and comfortable. The food was awesome and there was always something for even the pickiest eaters. The drinks were great with ever-obliging bartenders. The location, beach, and atmosphere were all five stars. Will be back again!',
    avatar: 'images/_67-d-0924777-f-9-fd-4-ea-51-ba-542-487-b-67-ace-3-ea-87851-c-0-d-6-f-391302-f-998-ava-1-webp0.png',
  },
  {
    name: 'EllaCook_x',
    date: 'TripAdvisor',
    rating: 5,
    text: 'What a perfect vacation! We had the best time at Grand Sirenis. The staff were nothing short of incredible and the hospitality was off the charts. The food was far greater than we could have imagined and the resort has so much to offer. We absolutely loved our stay and would not hesitate to recommend it to anyone.',
    avatar: 'images/_67-d-0924777-f-9-fd-4-ea-51-ba-4-be-2853433-cd-627-e-5-efd-26-b-1-c-3-fada-1-eaae-ava-5-webp0.png',
  },
  {
    name: 'TripLoverFamily',
    date: 'TripAdvisor',
    rating: 5,
    text: 'Beautiful property in a stunning natural setting. The staff were the friendliest we have encountered across four resorts in the Mayan Riviera and the service was the best of all. The food was excellent — best buffet and the a-la-carte restaurants were amazing. We felt completely at home from the moment we arrived.',
    avatar: 'images/_67-d-0924777-f-9-fd-4-ea-51-ba-4-de-2853575-a-86629-f-1-c-31-f-4-c-2-c-210419754-ava-4-webp0.png',
  },
];

const galleryImages = [...GUEST_REVIEW_GALLERY_IMAGES];

const REVIEW_SWIPE_THRESHOLD_PX = 56;

function ReviewsLightbox({
  reviews: reviewList,
  isOpen,
  initialIndex,
  onClose,
}: {
  reviews: Review[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const swipeStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(reviewList.length - 1, i + 1));
  }, [reviewList.length]);

  const canBack = index > 0;
  const canForward = index < reviewList.length - 1;

  const onReviewPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if ((e.target as HTMLElement).closest('button, a, [role="button"]')) return;
    swipeStartX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onReviewPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (swipeStartX.current === null) return;
      const startX = swipeStartX.current;
      swipeStartX.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* */
      }
      const dx = e.clientX - startX;
      if (Math.abs(dx) < REVIEW_SWIPE_THRESHOLD_PX) return;
      if (dx < 0 && canForward) goNext();
      else if (dx > 0 && canBack) goPrev();
    },
    [canBack, canForward, goNext, goPrev]
  );

  const onReviewPointerCancel = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    swipeStartX.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* */
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, goPrev, goNext]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const review = reviewList[index];

  const detailTopPad = 'max(7rem, calc(env(safe-area-inset-top, 0px) + 6rem))';

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain px-4 pb-8 pt-[max(7rem,calc(env(safe-area-inset-top,0px)+6rem))] sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Guest reviews"
    >
      <div
        className="absolute inset-0 animate-fade-in bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <button
        type="button"
        onClick={onClose}
        className="fixed right-3 z-[101] flex min-h-touch min-w-touch items-center justify-center rounded-full p-2 text-white/90 transition-all hover:bg-white/10 hover:text-white sm:right-5"
        style={{ top: detailTopPad }}
        aria-label="Close"
      >
        <X className="h-8 w-8" />
      </button>

      {canBack ? (
        <button
          type="button"
          onClick={goPrev}
          className="fixed left-2 top-1/2 z-[101] flex h-12 w-12 min-h-touch min-w-touch -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 sm:left-4 md:h-14 md:w-14 lg:left-8"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-6 w-6 text-white md:h-8 md:w-8" />
        </button>
      ) : null}

      {canForward ? (
        <button
          type="button"
          onClick={goNext}
          className="fixed right-2 top-1/2 z-[101] flex h-12 w-12 min-h-touch min-w-touch -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 sm:right-4 md:h-14 md:w-14 lg:right-8"
          aria-label="Next review"
        >
          <ChevronRight className="h-6 w-6 text-white md:h-8 md:w-8" />
        </button>
      ) : null}

      <div
        className="relative z-10 mx-auto flex w-full max-w-lg cursor-grab touch-pan-y flex-col justify-center px-2 animate-scale-in active:cursor-grabbing sm:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={onReviewPointerDown}
        onPointerUp={onReviewPointerUp}
        onPointerCancel={onReviewPointerCancel}
      >
        <div className="overflow-hidden rounded-2xl border-2 border-purple/30 bg-white shadow-2xl">
          <div className="border-b border-gray-100 px-5 pb-4 pt-5 sm:px-8 sm:pb-5 sm:pt-6">
            <div className="flex items-start gap-3">
              <img
                src={review.avatar}
                alt=""
                className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-plum/10 sm:h-12 sm:w-12"
              />
              <div className="min-w-0">
                <h2 className="text-lg font-bold leading-tight text-plum sm:text-xl">
                  {review.name}
                </h2>
                <p className="text-fluid-xs text-muted sm:text-fluid-sm">{review.date}</p>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-cta text-cta"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-[min(60vh,28rem)] overflow-y-auto scroll-touch-y px-5 py-4 sm:max-h-[min(65vh,32rem)] sm:px-8 sm:py-5">
            <p className="text-left text-fluid-sm leading-relaxed text-gray-800 sm:text-fluid-base">
              {review.text}
            </p>
          </div>

          <div className="border-t border-gray-100 px-5 py-4 sm:px-8">
            <img
              src={TRIPADVISOR_LOGO_SRC}
              alt="TripAdvisor"
              className="h-5 w-auto sm:h-6"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {reviewList.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setIndex(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all touch-manipulation md:h-3 md:w-3 ${
                idx === index ? 'scale-125 bg-white' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Review ${idx + 1} of ${reviewList.length}`}
              aria-current={idx === index}
            />
          ))}
        </div>

        <p className="mt-2 text-center text-fluid-xs text-white/80">
          {index + 1} / {reviewList.length} · swipe or drag on the card · arrows
        </p>
      </div>
    </div>,
    document.body
  );
}

function ReviewCard({
  review,
  index,
  onReadMore,
}: {
  review: Review;
  index: number;
  onReadMore: (index: number) => void;
}) {
  return (
    <article
      className="group flex h-full flex-col rounded-xl bg-gray-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-lg md:rounded-2xl md:p-6"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex items-start gap-3 md:mb-6">
        <img
          src={review.avatar}
          alt={review.name}
          className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-cta md:h-10 md:w-10"
          loading="lazy"
        />
        <div className="min-w-0">
          <h4 className="truncate text-fluid-sm font-bold text-gray-900">{review.name}</h4>
          <p className="text-fluid-xs text-gray-500">{review.date}</p>
        </div>
      </div>

      <div className="mb-3 flex gap-0.5 md:mb-4 md:gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-cta text-cta transition-transform duration-300 group-hover:scale-110 md:h-4 md:w-4"
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <p className="text-fluid-xs leading-relaxed text-gray-800 line-clamp-4 md:text-fluid-sm">
          {review.text}
        </p>
        <button
          type="button"
          onClick={() => onReadMore(index)}
          className="mt-2 self-start text-fluid-xs font-semibold text-primary hover:text-primary-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 md:text-fluid-sm"
        >
          Read more
        </button>
      </div>

      <div className="mt-4 md:mt-6">
        <img
          src={TRIPADVISOR_LOGO_SRC}
          alt="TripAdvisor"
          className="h-4 w-auto transition-transform duration-300 group-hover:scale-105 md:h-5"
        />
      </div>
    </article>
  );
}

export function Testimonials() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section className="bg-white py-fluid-8">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <h2 className="mb-fluid-6 text-center text-fluid-2xl font-bold tracking-tight text-plum md:text-fluid-3xl">
          Guest reviews
        </h2>
      </div>

      <Gallery images={galleryImages} className="mb-fluid-6" />

      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              review={review}
              index={index}
              onReadMore={(i) => {
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>

        <div className="mt-fluid-8">
          <Button className="w-full" asCta>
            Reserve Now
          </Button>
        </div>
      </div>

      <ReviewsLightbox
        reviews={reviews}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
