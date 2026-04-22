/**
 * Single source for short amenity / attraction lines (home Amenities block, interior page, grid blurbs).
 * PHH Collection — Phase 1 copy swap.
 */
export const FEATURED_AMENITY_LINES = [
  'Gourmet à la carte',
  'Top-shelf cocktails',
  '24-hour room service',
  'Private beach access',
  'Outdoor infinity pools',
  'Full-service spa',
  'Fitness center',
  'Nightly entertainment',
  'High-speed Wi-Fi',
  'Bathrobes & room safe',
] as const;

export const NEARBY_ATTRACTION_LINES = [
  'Chichén Itzá',
  'Tulum Ruins',
  'Sacred cenotes',
  'Xcaret Park',
  '5th Ave Playa',
  'Cozumel reefs',
  'Vallarta Malecón',
  'Sayulita surf',
  'Marietas Islands',
  'Whale watching',
] as const;

/**
 * Home page AmenitiesGrid bento + lightbox.
 * Images live in `public/images/` (same order as lightbox indices 0–7).
 * Phase 1: images kept as placeholders for Phase 2 reference — labels/descriptions swapped.
 */
export const AMENITIES_HOME_GRID_ITEMS = [
  {
    src: 'images/amenities/beachfront-access.png',
    label: 'Beachfront Access',
    description:
      'Private beach access across all three Collection destinations.',
  },
  {
    src: 'images/amenities/fitness-center.png',
    label: 'Fitness Center',
    description:
      'State-of-the-art fitness centers at every property.',
  },
  {
    src: 'images/amenities/outdoor-adventures.png',
    label: 'Outdoor Adventures',
    description:
      'Non-motorized water sports, beach activities, and excursions.',
  },
  {
    src: 'images/amenities/spa-treatment.png',
    label: 'Hot Tub & Spa',
    description:
      'Full-service spas with signature treatments and hydrotherapy.',
  },
  {
    src: 'images/home/pool.webp',
    label: 'Infinity Pools',
    description:
      'Outdoor and infinity pools at every resort.',
  },
  {
    src: 'images/home/fitnesscenter.jpg',
    label: 'Premium Cocktails',
    description: 'Top-shelf spirits and hand-crafted cocktails throughout your stay.',
  },
  {
    src: 'images/home/bars.webp',
    label: 'Onsite Dining',
    description:
      'Multiple à la carte restaurants and casual dining venues.',
  },
  {
    src: 'images/home/buffet.webp',
    label: 'Full Resort Amenities',
    description:
      'Wi-Fi, entertainment, in-room dining, robes, and more.',
  },
] as const;

export const AMENITIES_HOME_GRID_INTRO =
  'Across all three destinations, the Collection standard is consistent: beachfront access, spa and wellness, premium cocktails, and a culinary program worth planning a day around.';

/** Main resort map pin lightbox (keep in sync with featured amenity phrasing). */
export const RESORT_MAP_POPUP_SUMMARY =
  "PHH Collection — three flagship Hilton luxury all-inclusive resorts across Mexico's Caribbean and Pacific coasts.";

export const RESORT_MAP_POPUP_HIGHLIGHTS = [
  'Cancún · Tulum · Puerto Vallarta — your choice of three',
  'Premium all-inclusive: dining, drinks, spa, beach, pools',
] as const;
