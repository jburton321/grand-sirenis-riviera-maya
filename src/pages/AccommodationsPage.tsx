import {
  Tv,
  Shirt,
  Lock,
  Bed,
  Wind,
  Refrigerator,
  Wifi,
  Bath,
  Phone,
  AlarmClock,
  LampDesk,
  Baby,
} from 'lucide-react';
import { Gallery } from '../components/Gallery';
import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { SaveNowTravelLater } from '../components/SaveNowTravelLater';
import { InteriorHero } from '../components/InteriorHero';
import { ACCOMMODATIONS_HERO_BACKGROUND_IMAGE, RESORT_DISPLAY_NAME } from '../constants';
import { GUEST_REVIEW_GALLERY_IMAGES } from '../content/guestReviewGalleryFilenames';
import { interiorStripeClass } from '../utils/interiorStripes';

const roomFeatures = [
  { icon: Bed, label: 'Your choice of bed configuration' },
  { icon: Wind, label: 'Individual air conditioning' },
  { icon: Lock, label: 'Laptop-sized in-room safe' },
  { icon: Refrigerator, label: 'Mini fridge' },
  { icon: Tv, label: 'HD television with cable' },
  { icon: Wifi, label: 'Complimentary Wi-Fi' },
  { icon: Bath, label: 'Full bath set and hair dryer' },
  { icon: Shirt, label: 'Iron and ironing board' },
  { icon: Phone, label: '24-hour room service' },
  { icon: AlarmClock, label: 'Wake-up call service' },
  { icon: LampDesk, label: 'Desk with lamp and natural light' },
  { icon: Baby, label: 'Baby cots available on request' },
];

/** Same Junior Suite imagery as Guest reviews (`public/img/GusetReviewGallery/`). */
const accommodationsGallery = [...GUEST_REVIEW_GALLERY_IMAGES];

const accSuiteShot = (index: number) =>
  GUEST_REVIEW_GALLERY_IMAGES[
    Math.min(Math.max(0, index), GUEST_REVIEW_GALLERY_IMAGES.length - 1)
  ];

/** Bath & comfort block — specific suite photo from guest gallery. */
const bathComfortGalleryImage =
  'img/GusetReviewGallery/juniorsuitedeluxesingle13985-jpg-11ce962885ac99463020599860f.webp';

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
              Junior Suite Deluxe Single
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              <span className="font-semibold">
                Your vacation includes 5 nights of all-inclusive accommodations in a Junior Suite Deluxe
                Single at {RESORT_DISPLAY_NAME}.
              </span>{' '}
              This elegantly appointed 52 sq. meter suite offers a sophisticated retreat combining
              contemporary design with the warmth of Mayan-inspired natural surroundings.
            </p>
            <Button className="w-full" asCta>RESERVE NOW</Button>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple px-6 py-4">
              <h3 className="text-xl font-bold text-white md:text-2xl">Suite features</h3>
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
                alt="Junior Suite Deluxe Single — living and sleep area"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Suite details
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                This non-smoking 52 sq. meter Junior Suite Deluxe Single at {RESORT_DISPLAY_NAME} offers an
                incredible and comfortable stay with the space, light, and layout you see in these guest
                photos — enviable views, flexible bed options, and quality furnishings that combine elegance
                with everyday comfort.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
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
                alt="Junior Suite Deluxe — in-room space and amenities"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Entertainment and connectivity
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Relax in the same Junior Suite style shown here while you enjoy HD television with cable and
                complimentary Wi-Fi in your room and across the resort. Your suite also includes a telephone,
                wake-up call service, and a laptop-sized personal safe for peace of mind.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
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
                alt="Junior Suite Deluxe — comfort and bath details"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bath and comfort
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Unwind in a beautifully appointed bathroom with a full premium bath set, quality amenities,
                and a hair dryer. Individual air conditioning keeps your suite comfortable year-round, and
                daily housekeeping keeps everything fresh — so every return to your Junior Suite feels like
                coming home.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: '#ffffff' }}>
        <img
          className="w-full h-auto"
          src="home/frame-19840779511.png"
          alt="Decorative divider"
        />
      </div>

      <SaveNowTravelLater />
    </>
  );
}
