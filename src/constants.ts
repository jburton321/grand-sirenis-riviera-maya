/** Global offer / deal pricing (hero card, badges, sticky CTA, body copy). Grand Sirenis ULC LP. */
export const OFFER_TOTAL_AMOUNT = '$149' as const;
export const OFFER_TOTAL_LABEL = 'PER COUPLE, ENTIRE STAY' as const;
export const OFFER_RETAIL_PRICE = '$3,464' as const;
export const OFFER_SAVE_PERCENT = 96 as const;
export const OFFER_STAY_LABEL = '6-Days / 5-Nights' as const;

/** Short LP headline fragments (Paradise stack, cards, bars). */
export const OFFER_HEADLINE_DESTINATION = 'Riviera Maya' as const;
export const OFFER_HEADLINE_VACATION = 'All-Inclusive' as const;

/** Single scannable line for cards and bars. */
export const OFFER_DECK_ONE_LINER =
  `${OFFER_HEADLINE_DESTINATION} · ${OFFER_HEADLINE_VACATION}` as const;

export const RESORT_DISPLAY_NAME = 'Grand Sirenis Riviera Maya Resort & Spa' as const;
export const CLUB_DISPLAY_NAME = 'Unlimited Leisure Club' as const;

/** Hero / booking card one-liner (two adults, suite type). */
export const OFFER_ROOM_SHORT = 'Junior Suite Deluxe, 2 adults, all-inclusive' as const;

export const FOOTER_PRICE_DISCLAIMER =
  '*Price does not include taxes and fees which vary and are payable upon check-in.' as const;

/** Placeholder order/checkout URL until the real flow ships (IANA example domain). */
export const DUMMY_CTA_HREF = 'https://example.com/?vvip-order' as const;

/** Video trigger label (NBSP so “Play” / “Video” never split across lines on narrow viewports). */
export const PLAY_VIDEO_LABEL = 'Play\u00a0Video' as const;

/** Local resort promo MP4 (`public/media`; sourced from Cloudflare Stream HLS master manifest). */
export const RESORT_VIDEO_MP4_SRC = 'media/resort-video.mp4' as const;
