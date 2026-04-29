/**
 * Thank You page copy from docs/grand-sirenis-ulc-lp-copy.md.
 * Phone appears only as merge token %PHONE% (no literal number in the doc).
 */

import {
  HILTON_CANCUN_NAME,
  OFFER_NIGHTS_COUNT,
  OFFER_ROOM_SHORT,
  OFFER_STAY_LABEL,
  OFFER_TOTAL_AMOUNT,
  OFFER_TOTAL_COMPLETE,
} from '../constants';

export type ThankYouVariant = 'open-dated' | 'dated';

const SHARED = {
  headline: 'Congratulations! You Are All Set.',
  subheadSecure: 'Your Cancun All-Inclusive Getaway Has Been Secured!',
  actionTitle: 'ACTION REQUIRED',
  actionP1:
    'The resort requires additional details before we can confirm your travel dates. Please do NOT book your flights yet until we can speak with you!',
  actionP2: 'Any additional travel perks purchased will be distributed by your vacation agent.',
  hoursLabel: 'Reservation Department Hours:',
  hoursLine: 'Mon-Fri: 9 am - 8 pm CST  |  Saturday: 9 am - 5:30 pm CST',
  summaryTitle: 'Your Vacation Summary:',
  vacationPackageLine: `${OFFER_STAY_LABEL} ${OFFER_ROOM_SHORT} - ${HILTON_CANCUN_NAME} (Cancun, Mexico)`,
  unitType: OFFER_ROOM_SHORT,
  nightsDisplay: `${OFFER_NIGHTS_COUNT} Nights`,
  guests: '2 Adults',
  vacationDetailsTitle: 'Vacation Details:',
  resortLine: HILTON_CANCUN_NAME,
  locationLine: 'Cancun, Quintana Roo, Mexico',
} as const;

export function thankYouPackagePriceLine(): string {
  return `${OFFER_TOTAL_AMOUNT} deposit today + $999 at booking (${OFFER_TOTAL_COMPLETE})`;
}

export const THANK_YOU_OPEN_DATED = {
  ...SHARED,
  variant: 'open-dated' as const,
  introDetails:
    'Here are your vacation package details, bonuses, and the travel perks you paid for.',
  actionCta: 'Call Now to Book Your Travel Dates: %PHONE%',
  receiptNo: 'CUN-2026-0415',
  preferredCheckIn: 'N/A',
  preferredCheckOut: 'N/A',
  showVacationDetails: false,
  showBottomFooter: false,
} as const;

export const THANK_YOU_DATED = {
  ...SHARED,
  variant: 'dated' as const,
  introDetails: 'Here are your vacation package details and travel perks.',
  actionCta: 'Call Now: %PHONE%',
  receiptNo: 'CUN-2026-0415',
  preferredCheckIn: 'July 14, 2026',
  preferredCheckOut: 'July 18, 2026',
  showVacationDetails: true,
  showBottomFooter: true,
  /** Doc: ## 📞  Call now if you have any questions: %PHONE% */
  footerQuestionsLine: 'Call now if you have any questions: %PHONE%',
} as const;

export type ThankYouCopy = typeof THANK_YOU_OPEN_DATED | typeof THANK_YOU_DATED;

export function getThankYouCopy(variant: ThankYouVariant): ThankYouCopy {
  return variant === 'dated' ? THANK_YOU_DATED : THANK_YOU_OPEN_DATED;
}
