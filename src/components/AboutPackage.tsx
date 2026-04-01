import { Award, MapPin, Star, Wine, type LucideIcon } from 'lucide-react';
import { Button } from './Button';
import { CLUB_DISPLAY_NAME, RESORT_DISPLAY_NAME } from '../constants';

type PanelSpec = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Stacking on small screens: left column (1–3), then right (4–6). */
  mobileOrderClass: string;
  /** md+ only: inner dividers (vertical center + horizontals), no outer box. */
  borderMd: string;
  /** sm: bottom rule between stacked blocks. */
  borderMobile: string;
};

const packagePanels: PanelSpec[] = [
  {
    title: 'Accommodations:',
    description: `5 nights, Junior Suite Deluxe, all-inclusive at ${RESORT_DISPLAY_NAME}. Wi-Fi, safe, mini fridge, HD TV, A/C, and 24-hour room service.`,
    icon: Award,
    mobileOrderClass: 'max-md:order-2',
    borderMd: 'md:border-r md:border-b',
    borderMobile: 'border-b border-plum/15',
  },
  {
    title: 'Be Our Guest:',
    description: `90- to 120-minute resort preview for you and your guest to learn about ${CLUB_DISPLAY_NAME}. No obligation to buy; your trip time stays yours.`,
    icon: Star,
    mobileOrderClass: 'max-md:order-5',
    borderMd: 'md:border-b',
    borderMobile: 'border-b border-plum/15',
  },
  {
    title: 'Prime Location:',
    description:
      'Km 256.3 Cancún to Tulum highway: between Playa (~30 min) and Tulum (~20 min), ~1 hr from Cancún airport. Two miles of beach plus an on-site Mayan ruin.',
    icon: MapPin,
    mobileOrderClass: 'max-md:order-3',
    borderMd: 'md:border-r',
    borderMobile: 'border-b border-plum/15',
  },
  {
    title: 'All-Inclusive Privilege:',
    description:
      'Dining, drinks, and most on-resort fun included: 8 à la carte + 2 buffets, theater, pools, beach, and trails. No running tab.',
    icon: Wine,
    mobileOrderClass: 'max-md:order-6',
    borderMd: '',
    borderMobile: '',
  },
];

function PackagePanel({ spec }: { spec: PanelSpec }) {
  const Icon = spec.icon;
  const iconTone = Icon === Star ? 'text-yellow' : 'text-sky';
  return (
    <article
      className={`flex h-full min-h-0 gap-3 border-plum/15 bg-white p-6 md:order-none md:gap-4 md:p-8 ${spec.mobileOrderClass} ${spec.borderMobile} ${spec.borderMd}`}
    >
      <Icon
        className={`mt-0.5 h-5 w-5 shrink-0 md:h-6 md:w-6 ${iconTone}`}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <h3 className="mb-3 font-bold text-gray-900 text-fluid-base md:mb-4 md:text-fluid-lg">
          {spec.title}
        </h3>
        <p className="text-gray-800 text-fluid-sm leading-relaxed">{spec.description}</p>
      </div>
    </article>
  );
}

export function AboutPackage() {
  const [accommodations, beOurGuest, primeLocation, allInclusive] = packagePanels;

  return (
    <section className="bg-white py-fluid-8 px-4 md:px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="mb-fluid-6 text-center">
          <h2 className="text-slate-800 text-fluid-2xl font-bold tracking-tight md:text-fluid-3xl">
            About This Package
          </h2>
        </div>

        {/*
          Rounded shell, no outer stroke: only inner rules (vertical midline + horizontals) = cross/grid.
          md+: 2 equal columns; body rows 1fr / 1fr for matched height.
        */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2 md:grid-rows-[auto_minmax(0,1fr)_minmax(0,1fr)]">
          <header className="flex min-h-[3.25rem] items-center justify-center border-b border-plum/15 bg-plum px-4 py-3 max-md:order-1 md:order-none md:border-r md:border-b md:px-5">
            <h3 className="text-center text-fluid-lg font-bold text-white md:text-fluid-xl">
              What you get
            </h3>
          </header>

          <header className="flex min-h-[3.25rem] items-center justify-center border-b border-plum/15 bg-purple px-4 py-3 max-md:order-4 md:order-none md:border-b md:px-5">
            <h3 className="text-center text-fluid-lg font-bold text-white md:text-fluid-xl">
              Why you get it
            </h3>
          </header>

          <PackagePanel spec={accommodations} />
          <PackagePanel spec={beOurGuest} />
          <PackagePanel spec={primeLocation} />
          <PackagePanel spec={allInclusive} />
        </div>

        <div className="mt-fluid-8">
          <Button className="w-full" asCta>
            Reserve Now
          </Button>
        </div>
      </div>
    </section>
  );
}
