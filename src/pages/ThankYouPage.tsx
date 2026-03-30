import { Button } from '../components/Button';
import { BackgroundSection } from '../components/BackgroundSection';

export interface IActionRequiredMessageStateDefaultProps {
  message?: string;
  hours?: string;
  className?: string;
}

const ActionRequiredMessageStateDefault = ({
  message = "The resort requires additional details before we can confirm your travel dates. Please do NOT book your flights yet until we can speak with you! Any additional travel perks that were purchased will be distributed by your vacation agent.",
  hours = "Call Center Hours: Monday-Friday: 10 AM – 4 PM EST",
  className,
}: IActionRequiredMessageStateDefaultProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[rgba(255,251,83,0.50)] rounded-2xl border-solid border-yellow-600 border p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 items-center justify-center relative overflow-hidden " +
        className
      }
      style={{ boxShadow: "0px 40px 40px -20px rgba(82, 122, 255, 0.20)" }}
    >
      <div className="flex flex-col gap-3 md:gap-4 items-start justify-start flex-1 relative">
        <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
          <img
            className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 relative overflow-visible"
            src="thank-you/warning0.svg"
          />
          <div
            className="text-neutral-950 text-left font-['Inter-Bold',_sans-serif] text-sm sm:text-base leading-none font-bold uppercase"
            style={{ letterSpacing: "0.02em" }}
          >
            Action required
          </div>
        </div>
        <div className="text-neutral-950 text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-[140%] font-medium relative self-stretch">
          {message}
        </div>
        <div className="text-neutral-950 text-left font-['Inter-Bold',_sans-serif] text-xs sm:text-sm leading-[140%] font-bold relative self-stretch">
          {hours}
        </div>
      </div>
      <a href="tel:800-88-gurus" className="w-full md:w-auto">
        <Button className="w-full md:w-auto">Call now: %PHONE%</Button>
      </a>
    </div>
  );
};


export interface IDesktopProps {
  className?: string;
}

