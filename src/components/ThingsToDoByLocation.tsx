import { useRef } from 'react';
import { Button } from './Button';
import {
  HILTON_CANCUN_NAME,
  HILTON_TULUM_NAME,
  HILTON_VALLARTA_NAME,
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
        // Placeholder: Tulum aerial — swap for Sian Ka'an mangroves photo.
        image: 'images/sliding-gallery-hero/Aerial_Hilton_Tulum_072679_2.png',
      },
      {
        title: 'Akumal Beach · Swim with Sea Turtles',
        blurb:
          'The "Place of Turtles" lives up to its name — a calm, shallow bay 25 minutes north of Tulum where green sea turtles graze the seagrass year-round.',
        // Placeholder: Tulum-area beach feel — swap for Akumal turtle photo.
        image: 'images/things-to-do/playadelcarmenday.png',
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
        image: 'images/home/PuertoVallarta.png',
      },
      {
        title: 'Sayulita',
        blurb:
          'A bohemian surf town 45 minutes north — pastel storefronts, papel-picado-strung streets, beginner-friendly waves, and some of Riviera Nayarit\'s best taquerías.',
        // Placeholder: PV aerial — swap for Sayulita village / surf photo.
        image: 'images/sliding-gallery-hero/HHR_PUERTOVALLARTA_COCOMAR_SH0286.png',
      },
      {
        title: 'Marietas Islands · Hidden Beach',
        blurb:
          'A UNESCO Biosphere Reserve in Banderas Bay — boat trips snorkel the volcanic islets and (when permits allow) reach Playa del Amor through the famous tunnel opening.',
        // Placeholder: PV pool aerial — swap for Marietas Islands photo.
        image: 'images/sliding-gallery-hero/HHR_PUERTOVALLARTA_POOL_SH2027.png',
      },
      {
        title: 'Yelapa',
        blurb:
          "A boat-only fishing village an hour south by panga — pie-on-the-beach vendors, palapa restaurants, and a 30-minute jungle hike up to a tiered waterfall.",
        // Placeholder: PV resort photo — swap for Yelapa village / waterfall photo.
        image: 'images/sliding-gallery-hero/HHR_PUERTOVALLARTA_LALUCE_SH0400.png',
      },
      {
        title: 'Vallarta Botanical Gardens',
        blurb:
          'A 64-acre living museum 30 minutes south of downtown — orchid conservatories, Sierra Madre overlooks, jungle trails to a swimming river, and the Hacienda de Oro restaurant.',
        // Placeholder: PV spa/resort photo — swap for Botanical Gardens photo.
        image: 'images/sliding-gallery-hero/HHR_PUERTOVALLARTA_SPA_SH0172.png',
      },
      {
        title: 'Whale Watching in Banderas Bay',
        blurb:
          'Each December–March, ~1,000 humpbacks migrate into Banderas Bay to calve — half-day boat tours leave from Marina Vallarta with biologists narrating the encounters.',
        // Placeholder: PV aerial — swap for whale-watching photo.
        image: 'images/home/PuertoVallarta.png',
      },
    ],
  },
];

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

  const scrollCards = (index: number, direction: 'prev' | 'next') => {
    const scroller = scrollerRefs.current[index];
    if (!scroller) return;

    const amount = Math.round(scroller.clientWidth * 0.82);
    scroller.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-white px-4 pb-fluid-8 pt-fluid-8 md:px-6 lg:px-10">
      <div className="mx-auto max-w-content">
        <header className="mb-fluid-6">
          <h2 className="text-fluid-2xl font-bold tracking-tight text-slate-900 md:text-fluid-3xl">
            Adventures Beyond the Resort
          </h2>
          <p className="mt-3 max-w-2xl text-fluid-base leading-relaxed text-gray-700">
            Each destination opens onto unforgettable experiences curated for your stay.
          </p>
        </header>

        <div className="flex flex-col gap-fluid-6">
          {LOCATIONS.map((location, index) => (
            <div key={location.name}>
              <div className="mb-fluid-3 flex items-end justify-between gap-4">
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-fluid-xs font-semibold uppercase tracking-[0.18em] text-plum">
                    {location.region}
                  </span>
                  <h3 className="text-balance text-fluid-xl font-semibold leading-tight text-slate-900 md:text-fluid-2xl">
                    {location.name}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    aria-label={`Scroll ${location.region} activities left`}
                    onClick={() => scrollCards(index, 'prev')}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-plum/30 text-plum transition-colors hover:border-plum/60 hover:bg-plum/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/40"
                  >
                    <span aria-hidden>&larr;</span>
                  </button>
                  <button
                    type="button"
                    aria-label={`Scroll ${location.region} activities right`}
                    onClick={() => scrollCards(index, 'next')}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-plum/30 text-plum transition-colors hover:border-plum/60 hover:bg-plum/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/40"
                  >
                    <span aria-hidden>&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Manual horizontal scroller with snap. Scrollbar is hidden
                  on every engine. Negative outer margins + matching padding
                  let the first card run flush with the page edge while later
                  cards spill into the gutter. */}
              <div className="relative">
                <div
                  ref={(el) => {
                    scrollerRefs.current[index] = el;
                  }}
                  className="overflow-x-auto px-1 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  <ul className="flex snap-x snap-mandatory scroll-smooth gap-4 md:gap-5">
                    {location.activities.map((activity) => (
                      <li
                        key={activity.title}
                        className="w-[260px] shrink-0 snap-start sm:w-[280px] md:w-[320px] lg:w-[340px]"
                      >
                        <ActivityCard activity={activity} />
                      </li>
                    ))}
                  </ul>
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
    </section>
  );
}
