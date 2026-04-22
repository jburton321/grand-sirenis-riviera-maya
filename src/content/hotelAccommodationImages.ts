/**
 * Shared per-hotel room/suite image lists used by both the Accommodations page
 * (zigzag + under-hero slider) and the Home page Testimonials slider.
 * Keep these arrays in sync with files in `public/images/accommodations/`.
 */
export const CANCUN_ACCOMMODATION_IMAGES = [
  'images/accommodations/hilton-cancun-mar-caribe-01.png',
  'images/accommodations/hilton-cancun-mar-caribe-02.png',
  'images/accommodations/hilton-cancun-mar-caribe-03.png',
  'images/accommodations/hilton-cancun-mar-caribe-04.png',
  'images/accommodations/hilton-cancun-mar-caribe-05.png',
  'images/accommodations/hilton-cancun-mar-caribe-06.png',
] as const;

export const TULUM_ACCOMMODATION_IMAGES = [
  'images/accommodations/hilton-tulum-riviera-maya-01.png',
  'images/accommodations/hilton-tulum-riviera-maya-02.png',
  'images/accommodations/hilton-tulum-riviera-maya-03.png',
  'images/accommodations/hilton-tulum-riviera-maya-04.png',
  'images/accommodations/hilton-tulum-riviera-maya-05.png',
  'images/accommodations/hilton-tulum-riviera-maya-06.png',
] as const;

export const VALLARTA_ACCOMMODATION_IMAGES = [
  'images/accommodations/hilton-vallarta-riviera-01.png',
  'images/accommodations/hilton-vallarta-riviera-02.png',
  'images/accommodations/hilton-vallarta-riviera-03.png',
  'images/accommodations/hilton-vallarta-riviera-04.png',
  'images/accommodations/hilton-vallarta-riviera-05.png',
  'images/accommodations/hilton-vallarta-riviera-06.png',
] as const;

/** All 18 hotel room images across the three Collection properties. */
export const ALL_HOTEL_ACCOMMODATION_IMAGES = [
  ...CANCUN_ACCOMMODATION_IMAGES,
  ...TULUM_ACCOMMODATION_IMAGES,
  ...VALLARTA_ACCOMMODATION_IMAGES,
] as const;

/** Stable seeded Fisher-Yates shuffle — same output every build for a given seed. */
export function seededShuffleImages(items: readonly string[], seed: number): string[] {
  const arr = [...items];
  let s = seed >>> 0;
  const rnd = () => {
    s = (1664525 * s + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
