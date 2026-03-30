import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Page = 'home' | 'accommodations' | 'amenities' | 'things-to-do' | 'all-inclusive' | 'thank-you' | 'email-preview';

interface RouterContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const validPages: Page[] = ['home', 'accommodations', 'amenities', 'things-to-do', 'all-inclusive', 'thank-you', 'email-preview'];

function getPageFromHash(): Page {
  const hash = window.location.hash.slice(1);
  if (validPages.includes(hash as Page)) {
    return hash as Page;
  }
  return 'home';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
}
