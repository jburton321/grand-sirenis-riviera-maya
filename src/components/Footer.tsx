interface FooterProps {
  fullWidth?: boolean;
}

export function Footer({ fullWidth = false }: FooterProps) {
  return (
    <footer className="bg-black py-fluid-6 px-4 md:px-6 w-full">
      <div className={`${fullWidth ? '' : 'max-w-content mx-auto'} text-center`}>
        <img
          src="images/layer-20.svg"
          alt="VacationVIP"
          className="h-4 md:h-5 w-auto mx-auto mb-4 md:mb-5 transition-transform duration-300 hover:scale-105"
        />

        <p className="text-white text-fluid-xs md:text-fluid-sm mb-4 md:mb-5 max-w-3xl mx-auto px-2 leading-relaxed">
          THIS ADVERTISING MATERIAL IS BEING USED FOR THE PURPOSE OF SOLICITING SALES OF TIMESHARE INTERESTS OR PLANS
        </p>

        <div className="bg-white rounded-lg inline-flex items-center gap-2 px-2 md:px-3 py-1 mb-4 md:mb-5 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer min-h-touch">
          <img
            src="images/group6.svg"
            alt="BBB Accredited"
            className="h-7 md:h-9 w-auto"
          />
          <div className="text-left">
            <p className="text-black text-fluid-xs font-bold">BBB Rating: A</p>
            <p className="text-black text-fluid-xs">
              As of 8/25/2025<br />Click for Profile
            </p>
          </div>
        </div>

        <p className="text-white text-fluid-xs md:text-fluid-sm mb-2">
          Sogno Tours, LLC d/b/a VacationVIP.com
        </p>

        <address className="text-white text-fluid-xs md:text-fluid-sm not-italic mb-4 md:mb-5 px-2">
          9900 Lake Ellenor Drive Suite 300, Orlando, FL 32809
        </address>

        <p className="text-white text-fluid-xs md:text-fluid-sm mb-4 md:mb-5">
          Copyright &copy; 2026 | All Rights Reserved.
        </p>

        <p className="text-white text-fluid-xs px-2 leading-relaxed">
          SOT: Florida: ST44683 | Washington: 605354522 | California: 2156600-50 | Hawaii: 7531
        </p>
      </div>
    </footer>
  );
}
