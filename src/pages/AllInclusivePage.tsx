import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';
import { useRouter } from '../context/RouterContext';

export function AllInclusivePage() {
  const { navigateTo } = useRouter();

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
                Hyatt Zilara Riviera Maya offers an adults-only, all-inclusive experience designed to keep everything simple and connected.
              </span>{' '}
              Dining, drinks, service, and resort access are all part of your stay, so plans stay flexible and time stays yours. It's a straightforward way to enjoy the setting, the amenities, and the pace of the resort without added steps.
            </p>
            <Button className="w-full" onClick={() => navigateTo('thank-you')}>RESERVE NOW</Button>
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
                  Every stay includes unlimited access to gourmet a la carte restaurants with no reservations required.
                </span>{' '}
                Enjoy a variety of global flavors alongside premium cocktails and a full selection of domestic and international spirits. Cafe options and bars across the resort make it easy to grab coffee, desserts, or drinks throughout the day and evening.
              </p>
              <Button className="w-full" onClick={() => navigateTo('thank-you')}>RESERVE NOW</Button>
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
                  Guests enjoy full access to pools, swim-up bar, beachfront spaces, fitness center, tennis court, and non-motorized water sports.
                </span>{' '}
                Daytime activities and evening entertainment are part of the experience, offering options to stay active or enjoy the resort atmosphere at your own pace.
              </p>
              <Button className="w-full" onClick={() => navigateTo('thank-you')}>RESERVE NOW</Button>
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
                  Your stay includes 24-hour room service, complimentary Wi-Fi, and attentive service throughout the resort.
                </span>{' '}
                Select room categories offer enhanced service options, and private airport transportation is available as part of select packages, helping the experience feel smooth right from arrival.
              </p>
              <Button className="w-full" onClick={() => navigateTo('thank-you')}>RESERVE NOW</Button>
            </div>
          </div>
        </div>
      </section>

      <InteriorFooter />
    </>
  );
}
