import {
  ConciergeBell,
  Clock,
  Waves,
  Sparkles,
  Sofa,
  Coffee,
  Bath,
  Tv,
  Dumbbell,
  Wifi,
  Globe,
  Ship,
  Landmark,
  ShoppingBag,
  UtensilsCrossed,
  Trees,
  Sailboat,
  CircleDot,
  TreePine,
} from 'lucide-react';
import { Button } from './Button';

const featuredAmenities = [
  { icon: ConciergeBell, text: 'Four restaurants & five bars and lounges' },
  { icon: Clock, text: '24-hour room service' },
  { icon: Waves, text: 'Outdoor pool' },
  { icon: Sparkles, text: 'Zen Spa' },
  { icon: Sofa, text: 'Minibar (refreshed daily)' },
  { icon: Coffee, text: 'Nespresso coffee' },
  { icon: Bath, text: 'Bathrobes and slippers' },
  { icon: Tv, text: '55" flat-screen HDTV' },
  { icon: Dumbbell, text: 'State-of-the-art fitness center' },
  { icon: Wifi, text: 'Complimentary Wi-Fi' },
];

const nearbyAttractions = [
  { icon: Globe, text: 'Downtown Playa del Carmen Nightlife' },
  { icon: Ship, text: 'Tulum Experience' },
  { icon: Landmark, text: 'Night Out in Cancún' },
  { icon: ShoppingBag, text: 'Specialty Tequila/Mixology' },
  { icon: UtensilsCrossed, text: 'Gourmet International Dining' },
  { icon: Trees, text: 'Xcaret Park Evening Shows' },
  { icon: Sailboat, text: 'Lounge Scene in Puerto Morelos' },
  { icon: Waves, text: 'Scuba Diving at Palancar Reef' },
  { icon: CircleDot, text: 'Cenote Route Adventure' },
  { icon: TreePine, text: 'El Camaleón Golf Course' },
];

export function Amenities() {
  return (
    <section className="bg-[#003882] py-fluid-8 px-4 md:px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-8">
          <article>
            <h3 className="text-white text-fluid-xl md:text-fluid-2xl font-bold mb-fluid-4">
              Featured Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {featuredAmenities.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 py-1">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0" />
                  <span className="text-white text-fluid-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </article>

          <article>
            <h3 className="text-white text-fluid-xl md:text-fluid-2xl font-bold mb-fluid-4">
              Nearby Attractions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {nearbyAttractions.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 py-1">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent shrink-0" />
                  <span className="text-white text-fluid-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-fluid-8">
          <Button className="w-full" asCta>Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
