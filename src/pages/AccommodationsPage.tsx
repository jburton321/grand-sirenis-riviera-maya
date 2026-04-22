import { useState } from 'react';
import {
  Tv,
  Shirt,
  Lock,
  Refrigerator,
  Bath,
  Coffee,
} from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { SaveNowTravelLater } from '../components/SaveNowTravelLater';
import { InteriorHero } from '../components/InteriorHero';
import {
  ACCOMMODATIONS_HERO_BACKGROUND_IMAGE,
  PRIMARY_CTA_LABEL,
} from '../constants';
import { interiorStripeClass } from '../utils/interiorStripes';
import {
  CANCUN_ACCOMMODATION_IMAGES,
  TULUM_ACCOMMODATION_IMAGES,
  VALLARTA_ACCOMMODATION_IMAGES,
  ALL_HOTEL_ACCOMMODATION_IMAGES,
  seededShuffleImages,
} from '../content/hotelAccommodationImages';

const roomFeatures = [
  { icon: Tv, label: '55" flat-screen HDTV' },
  { icon: Coffee, label: 'Nespresso coffee / tea service' },
  { icon: Refrigerator, label: 'Minibar (refreshed daily)' },
  { icon: Bath, label: 'Luxury bath amenities' },
  { icon: Shirt, label: 'Bathrobes and slippers' },
  { icon: Lock, label: 'In-room safe' },
];


/** Per-hotel hero zigzag blocks — images[0] is the main shot; extras power the thumb gallery. */
type HotelSection = {
  eyebrow: string;
  name: string;
  images: readonly string[];
  alt: string;
  body: string;
};

const hotelSections: readonly HotelSection[] = [
  {
    eyebrow: 'Cancún · Caribbean Coast',
    name: 'Hilton Cancun Mar Caribe',
    images: CANCUN_ACCOMMODATION_IMAGES,
    alt: 'Hilton Cancun Mar Caribe — ocean-view king guest room',
    body: `Set across 100 acres of Cancún's Mayan coastline, your Deluxe Room opens to
      Caribbean views and soft Gulf light. A king-size bed anchors a clean, modern
      layout; the marble bath pairs a spacious rain shower with quiet finishes. Morning
      light breaks across the mangrove inlets the property is built around — even at
      full occupancy, the beachfront stays calm.`,
  },
  {
    eyebrow: 'Tulum · Riviera Maya',
    name: 'Hilton Tulum Riviera Maya',
    images: TULUM_ACCOMMODATION_IMAGES,
    alt: 'Hilton Tulum Riviera Maya — Enclave adults-only suite interior',
    body: `Tulum's adults-only Enclave wing operates as its own resort — separate arrival,
      separate pools, and a dining room that faces the mangrove preserve rather than the
      main property. The Deluxe Room is a study in quiet luxury: warm wood, natural stone,
      and generous light. The private furnished balcony opens to the mangrove and the
      ocean beyond. Minutes from Tulum Ruins and cenote routes.`,
  },
  {
    eyebrow: 'Puerto Vallarta · Pacific Coast',
    name: 'Hilton Vallarta Riviera',
    images: VALLARTA_ACCOMMODATION_IMAGES,
    alt: 'Hilton Vallarta Riviera — Superior Ocean Front King guest room',
    body: `Your Vallarta Deluxe Room faces the Pacific — long golden-hour light, warm
      breezes, and the quiet drama of Jalisco's coastline. The layout flows from
      king-size bed to private terrace; premium bath amenities and 24-hour in-room
      dining support an easy, unhurried stay. Steps to beachfront dining and infinity
      pools, with the Malecón a short drive away.`,
  },
];

/** Under-hero slider: every hotel image, seed-shuffled so all three properties
 *  interleave randomly but stay stable across builds. */
const accommodationsGallery = seededShuffleImages(
  ALL_HOTEL_ACCOMMODATION_IMAGES,
  0xA5C0FFEE,
);

