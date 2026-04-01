import {
  Hero,
  SubNav,
  Gallery,
  AboutPackage,
  ParadiseSection,
  Amenities,
  AmenitiesGrid,
  Testimonials,
  MapSection,
  Button,
} from '../components';
import { HERO_GALLERY_FILENAMES } from '../content/heroGalleryFilenames';

/** Under-hero strip: paths match `public/img/hero-gallery/` (list synced by npm script). */
const heroGallery = (name: string) => `img/hero-gallery/${encodeURIComponent(name)}`;

/** Stable “random” order: same shuffle every build (change seed to reshuffle). */
function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const arr = [...items];
  let s = seed >>> 0;
  const rnd = () => {
    s = (1664525 * s + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const galleryImages = seededShuffle([...HERO_GALLERY_FILENAMES], 0x7f4ac0de).map(heroGallery);

const locationGalleryImages = [
  { src: 'things-to-do/playadelcarmenday.png', label: 'Playa del Carmen' },
  { src: 'things-to-do/downtown.png', label: 'Downtown Playa del Carmen' },
  { src: 'things-to-do/chichenitza.png', label: 'Chichen Itza' },
  { src: 'things-to-do/xcaret.png', label: 'Xcaret Park' },
  { src: 'things-to-do/tulumruins.png', label: 'Tulum Ruins' },
  { src: 'things-to-do/cenotes.png', label: 'Cenotes' },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <SubNav />
      <section id="hotel-video">
        <Gallery images={galleryImages} compact />
      </section>
      <section id="what-you-get">
        <AboutPackage />
        <ParadiseSection />
      </section>
      <section id="resort-details">
        <Amenities />
        <div className="relative hidden sm:block">
          <img
            className="w-full h-auto"
            src="home/banner.png"
            alt="Save Now Travel Later banner"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[44px] z-50 w-[40%] max-w-md"
            src="home/tag.png"
            alt="Special offer tag"
          />
        </div>
        <AmenitiesGrid />
      </section>
      <section id="guest-reviews">
        <Testimonials />
      </section>
      <section id="reserve-now">
        <MapSection>
          <Gallery images={locationGalleryImages} className="bg-transparent" />
        </MapSection>
      </section>
      <div style={{ backgroundColor: '#F9F5FF' }} className="px-4 pb-0 pt-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-5xl mx-auto leading-tight mb-8">
          This is your time, your club, your moment to belong.
        </h2>
        <Button className="w-full max-w-2xl mx-auto block" asCta>
          RESERVE NOW
        </Button>
      </div>
      <div style={{ backgroundColor: '#F9F5FF' }}>
        <img
          className="block w-full h-auto"
          src="home/home-bttm.png"
          alt="Beach scene"
        />
      </div>
    </>
  );
}