export const ThankYouPage = ({
  className,
}: IDesktopProps): JSX.Element => {
  return (
    <div
      className={
        "flex flex-col gap-0 items-start justify-start relative " +
        className
      }
    >
      <BackgroundSection
        backgroundImage="thank-you/topper1.png"
        overlay
        overlayOpacity={30}
        className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex flex-col overflow-visible w-full"
      >
        <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8 w-full flex-1 flex items-center justify-center">
          <img
            className="hero-sticker-element"
            src="home/mexico-10.png"
            alt="Mexico destination"
            loading="eager"
          />
        </div>
      </BackgroundSection>

      <div className="bg-neutral-30 py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-12 lg:py-10 lg:px-20 flex flex-row gap-6 items-start justify-center self-stretch shrink-0 relative w-full">
        <div
          className="bg-neutral-white rounded-2xl flex flex-col gap-0 items-start justify-start w-full max-w-[1280px] relative overflow-hidden"
          style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex flex-col gap-0 items-end justify-start shrink-0 w-full relative">
            <div className="bg-[#2a323b] py-3 px-4 sm:py-4 sm:px-6 md:px-12 flex flex-col sm:flex-row gap-2 sm:gap-2.5 items-center justify-between self-stretch shrink-0 relative">
              <div
                className="shrink-0 w-[100px] sm:w-[123px] h-auto relative overflow-hidden"
              >
                <img
                  className="w-full h-auto overflow-visible"
                  src="thank-you/layer-20.svg"
                />
              </div>
              <div className="flex flex-row gap-2 sm:gap-2.5 justify-center sm:justify-end relative">
                <div className="text-[#ffffff] text-left font-['Inter-Medium',_sans-serif] text-sm sm:text-base leading-none font-medium relative">
                  Total paid:
                </div>
                <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                  <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-lg sm:text-xl leading-none font-semibold relative">
                    $
                  </div>
                  <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-lg sm:text-xl leading-none font-bold relative">
                    299.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-start justify-start shrink-0 w-full relative">
              <div
                className="text-black text-left font-['Inter-ExtraBold',_sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-[120%] font-extrabold relative self-stretch"
                style={{ letterSpacing: "-0.03em" }}
              >
                Congrats! All set!
              </div>
              <div className="text-black text-left font-['Inter-Medium',_sans-serif] text-sm sm:text-base leading-normal font-medium relative self-stretch">
                Thank you for your initial payment of $299. This confirms your deposit is successfully processed. Please note that the remaining balance of $600 will be due once you finalize and book your specific dates.
              </div>
            </div>
            <ActionRequiredMessageStateDefault
              hours="Call Center Hours: Monday-Thursday 9 am ET - 10:30 pm ET, Friday 9 am ET - 8 pm ET, or Saturday & Sunday 10 am ET - 6:00 pm ET."
              className="!bg-[#ffd174] !self-stretch !shrink-0"
            />
          </div>
          <div className="border-solid border-neutral-100 border-t pt-8 px-4 pb-6 sm:pt-12 sm:px-6 sm:pb-8 md:pt-16 md:pr-12 md:pb-12 md:pl-12 flex flex-col gap-4 sm:gap-6 md:gap-8 items-start justify-start self-stretch shrink-0 relative">
            <div className="text-[#2a323b] text-left font-['Inter-Bold',_sans-serif] text-lg sm:text-xl md:text-2xl leading-[120%] font-bold relative">
              Your Vacation Summary
            </div>
            <div className="bg-[#dfdfdf] rounded-2xl flex flex-col gap-px items-start justify-start w-full relative overflow-hidden">
              <div className="bg-[#f9f9f9] p-4 sm:p-6 md:pt-8 md:pr-6 md:pb-8 md:pl-6 flex flex-col gap-4 sm:gap-6 items-start justify-start self-stretch shrink-0 relative">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 relative overflow-visible"
                    src="thank-you/luggage0.svg"
                  />
                  <div className="text-[#2a323b] text-left font-['Inter-Bold',_sans-serif] text-base sm:text-lg leading-[120%] font-bold relative">
                    Vacation package
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Purchaser Name:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      {"{{purchaser.fullname}}"}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in1.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Purchaser Email:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      {"{{email}}"}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in2.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Purchase Date:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      mm/dd/yyyy
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/assignment-turned-in3.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Receipt No:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      1234567890
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/concierge0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Accommodations:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      Hyatt Zilara Riviera Maya
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/king-bed0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Unit type:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      Standard Room
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/bedtime0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Number of nights:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      4 nights
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/group1.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Guests:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      2 Adults
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/calendar-month0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Preferred check-in:
                    </div>
                    <a
                      href="tel:800-88-gurus"
                      className="text-blue-link text-left font-['Inter-Bold',_sans-serif] text-xs sm:text-sm leading-normal font-bold relative underline"
                    >
                      Call now to book your travel dates. %PHONE%
                    </a>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/calendar-month1.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Preferred check-out:
                    </div>
                    <a
                      href="tel:800-88-gurus"
                      className="text-blue-link text-left font-['Inter-Bold',_sans-serif] text-xs sm:text-sm leading-normal font-bold relative underline"
                    >
                      Call now to book your travel dates. %PHONE%
                    </a>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative flex-wrap">
                    <img
                      className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative overflow-visible"
                      src="thank-you/credit-score0.svg"
                    />
                    <div className="text-[#2a323b] text-left font-['Inter-SemiBold',_sans-serif] text-xs sm:text-sm leading-normal font-semibold relative">
                      Package Price:
                    </div>
                    <div className="text-[#2a323b] text-left font-['Inter-Medium',_sans-serif] text-xs sm:text-sm leading-normal font-medium relative">
                      $299.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-solid border-neutral-100 border-t p-4 sm:p-6 md:p-12 flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-end justify-between self-stretch shrink-0 relative">
            <div className="text-neutral-950 text-left font-['-',_sans-serif] text-sm sm:text-base leading-normal font-normal relative flex items-end justify-start">
              <span>
                <span className="title-8-span">
                  Call now if you have any questions:{" "}
                </span>
                <span className="title-8-span2">%PHONE%</span>
              </span>
            </div>
            <div className="text-neutral-950 text-left font-['-',_sans-serif] text-sm sm:text-base leading-normal font-normal relative w-full md:w-[377px] flex items-end justify-start">
              <span>
                <span className="title-9-span">
                  Hours of Operation:
                  <br />
                </span>
                <span className="title-9-span2">
                  Monday-Thursday 9 am ET - 10:30 pm ET
                  <br />
                  Friday 9 am ET - 8 pm ET, or Saturday &amp;
                  <br />
                  Sunday 10 am ET - 6:00 pm ET.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
