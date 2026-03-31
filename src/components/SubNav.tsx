import { useState, useEffect } from 'react';

const navItems = [
  { label: 'What you get', href: '#what-you-get' },
  { label: 'Hotel video', href: '#hotel-video' },
  { label: 'Resort details', href: '#resort-details' },
  { label: 'Reserve it now', href: '#reserve-now' },
] as const;

export function SubNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
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
      const headerOffset = 168;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-[52px] z-40 border-b border-cardline bg-page pt-5 pb-2 shadow-sm scrollbar-hide scroll-touch-x overflow-x-auto md:top-[56px] md:pt-4 md:pb-2">
      <ul className="mx-auto flex w-full max-w-content items-center justify-start gap-0 px-4 whitespace-nowrap md:px-6 lg:justify-center lg:px-8">
        {navItems.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index > 0 ? (
              <span
                className="select-none px-1.5 text-[11px] text-gray-300 md:px-2 md:text-xs"
                aria-hidden
              >
                |
              </span>
            ) : null}
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`flex min-h-[36px] items-center px-1.5 py-1.5 text-[11px] font-normal uppercase tracking-wide transition-colors sm:px-2 md:text-xs ${
                activeSection === item.href.slice(1)
                  ? 'font-semibold text-primary'
                  : 'text-muted hover:text-primary'
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
