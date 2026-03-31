import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';

export function AllInclusivePage() {
  return (
    <>
      <InteriorHero
        backgroundImage="all-inclusive/hero-heroback.png"
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
              Your All-Inclusive Escape Awaits
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              <span className="font-semibold">
                Every meal, every cocktail, and virtually every on-site experience is included at Grand
                Sirenis Riviera Maya Resort &amp; Spa.
              </span>{' '}
              From eight themed à la carte restaurants and two buffets to live theater, watersports, and
              nature trails. Your vacation belongs to you, not to a running tab. Travel anytime in the
              next 12 months (subject to availability).
            </p>
            <Button className="w-full" asCta>RESERVE NOW</Button>
          </div>
          <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
            <img
              src="all-inclusive/hero-heroback.png"
              alt="All-Inclusive Escape"
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
                src="all-inclusive/drinks.png"
                alt="Unlimited Dining and Drinks"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unlimited Dining and Drinks
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Eight themed à la carte restaurants and two buffets mean a new flavor every night, all
                  included.
                </span>{' '}
                Premium cocktails, domestic and international spirits, coffee shops, and bars across the
                resort keep you refreshed from breakfast through late night, with Beyond Flavors as a
                signature culinary highlight.
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
                src="all-inclusive/resorts-beaches.png"
                alt="Resort and Beach Access Included"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Resort and Beach Access Included
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Multiple pools, a lazy river, two miles of beach, snorkeling, fishing, and non-motorized
                  watersports are all part of the package.
                </span>{' '}
                Water aerobics, nature trails, the turtle sanctuary, and an on-site Mayan ruin add
                adventure between lazy afternoons in the sun.
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
                src="all-inclusive/service.png"
                alt="Comfort, Service, and Added Ease"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comfort, Service, and Added Ease
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  24-hour reception and housekeeping, room service, and complimentary Wi-Fi keep everything
                  effortless.
                </span>{' '}
                You are about an hour from Cancún International Airport, perfectly between Playa del Carmen
                and Tulum, so the best of the Riviera Maya stays within easy reach.
              </p>
              <Button className="w-full" asCta>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <InteriorFooter />
    </>
  );
}