/**
 * Single hotel hero image + thumbnail picker. Clicking a thumbnail swaps the main
 * image; on mobile, swipe left/right over the main image cycles through. Gracefully
 * falls back to a single image when `images.length === 1`.
 */
function HotelGallery({ images, alt }: { images: readonly string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);
  const count = images.length;

  const step = (delta: number) =>
    setActive((prev) => (prev + delta + count) % count);

  const onTouchStart = (e: React.TouchEvent) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    setTouchX(null);
  };

  return (
    <div className="w-full lg:w-1/2">
      <div
        className="group overflow-hidden rounded-2xl relative touch-pan-y select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={images[active]}
          src={images[active]}
          alt={alt}
          className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105 animate-[fadeIn_0.3s_ease-out]"
          loading="lazy"
        />
      </div>

      {count > 1 && (
        <div
          className="mt-3 grid gap-2"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
          role="tablist"
          aria-label="Room photo gallery"
        >
          {images.map((src, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show photo ${idx + 1} of ${count}`}
                onClick={() => setActive(idx)}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function AccommodationsPage() {
  return (
    <>
      <InteriorHero
        backgroundImage={ACCOMMODATIONS_HERO_BACKGROUND_IMAGE}
        footer={
          <>
            <AccommodationsPriceBar />
            <InteriorMobilePriceBar />
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Collection Deluxe Room
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              Your certificate includes 5 days and 4 nights in a finely appointed Deluxe Room at
              your chosen Hilton all-inclusive. This is your private sanctuary — designed to let
              you decompress, disconnect, and recharge. Each destination delivers the same standard,
              expressed through the character of its coastline.
            </p>
            <Button className="w-full" asCta>{PRIMARY_CTA_LABEL}</Button>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple px-6 py-4">
              <h3 className="text-xl font-bold text-white md:text-2xl">Room features</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {roomFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <feature.icon className="h-6 w-6 flex-shrink-0 text-sky transition-colors duration-300 group-hover:text-sky-dark" />
                    <span className="text-gray-800 transition-colors duration-300 group-hover:text-gray-900">{feature.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </InteriorHero>

      <Gallery
        images={accommodationsGallery}
        sectionBackgroundClassName={interiorStripeClass(0)}
        compact
      />

      <section className={`px-4 pt-fluid-8 md:px-6 lg:px-10 ${interiorStripeClass(1)}`}>
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <h2 className="font-sans text-fluid-2xl font-bold tracking-tight text-slate-800 md:text-fluid-3xl">
              Your Choice of Three Hilton Resorts
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-fluid-base leading-relaxed text-gray-700">
              Every Paradise Retreat certificate unlocks your pick of these three
              Hilton luxury all-inclusive resorts in Mexico &mdash; Cancún, Tulum,
              or Puerto Vallarta.
            </p>
          </div>
        </div>
      </section>

      {hotelSections.map((hotel, idx) => {
        const reversed = idx % 2 === 1;
        return (
          <section
            key={hotel.name}
            className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${interiorStripeClass(idx + 1)}`}
          >
            <div className="max-w-content mx-auto">
              <div
                className={`flex flex-col ${
                  reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12 items-center`}
              >
                <HotelGallery images={hotel.images} alt={hotel.alt} />
                <div className="w-full lg:w-1/2">
                  <p className="text-sm font-semibold uppercase tracking-widest text-sky-dark mb-2">
                    {hotel.eyebrow}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {hotel.name}
                  </h2>
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                    {hotel.body}
                  </p>
                  <Button className="w-full" asCta>{PRIMARY_CTA_LABEL}</Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <div style={{ backgroundColor: '#ffffff' }}>
        <img
          className="w-full h-auto"
          src="images/frame-19840779511.png"
          alt="Decorative divider"
          style={{ backgroundColor: '#F9F8F4' }}
        />
      </div>

      <SaveNowTravelLater />
    </>
  );
}
