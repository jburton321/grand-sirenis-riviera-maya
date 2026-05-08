import { Award, MapPin, Star, Wine, type LucideIcon } from 'lucide-react';
import { Button } from './Button';
import { PRIMARY_CTA_LABEL } from '../constants';

type PanelSpec = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Stacking on small screens: left column (1–3), then right (4–6). */
  mobileOrderClass: string;
  /**
   * md+: only inner dividers - vertical midline (border-e on left column) +
   * horizontal between row 1 and 2 of the 2×2 body (border-b on top row).
   * No outer box stroke; shell uses rounded-2xl overflow-hidden.
   */
  borderClass: string;
};

const packagePanels: PanelSpec[] = [
  {
    title: 'What You Receive:',
    description:
      "4 days and 3 nights in a Deluxe Room for two adults at your choice of three Hilton luxury all-inclusive resorts — Hilton Cancun, an All-Inclusive Resort; Hilton Tulum Riviera All-Inclusive Resort; or Hilton All-Inclusive Resort Vallarta Riviera. Only $500 today; the remaining $999 is due when you book your travel dates. Plus you'll get $300 in future travel credits to use towards resorts, cruises, hotels, and more!",
    icon: Award,
    mobileOrderClass: 'max-md:order-2',
    /** Top-left: vertical midline + horizontal mid of 2×2 */
    borderClass: 'border-b border-plum/15 md:border-e md:border-plum/15',
  },
  {
    title: 'Why You Get It:',
    description:
      'PHH Collection extends Paradise Retreat certificates to a limited group of invited guests each quarter. Your only commitment is a relaxed 90-minute Club Collection presentation with breakfast on day two.',
    icon: Star,
    mobileOrderClass: 'max-md:order-5',
    /** Top-right: horizontal mid only */
    borderClass: 'border-b border-plum/15',
  },
  {
    title: 'Your Destination:',
    description:
      "Choose Cancún's 100-acre Caribbean coastline, Tulum's adults-only sanctuary, or Vallarta Riviera's Pacific sunset setting. Your certificate grants access to Hilton Cancun, an All-Inclusive Resort; Hilton Tulum Riviera All-Inclusive Resort; or Hilton All-Inclusive Resort Vallarta Riviera.",
    icon: MapPin,
    mobileOrderClass: 'max-md:order-3',
    /** Bottom-left: vertical midline on md+ only; never a bottom rule (pairs with bottom-right). */
    borderClass: 'border-b-0 md:border-e md:border-plum/15',
  },
  {
    title: 'All-Inclusive Privilege:',
    description:
      'Unlimited gourmet à la carte dining, top-shelf spirits, and 24-hour in-room dining. Full resort amenities, beach access, pools, spa, and entertainment — all included.',
    icon: Wine,
    mobileOrderClass: 'max-md:order-6',
    /** Bottom-right: no borders - avoids a line along the bottom of the card. */
    borderClass: 'border-none',
  },
];

function PackagePanel({ spec }: { spec: PanelSpec }) {
  const Icon = spec.icon;
  const iconTone = Icon === Star ? 'text-yellow' : 'text-sky';
  return (
    <article
      className={`flex h-full min-h-0 gap-3 bg-white p-6 md:order-none md:gap-4 md:p-8 ${spec.mobileOrderClass} ${spec.borderClass}`}
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
            About Your Invitation
          </h2>
        </div>

        {/*
          Rounded shell: inner rules only on md+ = vertical midline (border-e) +
          horizontal between header row and body + between body row 1 and 2.
        */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white md:grid-cols-2 md:grid-rows-[auto_minmax(0,1fr)_minmax(0,1fr)]">
          <header className="flex min-h-[3.25rem] items-center justify-center border-b border-plum/15 bg-plum px-4 py-3 max-md:order-1 md:order-none md:border-e md:border-b md:border-plum/15 md:px-5">
            <h3 className="text-center text-fluid-lg font-bold text-white md:text-fluid-xl">
              What You Receive
            </h3>
          </header>

          <header className="flex min-h-[3.25rem] items-center justify-center border-b border-plum/15 bg-[#0E254E] px-4 py-3 max-md:order-4 md:order-none md:border-b md:border-plum/15 md:px-5">
            <h3 className="text-center text-fluid-lg font-bold text-white md:text-fluid-xl">
              Why You Get It
            </h3>
          </header>

          <PackagePanel spec={accommodations} />
          <PackagePanel spec={beOurGuest} />
          <PackagePanel spec={primeLocation} />
          <PackagePanel spec={allInclusive} />
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
