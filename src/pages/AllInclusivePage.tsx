import { Button } from '../components/Button';
import { AccommodationsPriceBar } from '../components/AccommodationsPriceBar';
import { InteriorMobilePriceBar } from '../components/InteriorMobilePriceBar';
import { InteriorFooter } from '../components/InteriorFooter';
import { InteriorHero } from '../components/InteriorHero';
import { AMENITY_BLOCKS, ON_SITE_AMENITIES_INTRO } from '../content/interiorCopy';
import { interiorStripeClass } from '../utils/interiorStripes';

const ALL_INCLUSIVE_SECTIONS = [
  {
    title: 'Dining and nightly entertainment',
    image: 'all-inclusive/drinks.png',
    alt: 'Dining and nightly entertainment',
    paragraphs: [AMENITY_BLOCKS[2].body, AMENITY_BLOCKS[3].body],
  },
  {
    title: 'Pools, beach, and adventure',
    image: 'all-inclusive/resorts-beaches.png',
    alt: 'Pools, beach, and adventure',
    paragraphs: [AMENITY_BLOCKS[0].body, AMENITY_BLOCKS[4].body],
  },
  {
    title: 'Award-winning Spa Grand Sirenis',
    image: 'all-inclusive/service.png',
    alt: 'Spa Grand Sirenis',
    paragraphs: [AMENITY_BLOCKS[1].body],
  },
] as const;

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
              All-inclusive experience
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
              src="all-inclusive/hero-heroback.png"
              alt="All-inclusive experience"
              className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </InteriorHero>

      {ALL_INCLUSIVE_SECTIONS.map((section, index) => {
        const reverse = index % 2 === 1;
        const bg = interiorStripeClass(index);

        return (
          <section key={section.title} className={`py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${bg}`}>
            <div className="max-w-content mx-auto">
              <div
                className={`flex flex-col gap-8 lg:gap-12 items-center ${
                  reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className="w-full lg:w-1/2 group overflow-hidden rounded-2xl">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-auto shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
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
