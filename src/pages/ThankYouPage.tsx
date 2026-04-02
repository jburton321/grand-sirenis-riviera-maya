import type { ThankYouVariant } from '../content/thankYouCopy';
import { useRouter } from '../context/RouterContext';
import { ThankYouReceiptCard } from '../components/thankYou/ThankYouReceiptCard';

/**
 * Post-purchase confirmation from copy doc (Thank You Page - Open-Dated / Dated).
 * - `#thank-you` → open-dated (N/A travel dates, “bonuses…” intro).
 * - `#thank-you-dated` → dated ([DATE] placeholders + Vacation Details block).
 * Uses the same HelloBar, Header, and Footer as the rest of the site; mobile sticky CTA is omitted (see App.tsx).
 */
export function ThankYouPage() {
  const { currentPage } = useRouter();
  const variant: ThankYouVariant = currentPage === 'thank-you-dated' ? 'dated' : 'open-dated';

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20 lg:py-10">
      <ThankYouReceiptCard variant={variant} />
    </div>
  );
}
