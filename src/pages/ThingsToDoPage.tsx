import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';

export function ThingsToDoPage() {
  return (
    <>
      <InteriorHero
        backgroundImage="things-to-do/hero_herobackground.png"
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
              Explore Like a Local
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              <span className="font-semibold">
                ULC Grand Sirenis Riviera Maya is your gateway to the Riviera Maya's best!
              </span>{' '}
              You're perfectly positioned to explore epic history, stunning nature, and vibrant local life. Feel the ancient energy of the Mayan civilization beneath your feet.
            </p>
            <Button className="w-full" asCta>RESERVE NOW</Button>
          </div>
          <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
            <img
              src="things-to-do/things-to-do-photo-10.png"
              alt="Explore Like a Local"
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
                src="/things-to-do/downtown.png"
                alt="Downtown Playa del Carmen Nightlife"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Downtown Playa del Carmen Nightlife
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  The famous Quinta Avenida (5th Avenue) is the Riviera Maya's evening hot spot, located just a quick, easy transfer from the resort.
                </span>{' '}
                This vibrant, pedestrian street is the place to be for high-energy entertainment, featuring everything from bustling dance clubs to sophisticated rooftop lounges.
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
                src="/things-to-do/mixology.png"
                alt="Specialty Tequila and Mixology Scene"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Specialty Tequila & Mixology Scene
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Beyond the main clubs in Playa del Carmen, you can experience authentic Mexican mixology. Seek out specialized Tequilerias and craft cocktail bars that focus on premium spirits like Tequila and Mezcal.
                </span>{' '}
                Expert bartenders use unique, local ingredients to elevate your tasting experience.
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
                src="/things-to-do/chichenitza.png"
                alt="Chichen Itza"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Chichen Itza:<br />New Wonder of the World
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  This is the ultimate bucket-list must-do and an unforgettable cultural journey.
                </span>{' '}
                Visit one of the New Seven Wonders of the World to marvel at the sheer scale and architectural genius of El Castillo pyramid. This UNESCO World Heritage Site offers deep historical insight into the ancient Mayan civilization.
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
                src="/things-to-do/tulumruins.png"
                alt="Tulum Ruins"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tulum Ruins
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Capture the ultimate, postcard-perfect photo opportunity at the Tulum Ruins.
                </span>{' '}
                These iconic Mayan structures are dramatically set atop a 12-meter (39 ft) cliff, offering unmatched, breathtaking views of the turquoise Caribbean Sea. It's a fascinating blend of history and stunning natural scenery.
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
                src="/things-to-do/cenotes.png"
                alt="Cenotes"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cenotes: The Sacred Natural Sinkholes
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Swimming in a cenote a sacred natural sinkhole is a truly one-of-a-kind, refreshing experience and a journey into the Mayan underworld.
                </span>{' '}
                These natural pools are filled with cool, crystal-clear water, perfect for a relaxing float in an environment surrounded by ancient formations.
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
                src="/things-to-do/xcaret.png"
                alt="Xcaret Eco-Archaeological Park"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Xcaret Eco-Archaeological Park: Adventure
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  Spend a full day exploring a spectacular mix of nature, history, and pure fun.
                </span>{' '}
                At Xcaret, you can glide through cool underground rivers, wander jungle trails, and snorkel in natural lagoons. The park provides an all-day adventure experience unlike any other.
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
                src="/things-to-do/playadelcarmenday.png"
                alt="Playa del Carmen Day Scene"
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Playa del Carmen Day Scene (5th Ave)
              </h2>
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold">
                  The famous 5th Avenue in Playa del Carmen isn't just for nightlife.
                </span>{' '}
                During the day, it's a vibrant pedestrian street perfect for shopping, grabbing authentic handmade souvenirs, and finding unique cafes and bars to relax before the evening action starts.
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
