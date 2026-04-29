import {
  HeroVariant,
  SubNav,
  Gallery,
  AboutPackage,
  HotelOptions,
  OfferIntroSection,
  ParadiseSection,
  ThingsToDoByLocation,
  AmenitiesGrid,
  Testimonials,
} from '../components';
import { HERO_GALLERY_FILENAMES } from '../content/heroGalleryFilenames';

/** Under-hero strip: encode each path segment (filenames may contain spaces). */
const encodeImagePath = (src: string) =>
  src.split('/').map(encodeURIComponent).join('/');

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

const galleryImages = seededShuffle([...HERO_GALLERY_FILENAMES], 0x7f4ac0de).map(encodeImagePath);

export function HomePage() {
  return (
    <>
      <HeroVariant />
      <SubNav />
      <section id="hotel-video">
        <Gallery images={galleryImages} compact />
      </section>
      <section id="what-you-get">
        <AboutPackage />
        <HotelOptions />
        <OfferIntroSection />
        <ParadiseSection />
      </section>
      <section id="resort-details">
        <ThingsToDoByLocation />
        <div className="relative hidden md:block">
          <img
            className="w-full h-auto bg-white"
            src="images/home/interior-divider3.png"
            alt="Save Now Travel Later banner"
          />
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[50px] z-50 w-[40%] max-w-md"
            src="images/shared/tag.png"
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
          src="images/home/home-bttm.png"
          alt="Beach scene"
        />
      </div>
    </>
  );
}
