import { Button } from './Button';
import { useRouter } from '../context/RouterContext';

export function MobileStickyCTA() {
  const { navigateTo } = useRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:p-4 z-40 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-fluid-xs text-gray-600 truncate">5-Day Luxury Vacation</p>
          <p className="text-fluid-lg md:text-fluid-xl font-bold text-slate-800">$299<span className="text-fluid-xs font-normal text-gray-500">/couple</span></p>
        </div>
        <Button className="shrink-0 min-h-touch px-6 md:px-8" onClick={() => navigateTo('thank-you')}>
          Reserve
        </Button>
      </div>
    </div>
  );
}
