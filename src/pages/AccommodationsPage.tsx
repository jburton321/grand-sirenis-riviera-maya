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
                This non-smoking 52 sq. meter Junior Suite Deluxe Single at {RESORT_DISPLAY_NAME} offers an
                incredible and comfortable accommodation experience with enviable views and various bed
                options, combining elegance and comfort for your total satisfaction. Thoughtfully designed
                with quality furnishings and natural light throughout.
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
                src="accommodations/balcony.png"
                alt="Junior suite living space"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Entertainment and connectivity
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Stay connected and entertained with an HD television with cable service and complimentary
                Wi-Fi access throughout your suite and across the resort grounds. Additional in-suite
                amenities include a telephone, wake-up call service, and a laptop-sized personal safe to keep
                your valuables secure.
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
                src="accommodations/convienance.png"
                alt="Bath and comfort"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bath and comfort
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                Your beautifully appointed bathroom features a full premium bath set and quality amenities
                with a hair dryer. Individual air conditioning ensures year-round comfort, while daily
                housekeeping service attends to every detail so your suite always feels like a sanctuary
                waiting to welcome you home.
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
