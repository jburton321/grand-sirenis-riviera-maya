/** Global offer / deal pricing (hero card, badges, sticky CTA, body copy). */
export const OFFER_TOTAL_AMOUNT = '$899' as const;
export const OFFER_TOTAL_LABEL = 'TOTAL PRICE' as const;
export const OFFER_DEPOSIT_LINE = 'Pay $299 Deposit Now' as const;
export const OFFER_SECURE_LINE = 'to Secure this Deal' as const;

/** Canonical hex replacing legacy `#7535AD` / `rgb(117 53 173)` (brand teal). */
export const RGB_117_53_173_REPLACEMENT = '#44AD98' as const;

/** Placeholder order/checkout URL until the real flow ships (IANA example domain). */
export const DUMMY_CTA_HREF = 'https://example.com/?vvip-order' as const;

/** Video trigger label (NBSP so “Play” / “Video” never split across lines on narrow viewports). */
export const PLAY_VIDEO_LABEL = 'Play\u00a0Video' as const;
