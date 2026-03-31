/**
 * Single source for short amenity / attraction lines (home Amenities block, interior page, grid blurbs).
 */
export const FEATURED_AMENITY_LINES = [
  '2 mi Caribbean beachfront',
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

/** Home page AmenitiesGrid lightbox order: beach, tennis, adventures, spa, pool, fitness, cocktails, dining */
export const AMENITIES_HOME_GRID_ITEMS = [
  {
    src: 'home/image0.png',
    label: 'CARIBBEAN BEACHFRONT',
    description:
      '2 mi Caribbean beachfront, soft sand and loungers, calm swims in turquoise water.',
  },
  {
    src: 'home/image2.png',
    label: 'TENNIS & FITNESS',
    description:
      'Tennis, 2 gyms, sauna, and activities between pool time and dinner.',
  },
  {
    src: 'home/image4.png',
    label: 'WATERSPORTS & TRAILS',
    description:
      'Snorkel, fish, watersports, turtle sanctuary, and trails on property.',
  },
  {
    src: 'home/image6.png',
    label: 'SPA GRAND SIRENIS',
    description:
      'Spa Grand Sirenis: treatments, hydrotherapy, optional beachside services.',
  },
  {
    src: 'home/image1.png',
    label: 'POOLS & LAZY RIVER',
    description:
      'Pools, lazy river, activities pool, sunny decks and shade.',
  },
  {
    src: 'home/image3.png',
    label: 'FITNESS CENTER',
    description: 'Cardio, weights, and stretch space for morning workouts.',
  },
  {
    src: 'home/image5.png',
    label: 'BARS & COCKTAILS',
    description:
      'Premium cocktails and spirits, poolside, before dinner, or at sunset.',
  },
  {
    src: 'home/image7.png',
    label: 'DINING & BUFFETS',
    description:
      '8 à la carte + 2 buffets, Beyond Flavors, all included.',
  },
] as const;

export const AMENITIES_HOME_GRID_INTRO =
  'Pools, lazy river, spa, dining, beach. Tap an image to learn more.';

/** Main resort map pin lightbox (keep in sync with featured amenity phrasing). */
export const RESORT_MAP_POPUP_SUMMARY =
  'All-inclusive on 2 mi Caribbean beachfront: pools, lazy river, spa, 8 à la carte + 2 buffets, Akumal area.';

export const RESORT_MAP_POPUP_HIGHLIGHTS = [
  '8 à la carte + 2 buffets, bars, pools, spa, lazy river',
  'Cancún to Tulum corridor, km 256.3',
] as const;
