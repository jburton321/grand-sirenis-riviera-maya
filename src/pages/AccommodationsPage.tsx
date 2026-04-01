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
import { RESORT_DISPLAY_NAME } from '../constants';

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

const accommodationsGallery = [
  'accommodations/scrolling-gall/1.png',
  'accommodations/scrolling-gall/2.png',
  'accommodations/scrolling-gall/3.png',
  'accommodations/scrolling-gall/4.png',
  'accommodations/scrolling-gall/5.png',
  'accommodations/scrolling-gall/6.png',
  'accommodations/scrolling-gall/7.png',
  'accommodations/scrolling-gall/8.png',
];

export function AccommodationsPage() {
  return (
    <>
      <InteriorHero
        backgroundImage="accommodations/accomodations-hero.png"
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
              This elegantly appointed 52 sq. meter suite combines contemporary design with the warmth of
              Mayan-inspired natural surroundings, a sophisticated retreat after days on the beach
              and by the pools.
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

      <Gallery images={accommodationsGallery} />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src="accommodations/deluxeroom.png"
                alt="Junior Suite Deluxe Single"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Suite details
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  This non-smoking Junior Suite Deluxe Single offers enviable views, your choice of bed
                  configuration, and quality furnishings with natural light throughout.
                </span>{' '}
                Stay connected with HD television, cable, complimentary Wi-Fi, a telephone, wake-up calls,
                and a laptop-sized personal safe. Daily housekeeping keeps every detail attended to so your
                suite feels like a sanctuary.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src="accommodations/convienance.png"
                alt="Bath and comfort"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bath &amp; comfort
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Your bathroom features a full premium bath set, quality amenities, and a hair dryer.
                </span>{' '}
                Individual air conditioning keeps you comfortable year-round. Thoughtful touches throughout
                the suite make it easy to unwind after a day on two miles of Caribbean beach.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src="accommodations/balcony.png"
                alt="Junior suite living space"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Entertainment &amp; connectivity
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Relax with in-suite entertainment and stay connected across the resort.
                </span>{' '}
                Enjoy HD television with cable, complimentary Wi-Fi, and space to recharge, so you can
                share photos, stream, or simply disconnect on your own terms.
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
