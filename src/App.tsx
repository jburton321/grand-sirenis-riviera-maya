import { HelloBar, Header, Footer, MobileStickyCTA } from "./components";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { HomePage } from "./pages/HomePage";
import { AccommodationsPage } from "./pages/AccommodationsPage";
import { AmenitiesPage } from "./pages/AmenitiesPage";
import { ThingsToDoPage } from "./pages/ThingsToDoPage";
import { ThankYouPage } from "./pages/ThankYouPage";

function AppContent() {
  const { currentPage } = useRouter();
  const isThankYouPage =
    currentPage === 'thank-you' || currentPage === 'thank-you-dated';

  return (
    <div
      className={`bg-page min-h-screen lg:pb-0 ${isThankYouPage ? '' : 'pb-20'}`}
      style={{ overflowX: 'clip' }}
    >
      <HelloBar />
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'accommodations' && <AccommodationsPage />}
        {currentPage === 'amenities' && <AmenitiesPage />}
        {currentPage === 'things-to-do' && <ThingsToDoPage />}
        {isThankYouPage && <ThankYouPage />}
      </main>
      <Footer />
      {!isThankYouPage && <MobileStickyCTA />}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
