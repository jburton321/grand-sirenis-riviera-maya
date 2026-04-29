/**
 * PHH Collection — $500 deposit is the hero price. $1,499 total is supporting context.
 * $999 balance is paid at the time of booking ($500 deposit + $999 = $1,499 total).
 * Retail comparison is $2,500 → savings = $1,001 (≈ 40%).
 */

// ── RESORT & BRAND ──────────────────────────────────────────────
export const RESORT_DISPLAY_NAME = 'PHH Collection' as const;
export const CLUB_DISPLAY_NAME = 'PHH Collection' as const;

// ── OFFER PRICING ───────────────────────────────────────────────
export const OFFER_TOTAL_AMOUNT = '$500' as const;            // PriceBadge circle, BookingCard hero price
export const OFFER_TOTAL_LABEL = 'Deposit Today' as const;    // Below price in PriceBadge + BookingCard
export const OFFER_RETAIL_PRICE = '$2,500' as const;          // Struck-through comparison price
export const OFFER_SAVE_PERCENT = 40 as const;                // Savings badge (number for {X}% interpolation) — ($2,500 − $1,499)/$2,500 ≈ 40%
export const OFFER_MEMBER_RATE_COMPLETE = '$500 Deposit' as const; // MobileStickyCTA

// ── OFFER DETAILS ───────────────────────────────────────────────
export const OFFER_STAY_LABEL = '5 Days / 4 Nights' as const;
export const OFFER_NIGHTS_COUNT = 4 as const;
export const OFFER_ROOM_SHORT = 'Deluxe Room' as const;
export const OFFER_HEADLINE_DESTINATION = 'Cancún · Tulum · Puerto Vallarta' as const;
export const OFFER_HEADLINE_VACATION = 'All-Inclusive Mexico Vacation' as const;

/** Single scannable line for cards and bars (unchanged hero deck line). */
export const OFFER_DECK_ONE_LINER =
  '5-Day Luxury All-Inclusive Retreat · Your Choice of Three Hilton Resorts' as const;

// ── SPLIT PAY LINES ─────────────────────────────────────────────
export const OFFER_BALANCE_LINE =
  'Pay $999 at the time of booking for all 5 days / 4 nights' as const;
export const OFFER_TOTAL_COMPLETE = '$1,499 total' as const;  // Supporting context, never the hero

// ── RECURRING RIBBON ────────────────────────────────────────────
export const RECURRING_RIBBON_LINE =
  'ONLY $500 DEPOSIT · $999 AT BOOKING · $2,500 VALUE · 40% OFF' as const;

// ── CTA ─────────────────────────────────────────────────────────
export const PRIMARY_CTA_LABEL = 'RESERVE YOUR STAY' as const;
export const PRIMARY_CTA_LABEL_SHORT = 'Reserve' as const;
/** Placeholder order/checkout URL until the real flow ships (IANA example domain). */
export const DUMMY_CTA_HREF = 'https://example.com/?vvip-order' as const;

// ── PHONE ───────────────────────────────────────────────────────
export const PHONE_USA_CAN = '800-YOUR-EPR' as const;
export const PHONE_MEX = '+52 998 881 4771' as const;

// ── VIDEO (kept as Phase 2 visual reference — do not disable) ───
/** Video trigger label (NBSP so “Play” / “Video” never split across lines on narrow viewports). */
export const PLAY_VIDEO_LABEL = 'Play\u00a0Video' as const;
/** Hero lightbox promo MP4 (lives in `public/media`). Active: Hilton Cancún — "For the Stay". */
export const RESORT_VIDEO_MP4_SRC = 'media/hilton-cancun-hero.mp4' as const;

// ── FOOTER ──────────────────────────────────────────────────────
export const FOOTER_PRICE_DISCLAIMER =
  'Member rate represents approximately 40% savings off published resort rates. Published rate based on peak-season Deluxe Room rates at participating Hilton all-inclusive properties.' as const;

// ── IMAGES (kept as Phase 2 visual reference — swap when PHH assets are ready) ─
/** Thank You receipt hero background (`public/images/`). */
export const RESORT_HERO_BACKGROUND_IMAGE =
  'images/thank-you/receipt-hero.jpg' as const;
/** Amenities interior hero (`public/images/`). */
export const AMENITIES_HERO_BACKGROUND_IMAGE =
  'images/amenities/amenities-hero-cancun-aerial.png' as const;
/** Accommodations interior hero (`public/images/`). */
export const ACCOMMODATIONS_HERO_BACKGROUND_IMAGE =
  'images/accommodations/hilton-vallarta-riviera-01.png' as const;
