/**
 * Full-bleed bands below the interior hero: white, then brand page tint (#F9F5FF / bg-page), repeating.
 */
export function interiorStripeClass(index: number): string {
  return index % 2 === 0 ? 'bg-white' : 'bg-page';
}
