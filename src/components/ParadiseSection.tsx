import { BackgroundSection } from './BackgroundSection';
import { PriceBadge } from './PriceBadge';

export function ParadiseSection() {
  return (
    <BackgroundSection
      backgroundImage="home/section-wrapper0.png"
      className="pt-10 sm:pt-12 md:pt-16"
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="ios-frosted-glass mx-auto w-full max-w-3xl rounded-2xl px-5 py-7 sm:rounded-3xl sm:px-8 sm:py-9 md:px-10 md:py-10">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <img
                src="home/Zilara-logo.png"
                alt="Hyatt Zilara"
                className="mx-auto h-auto max-h-12 w-auto max-w-[min(100%,220px)] object-contain sm:max-h-14 md:max-h-16 md:max-w-[260px]"
                width={1112}
                height={171}
                loading="lazy"
              />
            </div>
            <h2 className="text-slate-950">
              <span className="block text-fluid-sm font-bold uppercase tracking-[0.2em] text-primary-dark sm:text-fluid-base">
                5-DAY/4-NIGHT
              </span>
              <span className="mt-2 block text-fluid-3xl font-black uppercase leading-[1.05] tracking-tight sm:mt-3 sm:text-fluid-4xl md:text-fluid-5xl">
                BEACHFRONT
              </span>
              <span className="mt-1 block text-fluid-2xl font-black uppercase leading-tight tracking-tight text-primary-dark sm:text-fluid-3xl md:text-fluid-4xl">
                RIVIERA CANCUN
              </span>
              <span className="mt-1 block text-fluid-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-fluid-4xl md:text-fluid-5xl">
                VACATION
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-gray-900 text-fluid-base leading-relaxed sm:mt-8 sm:text-fluid-lg">
              <span className="font-bold text-slate-950">The Hyatt Zilara Riviera Maya</span>{' '}
              is Only{' '}
              <span className="font-extrabold text-accent-dark text-fluid-xl sm:text-fluid-2xl">$299</span>{' '}
              for Two Adults.{' '}
              <span className="font-semibold text-slate-950">
                Your 5-Day All-Inclusive Luxury Escape Awaits
              </span>
            </p>
          </div>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-center">
          <PriceBadge width={260} className="max-w-full" />
        </div>
      </div>

      <div className="bg-black py-10 sm:py-12 md:py-16 px-4 sm:px-6 -mt-[10px]">
        <div className="max-w-content mx-auto text-center">
          <h3 className="text-accent text-xl sm:text-2xl font-extrabold uppercase mb-6 sm:mb-8 md:mb-10">
            Ultimate Adults-Only Paradise
          </h3>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
            Discover true beachfront bliss on a pristine white-sand beach, creating the perfect backdrop for romance and relaxation. The Premium All-Inclusive experience offers specialty gourmet à la carte dining nightly; no reservations needed, for a world-class culinary adventure. Enjoy seamless service from the moment you arrive with a private Amstar transfer, 24-hour room service, and an award-winning staff ensuring you are pampered at every turn.
          </p>
          <img
            src="home/divider.png"
            alt=""
            className="mx-auto mt-8 sm:mt-10 md:mt-12 w-[470px] max-w-full h-auto"
          />
        </div>
      </div>
    </BackgroundSection>
  );
}
