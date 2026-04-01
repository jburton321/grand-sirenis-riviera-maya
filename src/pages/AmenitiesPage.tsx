import { Button } from '../components/Button';
import { Gallery } from '../components/Gallery';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';
import { RESORT_HERO_BACKGROUND_IMAGE } from '../constants';
import { AMENITIES_HOME_GRID_ITEMS } from '../content/amenityLists';
import { AMENITY_BLOCKS, ON_SITE_AMENITIES_INTRO, ON_SITE_AMENITIES_TITLE } from '../content/interiorCopy';
import { interiorStripeClass } from '../utils/interiorStripes';

/** Same `images/` set + labels as home `AmenitiesGrid` bento. */
const amenitiesGallery = AMENITIES_HOME_GRID_ITEMS.map((item) => ({
  src: item.src,
  label: item.label,
}));

const AMENITY_IMAGES = [
  'images/grand-sirenis-riviera-maya-resort-slide1125-jpg-1e13f6b58e1a.webp',
  'images/spa25285-jpg-971a5bc2a15364a7b345cbc2f0549ed9.webp',
  'images/buffetbayou7591-jpg-a09c4018c8a74611962a7d5ff0d1d43e.webp',
  'images/mexicanshow03882.jpg',
  'images/snorkel1471-jpg-4ae1ccc4e004c727937840a840f2146f.webp',
] as const;

export function AmenitiesPage() {
  return (
    <>
      <InteriorHero
        backgroundImage={RESORT_HERO_BACKGROUND_IMAGE}
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
              RESERVE NOW
            </Button>
          </div>
          <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
            <img
              src={RESORT_HERO_BACKGROUND_IMAGE}
              alt={ON_SITE_AMENITIES_TITLE}
              className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </InteriorHero>

      {AMENITY_BLOCKS.map((block, index) => {
        const image = AMENITY_IMAGES[index];
        const reverse = index % 2 === 1;
        const bg = interiorStripeClass(index);

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

      <section className={`py-12 md:py-16 lg:py-20 ${interiorStripeClass(AMENITY_BLOCKS.length)}`}>
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <Gallery images={amenitiesGallery} className="bg-transparent" />
            <div className="px-6 pb-10">
              <Button className="w-full" asCta>
                Reserve Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <InteriorFooter />
    </>
  );
}
