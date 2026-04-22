import {
  Hero,
  SubNav,
  Gallery,
  AboutPackage,
  HotelOptions,
  ParadiseSection,
  Amenities,
  AmenitiesGrid,
  Testimonials,
} from '../components';
import { HERO_GALLERY_FILENAMES } from '../content/heroGalleryFilenames';

/** Under-hero strip: paths match `public/images/` (list synced by npm script).
 *  Names may include `/` for subfolders, so encode each segment independently. */
const heroGallery = (name: string) =>
  `images/${name.split('/').map(encodeURIComponent).join('/')}`;

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
        <HotelOptions />
        <ParadiseSection />
      </section>
      <section id="resort-details">
        <Amenities />
        <div className="relative hidden sm:block">
          <img
            className="w-full h-auto bg-white"
            src="images/banner.png"
            alt="Save Now Travel Later banner"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[44px] z-50 w-[40%] max-w-md"
            src="images/tag.png"
            alt="Special offer tag"
          />
        </div>
        <AmenitiesGrid />
      </section>
      <section id="guest-reviews">
        <Testimonials />
      </section>
      <div style={{ backgroundColor: '#FFFFFF' }} className="px-4 pt-[15px] pb-[15px] text-center align-middle">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-5xl mx-auto leading-tight mb-[70px] align-middle">
          Accept Today. Travel Later.
        </h2>
      </div>
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <img
          className="block w-full h-auto -mt-[35px] -mb-[35px]"
          src="images/home-bttm.png"
          alt="Beach scene"
        />
      </div>
    </>
  );
}
