import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';
import { RESORT_DISPLAY_NAME } from '../constants';
import { THINGS_TO_DO_BLOCKS, THINGS_TO_DO_TITLE, thingsToDoIntro } from '../content/interiorCopy';
import { interiorStripeClass } from '../utils/interiorStripes';

const THINGS_IMAGES = [
  'images/tulumruins.png',
  'images/cenotes.png',
  'images/chichenitza.png',
  'images/xcaret.png',
  'images/things-to-do-photo-10.png',
  'images/playadelcarmenday.png',
] as const;

export function ThingsToDoPage() {
  return (
    <>
      <InteriorHero
        backgroundImage="images/hero_herobackground.png"
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
              {THINGS_TO_DO_TITLE}
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              {thingsToDoIntro(RESORT_DISPLAY_NAME)}
            </p>
            <Button className="w-full" asCta>
              RESERVE NOW
            </Button>
          </div>
          <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
            <img
              src="images/things-to-do-photo-10.png"
              alt={THINGS_TO_DO_TITLE}
              className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </InteriorHero>

      {THINGS_TO_DO_BLOCKS.map((block, index) => {
        const image = THINGS_IMAGES[index];
        const reverse = index % 2 === 1;
        const bg = interiorStripeClass(index);

        return (
          <section key={block.title} className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${bg}`}>
            <div className="max-w-content mx-auto">
              <div
                className={`flex flex-col gap-8 lg:gap-12 items-center ${
                  reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={block.title}
                    className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {block.title}
                  </h2>
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">{block.body}</p>
                  <Button className="w-full" asCta>
                    RESERVE NOW
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <InteriorFooter />
    </>
  );
}
