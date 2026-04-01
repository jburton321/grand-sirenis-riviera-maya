/**
 * Single source for short amenity / attraction lines (home Amenities block, interior page, grid blurbs).
 */
export const FEATURED_AMENITY_LINES = [
  '2 mi of Caribbean beach',
  'Pools, lazy river, activities pool',
  'Spa Grand Sirenis',
  '8 à la carte + 2 buffets, inclusive',
  'Beyond Flavors',
  'Nights out, outdoor theater',
  '2 gyms, sauna',
  'Snorkel, fish, watersports',
  'Turtle sanctuary, trails',
  'Sirenios Kids Club',
  'Coffee shop, bars, salon',
  'Free WiFi',
] as const;

export const NEARBY_ATTRACTION_LINES = [
  'Tulum ruins (~20 min)',
  'Chichen Itza day trips',
  'Cenotes: swim, snorkel, caves',
  'Playa del Carmen 5th Ave',
  'Cobá ruins, jungle bikes',
  'Xcaret Park',
  'Xel-Há water park',
  'Akumal sea turtles',
  "Sian Ka'an Biosphere",
  'Holbox day trip',
] as const;

/**
 * Home page AmenitiesGrid bento + lightbox.
 * Images live in `public/img/Ammenities/bento/` (same order as lightbox indices 0–7).
 */
export const AMENITIES_HOME_GRID_ITEMS = [
  {
    src: 'img/Ammenities/bento/beach.webp',
    label: 'Caribbean Beach',
    description:
      '2 mi of Caribbean beach, soft sand and loungers, calm swims in turquoise water.',
  },
  {
    src: 'img/Ammenities/bento/tennis-fitness.jpg',
    label: 'Tennis & Fitness',
    description:
      'Tennis, 2 gyms, sauna, and activities between pool time and dinner.',
  },
  {
    src: 'img/Ammenities/bento/watersports.webp',
    label: 'Watersports & Trails',
    description:
      'Snorkel, fish, watersports, turtle sanctuary, and trails on property.',
  },
  {
    src: 'img/Ammenities/bento/spa.webp',
    label: 'Spa Grand Sirenis',
    description:
      'Spa Grand Sirenis: treatments, hydrotherapy, optional beachside services.',
  },
  {
    src: 'img/Ammenities/bento/pool.webp',
    label: 'Pools & Lazy River',
    description:
      'Pools, lazy river, activities pool, sunny decks and shade.',
  },
  {
    src: 'img/Ammenities/bento/fitnesscenter.jpg',
    label: 'Fitness Center',
    description: 'Cardio, weights, and stretch space for morning workouts.',
  },
  {
    src: 'img/Ammenities/bento/bars.webp',
    label: 'Bars & Cocktails',
    description:
      'Premium cocktails and spirits, poolside, before dinner, or at sunset.',
  },
  {
    src: 'img/Ammenities/bento/buffet.webp',
    label: 'Dining & Buffets',
    description:
      '8 à la carte + 2 buffets, Beyond Flavors, all included.',
  },
] as const;

export const AMENITIES_HOME_GRID_INTRO =
  'Pools, lazy river, spa, dining, beach. Tap an image to learn more.';

/** Main resort map pin lightbox (keep in sync with featured amenity phrasing). */
export const RESORT_MAP_POPUP_SUMMARY =
  'All-inclusive with 2 mi of Caribbean beach: pools, lazy river, spa, 8 à la carte + 2 buffets, Akumal area.';

export const RESORT_MAP_POPUP_HIGHLIGHTS = [
  '8 à la carte + 2 buffets, bars, pools, spa, lazy river',
  'Cancún to Tulum corridor, km 256.3',
] as const;
