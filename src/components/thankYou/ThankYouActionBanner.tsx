interface ThankYouActionBannerProps {
  actionTitle?: string;
  message: string;
  hours: string;
  callCtaText: string;
  className?: string;
}

export function ThankYouActionBanner({
  actionTitle = 'ACTION REQUIRED',
  message,
  hours,
  callCtaText,
  className = '',
}: ThankYouActionBannerProps) {
  return (
    <div
      className={`relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-yellow-600 bg-[rgba(255,251,83,0.50)] p-6 shadow-xl lg:flex-row lg:items-center lg:gap-16 ${className}`}
      style={{ boxShadow: '0px 40px 40px -20px rgba(82, 122, 255, 0.20)' }}
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
          <img className="h-6 w-6 shrink-0" src="images/warning0.svg" alt="" />
          <div
            className="font-sans text-base font-bold uppercase leading-none tracking-wide text-gray-950"
            style={{ letterSpacing: '0.02em' }}
          >
            {actionTitle}
          </div>
        </div>
        <p className="font-sans text-sm font-medium leading-snug text-gray-950">{message}</p>
        <p className="whitespace-pre-line font-sans text-sm font-bold leading-snug text-gray-950">
          {hours}
        </p>
      </div>
      <div className="flex shrink-0 flex-row items-center justify-center rounded-lg bg-sky-dark px-6 py-4">
        <p className="text-center font-sans text-base font-semibold leading-snug text-white">
          {callCtaText}
        </p>
      </div>
    </div>
  );
}
