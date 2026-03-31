import { Button } from '../components/Button';
import { Gallery } from '../components/Gallery';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';

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
                ULC Grand Sirenis Riviera Maya is an all-inclusive, adults-only beachfront resort
              </span>{' '}
              set across 70 acres of white sand shoreline and lush mangrove surroundings. The resort features 291 well-appointed rooms, including swim-up accommodations, designed for guests seeking comfort, privacy, and elevated service.
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
                  Your stay includes unlimited dining, drinks, Wi-Fi, entertainment, and full access to resort and beach amenities.
                </span>{' '}
                Everything is handled in one place, allowing you to focus on enjoying the setting, the service, and the pace of the resort without added decisions or extra planning.
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
                  The resort offers a diverse culinary program with four a la carte restaurants, a casual cafeteria, and multiple bars and lounges across the property.
                </span>{' '}
                Guests enjoy gourmet dining every evening with no reservations required, making it easy to choose what fits your mood. Options range across global cuisines, including guest-favorite Asian and hibachi experiences.
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
                  Spend your day by the main pool, relax at the swim-up bar, or take in ocean views from the resort's beachfront areas.
                </span>{' '}
                Swim-up rooms offer direct pool access steps from your terrace, while shaded loungers and open beach space provide plenty of room to enjoy the coast. Non-motorized water sports and beach activities are included as part of your stay.
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
                  Guests have access to the Zen Spa, featuring a hydrotherapy circuit and a menu of specialized treatments.
                </span>{' '}
                A modern fitness center, tennis court, and guided fitness classes support an active stay, while poolside and beachfront activities keep the days engaging without feeling scheduled.
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
                  Evenings bring live shows, themed events, and social gatherings throughout the resort.
                </span>{' '}
                Oceanfront bars and entertainment areas host performances and music that keep the energy going after sunset, offering a lively yet refined atmosphere designed for adults.
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
