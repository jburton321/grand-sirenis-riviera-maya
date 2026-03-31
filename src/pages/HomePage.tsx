import {
  Hero,
  HeroBlossomOverlay,
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

const galleryImages = [
  'home/resort-photo-10.png',
  'home/resort-photo-20.png',
  'home/resort-photo-30.png',
  'home/resort-photo-40.png',
  'home/resort-photo-50.png',
  'home/link-dialog-open-lightbox5.png',
  'home/link-dialog-open-lightbox6.png',
  'home/link-dialog-open-lightbox7.png',
];

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
      <section id="resort-video">
        <Gallery images={galleryImages} />
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[97px] z-50 w-[40%] max-w-md"
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
      <div style={{ backgroundColor: '#F2F4F6' }} className="text-center px-4 pt-12 pb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-5xl mx-auto leading-tight mb-8">
          Relax in Ultimate Luxury with Your Premium All-Inclusive Hyatt Zilara Experience Package
        </h2>
        <Button className="w-full max-w-2xl mx-auto block" asCta>
          RESERVE NOW
        </Button>
      </div>
      <div style={{ backgroundColor: '#F2F4F6' }} className="relative">
        <img
          className="relative z-0 block w-full h-auto"
          src="home/home-bttm.png"
          alt="Beach scene"
        />
        <HeroBlossomOverlay />
      </div>
    </>
  );
}
