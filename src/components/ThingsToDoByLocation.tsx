import { useMemo, useRef, useState } from 'react';
import { Button } from './Button';
import { Lightbox, type LightboxImageItem } from './Lightbox';
import styles from './ThingsToDoByLocationCard.module.css';
import {
  HILTON_CANCUN_NAME,
  HILTON_TULUM_NAME,
  HILTON_VALLARTA_NAME,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_COMPLETE,
  PRIMARY_CTA_LABEL,
} from '../constants';

type Activity = {
  title: string;
  blurb: string;
  image: string;
};

type Location = {
  /** Full canonical Hilton resort name — used as the section heading. */
  name: string;
  /** Short eyebrow with city + coastal region (e.g. "Cancún · Caribbean Coast"). */
  region: string;
  activities: Activity[];
};

/**
 * Six unique activities per destination (no overlaps between locations).
 * Imagery uses what we have today; items without dedicated photography
 * fall back to the closest available aerial or section background — flagged
 * inline so they're easy to swap when real activity photography arrives.
 */
const LOCATIONS: Location[] = [
  {
    name: HILTON_CANCUN_NAME,
    region: 'Cancún · Caribbean Coast',
    activities: [
      {
        title: 'Isla Mujeres',
        blurb:
          'A 30-minute ferry from Puerto Juárez — Playa Norte\'s clear, knee-deep turquoise water, plus golf-cart loops past the southern cliffs and the Tortugranja sea-turtle sanctuary.',
        image: 'images/home/Isla-Mujeres.png',
      },
      {
        title: 'Xcaret Park',
        blurb:
          'A full-day eco-archaeological park — underground river floats, jungle trails, lagoon snorkeling, and the nightly "México Espectacular" cultural show.',
        image: 'images/things-to-do/xcaret.png',
      },
      {
        title: 'MUSA Underwater Museum',
        blurb:
          'Snorkel or dive over 500+ life-size sculptures resting on the seafloor between Punta Nizuc and Isla Mujeres — one of the largest underwater art exhibits in the world.',
        image: 'images/things-to-do/musa-underwater-museum.png',
      },
      {
        title: 'Cenote Day Trip',
        blurb:
          "Day excursions reach Cenote Dos Ojos and the Verde Lucero / Boca del Puma circuit — limestone caves, freshwater swims, and zipline runs through the jungle west of the Hotel Zone.",
        image: 'images/things-to-do/cenotes.png',
      },
      {
        title: 'Coco Bongo & Hotel Zone Nightlife',
        blurb:
          'Cancún\'s legendary Coco Bongo headlines the Hotel Zone after dark — Cirque-style aerial acts, live tribute performances, and open-bar packages right on Boulevard Kukulcán.',
        image: 'images/things-to-do/coco-bongo-nightlife.png',
      },
      {
        title: 'Playa Delfines & the CANCÚN Sign',
        blurb:
          'The Hotel Zone\'s most photographed lookout — turquoise Caribbean water, the giant rainbow CANCÚN letters, and the calmest sand stretches at the southern end of Boulevard Kukulcán.',
        image: 'images/things-to-do/playa-delfines-cancun-sign.png',
      },
    ],
  },
  {
    name: HILTON_TULUM_NAME,
    region: 'Tulum · Riviera Maya',
    activities: [
      {
        title: 'Tulum Ruins',
        blurb:
          'The only Mayan archaeological site set on a Caribbean cliff — explore El Castillo and the Temple of the Frescoes, then descend the wooden stairs to a swimming beach below.',
        image: 'images/things-to-do/tulumruins.png',
      },
      {
        title: 'Gran Cenote & Cenote Calavera',
        blurb:
          'Tulum\'s most iconic freshwater swims — Gran Cenote\'s turtle-filled pools and the moody jump-platforms of Cenote Calavera, both within 10 minutes of town.',
        image: 'images/things-to-do/cenotes.png',
      },
      {
        title: 'Chichén Itzá',
        blurb:
          "A UNESCO World Heritage Site and one of the New Seven Wonders — El Castillo, the Great Ball Court, and the Sacred Cenote, ~2 hours' drive west of Tulum.",
        image: 'images/things-to-do/chichenitza.png',
      },
      {
        title: 'Cobá Ruins',
        blurb:
          'A vast jungle-shrouded Mayan city 45 minutes northwest — rent a bike or pedicab to ride between the ball court, stelae, and Nohoch Mul, the Yucatán\'s tallest temple complex.',
        image: 'images/things-to-do/coba-ruins.png',
      },
      {
        title: 'Sian Ka\'an Biosphere Reserve',
        blurb:
          "A UNESCO-protected wetland just south of town — boat through mangrove channels, drift the Mayan canal, and watch for dolphins, manatees, and 300+ bird species.",
        image: 'images/things-to-do/sian-kaan-biosphere-reserve.png',
      },
      {
        title: 'Akumal Beach · Swim with Sea Turtles',
        blurb:
          'The "Place of Turtles" lives up to its name — a calm, shallow bay 25 minutes north of Tulum where green sea turtles graze the seagrass year-round.',
        image: 'images/things-to-do/akumal-sea-turtles.png',
      },
    ],
  },
  {
    name: HILTON_VALLARTA_NAME,
    region: 'Puerto Vallarta · Pacific Coast',
    activities: [
      {
        title: 'The Malecón & Old Town',
        blurb:
          'A mile-long oceanfront promenade lined with Sergio Bustamante and Alejandro Colunga sculptures, plus the cobblestone streets of Zona Romántica and Iglesia de Guadalupe.',
        image: 'images/things-to-do/malecon-old-town.png',
      },
      {
        title: 'Sayulita',
        blurb:
          'A bohemian surf town 45 minutes north — pastel storefronts, papel-picado-strung streets, beginner-friendly waves, and some of Riviera Nayarit\'s best taquerías.',
        image: 'images/things-to-do/sayulita.png',
      },
      {
        title: 'Marietas Islands · Hidden Beach',
        blurb:
          'A UNESCO Biosphere Reserve in Banderas Bay — boat trips snorkel the volcanic islets and (when permits allow) reach Playa del Amor through the famous tunnel opening.',
        image: 'images/things-to-do/marietas-hidden-beach.png',
      },
      {
        title: 'Yelapa',
        blurb:
          "A boat-only fishing village an hour south by panga — pie-on-the-beach vendors, palapa restaurants, and a 30-minute jungle hike up to a tiered waterfall.",
        image: 'images/things-to-do/yelapa.png',
      },
      {
        title: 'Vallarta Botanical Gardens',
        blurb:
          'A 64-acre living museum 30 minutes south of downtown — orchid conservatories, Sierra Madre overlooks, jungle trails to a swimming river, and the Hacienda de Oro restaurant.',
        image: 'images/things-to-do/vallarta-botanical-gardens.png',
      },
      {
        title: 'Whale Watching in Banderas Bay',
        blurb:
          'Each December–March, ~1,000 humpbacks migrate into Banderas Bay to calve — half-day boat tours leave from Marina Vallarta with biologists narrating the encounters.',
        image: 'images/things-to-do/whale-watching-banderas-bay.png',
      },
    ],
  },
];

