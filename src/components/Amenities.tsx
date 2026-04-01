import {
  Waves,
  Sparkles,
  UtensilsCrossed,
  Drama,
  Dumbbell,
  Ship,
  Turtle,
  Baby,
  Trees,
  Coffee,
  Wifi,
  Globe,
  Landmark,
  ShoppingBag,
  Sailboat,
  CircleDot,
  TreePine,
  Fish,
} from 'lucide-react';
import { Button } from './Button';
import { RESORT_DISPLAY_NAME } from '../constants';
import {
  FEATURED_AMENITY_LINES,
  NEARBY_ATTRACTION_LINES,
} from '../content/amenityLists';

const FEATURED_ICONS = [
  Waves,
  Sparkles,
  Sparkles,
  UtensilsCrossed,
  UtensilsCrossed,
  Drama,
  Dumbbell,
  Ship,
  Turtle,
  Baby,
  Coffee,
  Wifi,
] as const;

const NEARBY_ICONS = [
  Landmark,
  Globe,
  CircleDot,
  ShoppingBag,
  Trees,
  Trees,
  Waves,
  Fish,
  TreePine,
  Sailboat,
] as const;

const featuredAmenities = FEATURED_AMENITY_LINES.map((text, index) => ({
  icon: FEATURED_ICONS[index],
  text,
}));

const nearbyAttractions = NEARBY_ATTRACTION_LINES.map((text, index) => ({
  icon: NEARBY_ICONS[index],
  text,
}));

export function Amenities() {
  return (
    <section className="bg-plum px-4 pb-fluid-8 pt-fluid-8 md:px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <p className="text-white/95 text-fluid-sm md:text-fluid-base text-center max-w-3xl mx-auto mb-fluid-6 leading-relaxed">
          Beach, pools, dining, spa, and family spaces at {RESORT_DISPLAY_NAME}.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-8">
          <article>
            <h3 className="text-white text-fluid-xl md:text-fluid-2xl font-bold mb-fluid-4">
              Featured Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {featuredAmenities.map((item, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 py-1">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-sky" />
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
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-sky" />
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
