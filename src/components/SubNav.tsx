import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Resort video', href: '#resort-video' },
  { label: 'What you get', href: '#what-you-get' },
  { label: 'Resort details', href: '#resort-details' },
  { label: 'Guest reviews', href: '#guest-reviews' },
  { label: 'Reserve it now', href: '#reserve-now' },
];

export function SubNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-gray-100 pt-5 pb-2 md:pt-4 md:pb-2 overflow-x-auto shadow-sm scrollbar-hide sticky top-[52px] md:top-[56px] z-40 border-b border-gray-200">
      <ul className="w-full max-w-content mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-start lg:justify-center gap-1 sm:gap-2 md:gap-4 whitespace-nowrap">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`text-[11px] md:text-xs font-normal uppercase tracking-wide transition-colors py-1.5 px-1.5 sm:px-2 flex items-center min-h-[36px] touch-manipulation whitespace-nowrap ${
                activeSection === item.href.slice(1)
                  ? 'text-primary font-semibold'
                  : 'text-brand-700 hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
