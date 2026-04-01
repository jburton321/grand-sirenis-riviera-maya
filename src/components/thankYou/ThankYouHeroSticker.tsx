import {
  OFFER_HEADLINE_DESTINATION,
  OFFER_HEADLINE_VACATION,
  OFFER_STAY_LABEL,
} from '../../constants';

export function ThankYouHeroSticker() {
  return (
    <div className="relative flex min-h-[200px] w-full items-center justify-center overflow-hidden sm:min-h-[240px] md:h-[280px]">
      <img
        src="thank-you/group0.svg"
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 max-h-none w-[min(140%,900px)] -translate-x-1/2 -translate-y-1/2 select-none"
        aria-hidden
      />
      <div className="relative z-10 flex max-w-full flex-col items-center gap-2 px-4 py-6 text-center sm:gap-3">
        <p className="font-sans text-2xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-[3.25rem]">
          {OFFER_STAY_LABEL}
        </p>
        <div className="flex flex-col items-center">
          <p className="font-sans text-3xl font-medium leading-none text-black sm:text-5xl md:text-6xl">
            {OFFER_HEADLINE_DESTINATION}
          </p>
          <p
            className="mt-1 font-sans text-3xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl"
            style={{ marginTop: '-0.15em' }}
          >
            <span className="text-white">{OFFER_HEADLINE_VACATION}</span>{' '}
            <span className="text-white">Vacation</span>
          </p>
        </div>
      </div>
    </div>
  );
}
