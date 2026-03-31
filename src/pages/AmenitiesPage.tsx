import { Button } from '../components/Button';
import { Gallery } from '../components/Gallery';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';
import { RESORT_DISPLAY_NAME } from '../constants';

const amenitiesGallery = [
  'amenities/photo-description0.png',
  'amenities/photo-description1.png',
  'amenities/photo-description2.png',
  'amenities/photo-description3.png',
  'amenities/hot-tub-by-building-18-and-190.png',
  'amenities/photo-description4.png',
];

export function AmenitiesPage() {
  return (
    <>
      <InteriorHero
        backgroundImage="things-to-do/todo.png"
        footer={
          <>
            <AccommodationsPriceBar />
            <InteriorMobilePriceBar />
          </>
        }
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All-Inclusive Amenities
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              <span className="font-semibold">
                {RESORT_DISPLAY_NAME} is your all-inclusive base on 2 mi Caribbean beachfront.
              </span>{' '}
              Pools, lazy river, Spa Grand Sirenis, 8 à la carte + 2 buffets, Beyond Flavors, nights out,
              Sirenios Kids Club, and free WiFi on the Cancún to Tulum corridor.
            </p>
            <Button className="w-full" asCta>RESERVE NOW</Button>
          </div>
          <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
            <img
              src="things-to-do/todo.png"
              alt="All-Inclusive Amenities"
              className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </InteriorHero>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
              <img
                src="amenities/things-to-do-photo-11.png"
                alt="Luxury All-Inclusive Experience"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Luxury All-Inclusive Experience
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Dining, drinks, WiFi, entertainment, beach, and pools are included.
                </span>{' '}
                One resort, one pace: beach, pools, spa, dining, and nights out without extra planning.
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
                src="amenities/things-to-do-photo-12.png"
                alt="Gourmet Dining with Flexibility"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Gourmet Dining with Flexibility
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  8 à la carte + 2 buffets, inclusive, plus Beyond Flavors.
                </span>{' '}
                Coffee shop, bars, salon, and nights out round out dining and social time.
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
                src="amenities/things-to-do-photo-13.png"
                alt="Pools, Beach, and Oceanfront Spaces"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pools, Beach, and Oceanfront Spaces
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Pools, lazy river, activities pool, and 2 mi Caribbean beachfront.
                </span>{' '}
                Snorkel, fish, watersports, turtle sanctuary, trails, and Mayan ruin on property.
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
                src="amenities/things-to-do-photo-14.png"
                alt="Wellness, Fitness, and Recreation"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wellness, Fitness, and Recreation
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Spa Grand Sirenis: treatments and optional beachside services.
                </span>{' '}
                2 gyms, sauna, pool time, and shore walks keep you moving.
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
                src="amenities/things-to-do-photo-15.png"
                alt="Nightly Entertainment and Social Spaces"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nightly Entertainment and Social Spaces
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Nights out, outdoor theater: music, shows, under the stars.
                </span>{' '}
                Bars, coffee shop, salon, daytime activities, and Sirenios Kids Club for every age.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <Gallery images={amenitiesGallery} className="bg-transparent" />
            <div className="px-6 pb-10">
              <Button className="w-full" asCta>Reserve Now</Button>
            </div>
          </div>
        </div>
      </section>

      <InteriorFooter />
    </>
  );
}
