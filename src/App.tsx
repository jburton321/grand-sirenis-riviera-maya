import { HelloBar, Header, Footer, MobileStickyCTA } from "./components";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { HomePage } from "./pages/HomePage";
import { AccommodationsPage } from "./pages/AccommodationsPage";
import { AmenitiesPage } from "./pages/AmenitiesPage";
import { ThingsToDoPage } from "./pages/ThingsToDoPage";
import { AllInclusivePage } from "./pages/AllInclusivePage";
import { ThankYouPage } from "./pages/ThankYouPage";

function AppContent() {
  const { currentPage } = useRouter();

  return (
    <div className="bg-page min-h-screen pb-20 lg:pb-0" style={{ overflowX: 'clip' }}>
      <HelloBar />
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'accommodations' && <AccommodationsPage />}
        {currentPage === 'amenities' && <AmenitiesPage />}
        {currentPage === 'things-to-do' && <ThingsToDoPage />}
        {currentPage === 'all-inclusive' && <AllInclusivePage />}
        {(currentPage === 'thank-you' || currentPage === 'thank-you-dated') && <ThankYouPage />}
      </main>
      <Footer />
      <MobileStickyCTA />
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
