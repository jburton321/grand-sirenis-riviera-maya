import {
  HILTON_CANCUN_NAME,
  HILTON_TULUM_NAME,
  HILTON_VALLARTA_NAME,
} from '../constants';

/**
 * Canonical metadata for the three Hilton all-inclusive properties. Used by
 * both `HotelOptions` (Your Choice of Three Hilton Resorts) and `HeroVariant`
 * (homepage destination cards) so titles, video sources, and lightbox copy
 * stay in sync. Description text is sourced from each resort's hilton.com
 * page and Hilton newsroom announcements.
 *
 * Poster images are intentionally left out: each surface picks the still
 * that best fits its layout (full-bleed hero card vs. 3:4 video poster).
 */
export type HiltonResortKey = 'cancun' | 'tulum' | 'vallarta';

export type HiltonResort = {
  key: HiltonResortKey;
  /** Full canonical resort name (matches `constants.ts`). */
  name: string;
  /** Small eyebrow rendered above the lightbox title (location/region descriptor). */
  subtitle: string;
  /** Description paragraph shown in the lightbox detail panel. */
  description: string;
  /** Looping promo / hero video shown inside the lightbox. */
  videoSrc: string;
  /** Seek offset (seconds) applied once metadata loads — skips intro frames. */
  videoStartSeconds: number;
};

/** All three properties in canonical site order (Cancún → Tulum → Vallarta). */
export const HILTON_RESORTS: readonly HiltonResort[] = [
  {
    key: 'cancun',
    name: HILTON_CANCUN_NAME,
    subtitle: 'Cancún Hotel Zone · 600 ft of Caribbean beachfront',
    description:
      "Endless adventures and thoughtful amenities meet at this oceanfront all-inclusive resort in the heart of Cancún's Hotel Zone. Guests enjoy 540 ocean-view rooms and suites, twelve restaurants and bars, family and adults-only pools with a waterslide, direct beach access, and a signature spa with a hydrotherapy circuit — all just 10 miles from Cancún International Airport.",
    videoSrc: 'media/hilton-cancun-hero.mp4',
    videoStartSeconds: 4,
  },
  {
    key: 'tulum',
    name: HILTON_TULUM_NAME,
    subtitle: 'Riviera Maya · Secluded Caribbean bay',
    description:
      "Tucked in a secluded bay overlooking white sands and turquoise water, this is Hilton's largest resort in the Caribbean and Latin America. Spread across 735 rooms and suites in three-story villa-style buildings, discover eight resort pools, 13 restaurants and bars, a luxury spa, and a dedicated Family Zone with a water park — all inspired by the allure of Mayan civilization and modern Mexican culture.",
    videoSrc: 'media/telum.webm',
    videoStartSeconds: 4,
  },
  {
    key: 'vallarta',
    name: HILTON_VALLARTA_NAME,
    subtitle: 'Puerto Vallarta · Bahía de Banderas Pacific coast',
    description:
      'A spectacularly oceanfront all-inclusive escape between the beaches of Bahía de Banderas and downtown Puerto Vallarta. Every one of the 444 rooms and suites faces the Pacific with a private balcony, complemented by two sparkling infinity pools, twelve restaurants, bars and lounges, a full-service Eforea Spa, nightly entertainment, and all-inclusive dining, cocktails, and pool and beach service — just nine miles from Puerto Vallarta International Airport.',
    videoSrc: 'media/Vallerta.webm',
    videoStartSeconds: 4,
  },
];

/** Lookup helper for components that key by destination ID. */
export const HILTON_RESORTS_BY_KEY: Record<HiltonResortKey, HiltonResort> =
  HILTON_RESORTS.reduce(
    (acc, r) => {
      acc[r.key] = r;
      return acc;
    },
    {} as Record<HiltonResortKey, HiltonResort>,
  );
