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
          <img
            src="home/offer-badge.png"
            alt="5-Day/4-Night Riviera Cancun Vacation - $299 for Two Adults"
            className="mx-auto w-full max-w-3xl h-auto"
          />
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
