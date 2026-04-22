import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';
import { AMENITIES_HERO_BACKGROUND_IMAGE, PRIMARY_CTA_LABEL } from '../constants';
import { AMENITY_BLOCKS, ON_SITE_AMENITIES_INTRO, ON_SITE_AMENITIES_TITLE } from '../content/interiorCopy';
import { interiorStripeClass } from '../utils/interiorStripes';

const AMENITY_IMAGES = [
  'images/amenities/sec1-luxury-all-inclusive.jpg',
  'images/amenities/sec2-gourmet-dining.jpg',
  'images/amenities/sec3-pools-beach-oceanfront.png',
  'images/amenities/sec4-wellness-fitness.jpg',
  'images/amenities/sec5-nightly-entertainment.jpg',
] as const;

export function AmenitiesPage() {
  return (
    <>
      <InteriorHero
        backgroundImage={AMENITIES_HERO_BACKGROUND_IMAGE}
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
              {ON_SITE_AMENITIES_TITLE}
            </h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
              {ON_SITE_AMENITIES_INTRO}
            </p>
            <Button className="w-full" asCta>
              {PRIMARY_CTA_LABEL}
            </Button>
          </div>
          <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
            <img
              src={AMENITIES_HERO_BACKGROUND_IMAGE}
              alt={ON_SITE_AMENITIES_TITLE}
              className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </InteriorHero>

      {AMENITY_BLOCKS.map((rawBlock, index) => {
        const block = rawBlock as { title: string; body: string; subtitle?: string };
        const image = AMENITY_IMAGES[index];
        const reverse = index % 2 === 1;
        const bg = interiorStripeClass(index);
        const headingAlt = block.subtitle
          ? `${block.title} ${block.subtitle}`
          : block.title;

        return (
          <section
            key={block.title}
            className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${bg}`}
          >
            <div className="max-w-content mx-auto">
              <div
                className={`flex flex-col gap-8 lg:gap-12 items-center ${
                  reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={headingAlt}
                    className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    <span className="block">{block.title}</span>
                    {block.subtitle ? (
                      <span className="mt-1 block sm:mt-2">{block.subtitle}</span>
                    ) : null}
                  </h2>
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">{block.body}</p>
                  <Button className="w-full" asCta>
                    {PRIMARY_CTA_LABEL}
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
