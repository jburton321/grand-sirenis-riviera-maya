import { Header, Footer, MobileStickyCTA } from "./components";
import { RouterProvider, useRouter } from "./context/RouterContext";
import { HomePage } from "./pages/HomePage";
import { AccommodationsPage } from "./pages/AccommodationsPage";
import { AmenitiesPage } from "./pages/AmenitiesPage";
import { ThingsToDoPage } from "./pages/ThingsToDoPage";
import { AllInclusivePage } from "./pages/AllInclusivePage";

function AppContent() {
  const { currentPage } = useRouter();

  return (
    <div className="bg-white min-h-screen pb-20 lg:pb-0" style={{ overflowX: 'clip' }}>
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'accommodations' && <AccommodationsPage />}
        {currentPage === 'amenities' && <AmenitiesPage />}
        {currentPage === 'things-to-do' && <ThingsToDoPage />}
        {currentPage === 'all-inclusive' && <AllInclusivePage />}
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
