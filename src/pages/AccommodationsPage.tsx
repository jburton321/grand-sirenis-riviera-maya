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
import { GUEST_REVIEW_GALLERY_IMAGES } from '../content/guestReviewGalleryFilenames';
import { interiorStripeClass } from '../utils/interiorStripes';

const roomFeatures = [
  { icon: Tv, label: '55" flat-screen HDTV' },
  { icon: Coffee, label: 'Nespresso coffee / tea service' },
  { icon: Refrigerator, label: 'Minibar (refreshed daily)' },
  { icon: Bath, label: 'Luxury bath amenities' },
  { icon: Shirt, label: 'Bathrobes and slippers' },
  { icon: Lock, label: 'In-room safe' },
];

/** Same Junior Suite imagery as Guest reviews (`public/images/`). */
const accommodationsGallery = [...GUEST_REVIEW_GALLERY_IMAGES];

const accSuiteShot = (index: number) =>
  GUEST_REVIEW_GALLERY_IMAGES[
    Math.min(Math.max(0, index), GUEST_REVIEW_GALLERY_IMAGES.length - 1)
  ];

/** Bath & comfort block - specific suite photo from guest gallery. */
const bathComfortGalleryImage =
  'images/juniorsuitedeluxesingle13985-jpg-11ce962885ac99463020599860f.webp';

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
      />

      <section className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${interiorStripeClass(1)}`}>
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src={accSuiteShot(0)}
                alt="Deluxe Room - living and sleep area"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mayan Coastline, Through Your Window
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Set across 100 acres of Cancún's Mayan coastline, your Deluxe Room opens to
                Caribbean views and soft Gulf light. A king-size bed anchors a clean, modern
                layout; the marble bath pairs a spacious rain shower with quiet finishes. Morning
                light breaks across the mangrove inlets the property is built around — even at
                full occupancy, the beachfront stays calm.
              </p>
              <Button className="w-full" asCta>{PRIMARY_CTA_LABEL}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${interiorStripeClass(2)}`}>
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src={accSuiteShot(4)}
                alt="Deluxe Room - in-room space and amenities"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Resort Within a Resort
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Tulum's adults-only wing operates as its own resort — separate arrival, separate
                pools, and a dining room that faces the mangrove preserve rather than the main
                property. The Deluxe Room is a study in quiet luxury: warm wood, natural stone,
                and generous light. The private furnished balcony opens to the mangrove and the
                ocean beyond. Minutes from Tulum Ruins and cenote routes.
              </p>
              <Button className="w-full" asCta>{PRIMARY_CTA_LABEL}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${interiorStripeClass(3)}`}>
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src={bathComfortGalleryImage}
                alt="Deluxe Room - comfort and bath details"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pacific Coast Elegance
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Your Vallarta Deluxe Room faces the Pacific — long golden-hour light, warm
                breezes, and the quiet drama of Jalisco's coastline. The layout flows from
                king-size bed to private terrace; premium bath amenities and 24-hour in-room
                dining support an easy, unhurried stay. Steps to beachfront dining and infinity
                pools, with the Malecón a short drive away.
              </p>
              <Button className="w-full" asCta>{PRIMARY_CTA_LABEL}</Button>
            </div>
          </div>
        </div>
      </section>

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
