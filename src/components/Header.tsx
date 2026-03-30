import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './Button';
import { useRouter } from '../context/RouterContext';

const navLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'Accommodations', page: 'accommodations' as const },
  { label: 'Amenities', page: 'amenities' as const },
  { label: 'Things To Do', page: 'things-to-do' as const },
  { label: 'All-Inclusive', page: 'all-inclusive' as const },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, navigateTo } = useRouter();

  const handleNavClick = (page: typeof navLinks[number]['page']) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-content mx-auto px-4 md:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateTo('home')}
            className="p-1 md:p-2 transition-transform duration-300 hover:scale-105 min-h-touch min-w-touch flex items-center justify-center touch-manipulation"
            aria-label="Go to home"
          >
            <img
              className="h-5 md:h-6 w-auto"
              src="images/vacation-vip-full-color-horiz0.png"
              alt="VacationVIP Logo"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
            <ul className="flex items-center gap-2 xl:gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className={`relative text-fluid-xs xl:text-fluid-sm font-normal uppercase tracking-wide transition-colors duration-300 py-2 px-1 group min-h-touch flex items-center touch-manipulation whitespace-nowrap ${
                      currentPage === link.page
                        ? 'text-primary font-semibold'
                        : 'text-brand-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                      currentPage === link.page ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                </li>
              ))}
            </ul>
            <Button variant="small" asCta>reserve now</Button>
          </nav>

          <button
            className="lg:hidden p-3 -mr-2 min-w-touch min-h-touch flex items-center justify-center touch-manipulation transition-transform duration-200 active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={link.label} style={{ transitionDelay: `${index * 50}ms` }} className={`transform transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className={`w-full text-left py-4 px-2 text-fluid-base font-normal uppercase tracking-wide min-h-touch flex items-center touch-manipulation transition-colors duration-200 active:bg-gray-100 ${
                      currentPage === link.page ? 'text-primary font-semibold' : 'text-brand-700'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-2">
              <Button variant="small" className="w-full min-h-touch" asCta>reserve now</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