const LOCATION_RESORT_BLURBS: Record<Location['name'], string> = {
  [HILTON_CANCUN_NAME]:
    "Set along Cancun's Caribbean coast, this all-inclusive stay pairs mangrove-backed beachfront calm with bright, modern Deluxe Room comfort.",
  [HILTON_TULUM_NAME]:
    'Tulum\'s Riviera Maya setting blends quiet, nature-forward luxury with quick access to cenotes, archaeology routes, and preserved coastal landscapes.',
  [HILTON_VALLARTA_NAME]:
    "On Puerto Vallarta's Pacific coast, expect golden-hour ocean views, a relaxed seaside rhythm, and easy reach to both nature excursions and Old Town culture.",
};

const LOCATION_HOTEL_CARD_META: Record<
  Location['name'],
  { image: string; locationLine: string; suiteLine: string }
> = {
  [HILTON_CANCUN_NAME]: {
    image: 'images/home/Cancun.png',
    locationLine: 'Cancún, Quintana Roo, Mexico',
    suiteLine: 'Deluxe Room, ocean-forward resort setting',
  },
  [HILTON_TULUM_NAME]: {
    image: 'images/home/Tullum.png',
    locationLine: 'Tulum, Riviera Maya, Mexico',
    suiteLine: 'Deluxe Room, nature-forward coastal retreat',
  },
  [HILTON_VALLARTA_NAME]: {
    image: 'images/home/PuertoVallarta.png',
    locationLine: 'Puerto Vallarta, Jalisco, Mexico',
    suiteLine: 'Deluxe Room, Pacific coast ocean views',
  },
};

