import type { ReactNode } from 'react';
import { RESORT_HERO_BACKGROUND_IMAGE } from '../../constants';
import type { ThankYouCopy, ThankYouVariant } from '../../content/thankYouCopy';
import { THANK_YOU_DATED, getThankYouCopy, thankYouPackagePriceLine } from '../../content/thankYouCopy';
import { ThankYouActionBanner } from './ThankYouActionBanner';

const TY = 'images';

function Row({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-row items-start gap-2 self-stretch sm:items-center">
      <img className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0" src={`${TY}/${icon}`} alt="" />
      <span className="shrink-0 font-sans text-sm font-semibold leading-normal text-[#2a323b]">
        {label}
      </span>
      <span className="min-w-0 flex-1 break-words font-sans text-sm font-medium leading-normal text-[#2a323b]">
        {children}
      </span>
    </div>
  );
}

function SummarySection({ copy }: { copy: ThankYouCopy }) {
  const pkgPrice = thankYouPackagePriceLine();

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl bg-[#dfdfdf]">
      <div className="flex flex-col gap-6 bg-[#f9f9f9] p-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <img className="h-6 w-6 shrink-0" src={`${TY}/luggage0.svg`} alt="" />
            <span className="font-sans text-lg font-bold leading-tight text-[#2a323b]">
              Vacation package
            </span>
          </div>
          <p className="pl-8 font-sans text-sm font-medium leading-snug text-[#2a323b] sm:pl-8">
            {copy.vacationPackageLine}
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <Row icon="assignment-turned-in3.svg" label="Receipt #:">
            {copy.receiptNo}
          </Row>
          <Row icon="king-bed0.svg" label="Unit Type:">
            {copy.unitType}
          </Row>
          <Row icon="bedtime0.svg" label="Number of Nights:">
            {copy.nightsDisplay}
          </Row>
          <Row icon="group1.svg" label="Guests:">
            {copy.guests}
          </Row>
          <Row icon="calendar-month0.svg" label="Preferred Check-In:">
            {copy.preferredCheckIn}
          </Row>
          <Row icon="calendar-month1.svg" label="Preferred Check-Out:">
            {copy.preferredCheckOut}
          </Row>
          <Row icon="credit-score0.svg" label="Package Price:">
            {pkgPrice}
          </Row>
        </div>
      </div>
    </div>
  );
}

function VacationDetailsSection({ copy }: { copy: ThankYouCopy }) {
  if (!copy.showVacationDetails) return null;

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl bg-[#dfdfdf]">
      <div className="flex flex-col gap-6 bg-[#f9f9f9] p-6">
        <h3 className="font-sans text-xl font-bold leading-tight text-[#2a323b]">
          {copy.vacationDetailsTitle}
        </h3>
        <div className="flex flex-col gap-1.5">
          <Row icon="concierge0.svg" label="Resort:">
            {copy.resortLine}
          </Row>
          <Row icon="assignment-turned-in2.svg" label="Location:">
            {copy.locationLine}
          </Row>
          <Row icon="king-bed0.svg" label="Unit Type:">
            {copy.unitType}
          </Row>
          <Row icon="bedtime0.svg" label="Number of Nights:">
            {copy.nightsDisplay}
          </Row>
          <Row icon="group1.svg" label="Guests:">
            {copy.guests}
          </Row>
        </div>
      </div>
    </div>
  );
}

interface ThankYouReceiptCardProps {
  variant: ThankYouVariant;
}

export function ThankYouReceiptCard({ variant }: ThankYouReceiptCardProps) {
  const copy = getThankYouCopy(variant);

  const actionMessage = `${copy.actionP1} ${copy.actionP2}`;
  const actionHours = `${copy.hoursLabel}\n${copy.hoursLine}`;

  return (
    <div
      className="mx-auto w-full max-w-[1280px] flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-white shadow-md"
      style={{ boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.25)' }}
    >
      {/* Same footprint as original hero (min-heights + cover); image only - no gradient or sticker. */}
      <div
        className="min-h-[200px] w-full overflow-hidden rounded-t-2xl bg-cover bg-center sm:min-h-[280px]"
        style={{ backgroundImage: `url(${RESORT_HERO_BACKGROUND_IMAGE})` }}
        aria-hidden
      />

      <div className="flex flex-col gap-12 overflow-hidden p-6 sm:p-10 md:p-12">
        <div className="flex max-w-full flex-col gap-4 sm:gap-6">
          <h1
            className="font-sans text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl md:text-[58px] md:leading-[120%]"
            style={{ letterSpacing: '-0.03em' }}
          >
            {copy.headline}
          </h1>
          <p className="font-sans text-xl font-semibold leading-snug text-black sm:text-2xl">
            {copy.subheadSecure}
          </p>
          <p className="font-sans text-base font-medium leading-normal text-black">{copy.introDetails}</p>
        </div>
        <ThankYouActionBanner
          className="!bg-[#ffd174]"
          actionTitle={copy.actionTitle}
          message={actionMessage}
          hours={actionHours}
          callCtaText={copy.actionCta}
        />
      </div>

      <div className="flex flex-col gap-8 border-t border-gray-200 px-6 py-10 sm:px-10 md:px-12 md:py-16">
        <h2 className="font-sans text-2xl font-bold leading-tight text-[#2a323b]">{copy.summaryTitle}</h2>
        <SummarySection copy={copy} />
        <VacationDetailsSection copy={copy} />
      </div>

      {copy.variant === 'dated' && copy.showBottomFooter ? (
        <div className="flex flex-col gap-6 border-t border-gray-200 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10 md:p-12">
          <p className="max-w-xl font-sans text-base font-normal leading-normal text-gray-950">
            <span className="font-semibold">{THANK_YOU_DATED.footerQuestionsLine}</span>
          </p>
          <div className="max-w-md font-sans text-base font-normal leading-normal text-gray-950">
            <p className="font-semibold">{copy.hoursLabel}</p>
            <p className="mt-1">{copy.hoursLine}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