function ResortHeaderCard({
  location,
  onPrev,
  onNext,
}: {
  location: Location;
  onPrev: () => void;
  onNext: () => void;
}) {
  const meta = LOCATION_HOTEL_CARD_META[location.name];

  return (
    <div className={styles.resortCard}>
      <div
        className={styles.resortCardImage}
        style={{ backgroundImage: `url(${meta.image})` }}
        aria-hidden
      />

      <div className={styles.resortCardBody}>
        <div className={styles.resortCardText}>
          <div className={styles.resortCardHeader}>
            <span className={styles.resortCardName}>{location.name}</span>
            <span className={styles.resortCardBadge}>ALL-INCLUSIVE</span>
          </div>
          <div className={styles.resortCardLocation}>{meta.locationLine}</div>
          <p className={styles.resortCardDesc}>{LOCATION_RESORT_BLURBS[location.name]}</p>
        </div>

        <div className={styles.resortCardPricing}>
          <div className={styles.resortCardTripInfo}>{OFFER_STAY_LABEL} · 2 adults</div>
          <div className={styles.resortCardPriceBlock}>
            <span className={styles.resortCardPriceNow}>{OFFER_TOTAL_AMOUNT}</span>
            <div className={styles.resortCardPriceMetaLine}>
              <span className={styles.resortCardPriceTotal}>{OFFER_TOTAL_COMPLETE}</span>
            </div>
          </div>
          <div className={styles.resortCardNav}>
            <button
              type="button"
              aria-label={`Scroll ${location.region} activities left`}
              onClick={onPrev}
              className={styles.resortCardArrow}
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label={`Scroll ${location.region} activities right`}
              onClick={onNext}
              className={styles.resortCardArrow}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="group h-full overflow-hidden rounded-xl bg-white ring-1 ring-plum/15 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:ring-plum/25">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1 p-4 md:p-5">
        <h4 className="text-fluid-base font-semibold leading-tight text-slate-900">
          {activity.title}
        </h4>
        <p className="text-fluid-sm leading-snug text-gray-700">
          {activity.blurb}
        </p>
      </div>
    </article>
  );
}

export function ThingsToDoByLocation() {
  const scrollerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [openLocationIndex, setOpenLocationIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const scrollCards = (index: number, direction: 'prev' | 'next') => {
    const scroller = scrollerRefs.current[index];
    if (!scroller) return;

    const amount = Math.round(scroller.clientWidth * 0.82);
    scroller.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  const openActivityLightbox = (locationIndex: number, activityIndex: number) => {
    setOpenLocationIndex(locationIndex);
    setLightboxIndex(activityIndex);
  };

  const closeActivityLightbox = () => {
    setOpenLocationIndex(null);
    setLightboxIndex(0);
  };

  const lightboxItems: LightboxImageItem[] = useMemo(() => {
    if (openLocationIndex == null) return [];
    return LOCATIONS[openLocationIndex].activities.map((activity) => ({
      src: activity.image,
      label: activity.title,
      description: activity.blurb,
    }));
  }, [openLocationIndex]);

  return (
    <section className="bg-white px-4 pb-fluid-8 pt-fluid-8 md:px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <header className="mb-fluid-6 text-center">
          <h2 className="text-fluid-2xl font-bold tracking-tight text-slate-900 md:text-fluid-3xl">
            Adventures Beyond the Resort
          </h2>
          <p className="mt-3 w-full text-fluid-base leading-relaxed text-gray-700">
            Each destination opens onto unforgettable experiences curated for your stay.
          </p>
        </header>

        <div className="flex flex-col gap-fluid-6">
          {LOCATIONS.map((location, index) => (
            <div key={location.name}>
              <div className={styles.resortSectionGroup}>
                <div className={styles.resortHeaderShell}>
                  <ResortHeaderCard
                    location={location}
                    onPrev={() => scrollCards(index, 'prev')}
                    onNext={() => scrollCards(index, 'next')}
                  />
                </div>

                {/* Manual horizontal scroller with snap. Scrollbar is hidden
                    on every engine. */}
                <div className={styles.resortActivitiesShell}>
                  <div className="relative">
                    <div
                      ref={(el) => {
                        scrollerRefs.current[index] = el;
                      }}
                      className="overflow-x-auto px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                      <ul className="flex snap-x snap-mandatory scroll-smooth gap-4 md:gap-5">
                        {location.activities.map((activity, activityIndex) => (
                          <li
                            key={activity.title}
                            className="w-[260px] shrink-0 snap-start sm:w-[280px] md:w-[320px] lg:w-[340px]"
                          >
                            <button
                              type="button"
                              onClick={() => openActivityLightbox(index, activityIndex)}
                              aria-label={`Open details for ${activity.title}`}
                              className="h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-plum/40 rounded-xl"
                            >
                              <ActivityCard activity={activity} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-fluid-8">
          <Button className="w-full" asCta>
            {PRIMARY_CTA_LABEL}
          </Button>
        </div>
      </div>

      <Lightbox
        isOpen={openLocationIndex != null}
        onClose={closeActivityLightbox}
        images={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
        title={openLocationIndex != null ? LOCATIONS[openLocationIndex].name : 'Activity details'}
        videoCta={
          <Button className="w-full sm:w-auto" asCta>
            RESERVE
          </Button>
        }
      />
    </section>
  );
}
