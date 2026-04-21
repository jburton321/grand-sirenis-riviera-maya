/**
 * PHH Collection copy — Phase 1 direct swap.
 * Keep array shape identical to what components consume (index-based .map()).
 */

export const ON_SITE_AMENITIES_TITLE = "The Collection's Luxury Amenities";

export const ON_SITE_AMENITIES_INTRO =
  "The PHH Collection spans three flagship Hilton all-inclusive resorts across Mexico's Caribbean and Pacific coasts. Each property is well-appointed, beachfront-set, and designed for guests seeking comfort, privacy, and elevated service. Every stay includes access to the property's Premium All-Inclusive experience, delivering thoughtful service, refined dining, and a seamless retreat — whether you choose Cancún's 100-acre coastline, Tulum's adults-only sanctuary, or the Pacific views of Vallarta Riviera.";

export const AMENITY_BLOCKS = [
  {
    title: 'Luxury All-Inclusive Experience',
    body:
      'Your stay includes unlimited dining, beverages, Wi-Fi, entertainment, and full access to resort and beach amenities. Everything is handled in one place, letting you focus on enjoying the setting, the service, and the pace of the resort without added decisions or extra planning.',
  },
  {
    title: 'Gourmet Dining with Flexibility',
    body:
      "Each Hilton property offers a diverse culinary program spanning à la carte restaurants, casual cafés, and multiple bars and lounges. Guests enjoy gourmet dining every evening with no reservations required. Cancún leads with 12 venues; Tulum emphasizes authentic Mexican flavors; Vallarta showcases Pacific seafood and sunset beachfront dining. Dedicated cafés and treats shops serve coffee, pastries, and desserts throughout the day, while bars across each resort provide unlimited access to premium cocktails and a wide selection of domestic and international spirits.",
  },
  {
    title: 'Pools, Beach, and Oceanfront Spaces',
    body:
      "Spend your day by the main pool, relax at the swim-up bar, or take in ocean views from each resort's beachfront. Swim-up rooms at select properties offer direct pool access steps from the terrace, while shaded loungers and open beach space provide room to enjoy the coast. Non-motorized water sports and beach activities are included as part of your stay.",
  },
  {
    title: 'Wellness, Fitness, and Recreation',
    body:
      'Guests have access to full-service spas featuring signature treatments and hydrotherapy circuits at select properties. Modern fitness centers, tennis courts, and guided fitness classes support an active stay, while poolside and beachfront activities keep the days engaging without feeling scheduled.',
  },
  {
    title: 'Nightly Entertainment and Social Spaces',
    body:
      'Evenings bring live shows, themed events, and social gatherings throughout each resort. Oceanfront bars and entertainment areas host performances and music that keep the energy going after sunset, offering a lively yet refined atmosphere designed for adults.',
  },
] as const;

export const THINGS_TO_DO_TITLE = 'Two Coastlines. Two Cultures. One Certificate.';

export function thingsToDoIntro(_resortDisplayName: string): string {
  return "Your PHH retreat opens onto some of Mexico's most extraordinary experiences. The Caribbean coast delivers ancient ruins, cenotes, and the Riviera Maya nightlife. The Pacific coast offers Malecón strolls, surf towns, and the quieter rhythm of Jalisco.";
}

export const THINGS_TO_DO_BLOCKS = [
  {
    title: 'Chichén Itzá — New Wonder of the World',
    body:
      'A bucket-list day trip from Cancún or Tulum, and a UNESCO World Heritage Site. Stand at the base of El Castillo pyramid and feel the scale of the ancient Mayan world. Guided tours run daily from both Caribbean coast destinations.',
  },
  {
    title: 'Tulum Ruins and Sacred Cenotes',
    body:
      "Mayan structures set atop a 12-meter cliff, overlooking the turquoise Caribbean — one of the few archaeological sites where history opens directly onto a swimming beach. Nearby, the Yucatán's sacred cenotes offer cool, crystal-clear water pooled beneath limestone caves and jungle canopy. A cenote swim is as close as travel gets to another world.",
  },
  {
    title: 'Xcaret Park and 5th Avenue',
    body:
      "Xcaret offers a full-day mix of underground rivers, jungle trails, lagoon snorkeling, and evening cultural performances — family-friendly and deeply immersive. A short transfer away, Playa del Carmen's Quinta Avenida is the Riviera Maya's pedestrian centerpiece — shopping, cafés, and rooftop lounges along a single vibrant corridor, day and night.",
  },
  {
    title: 'The Malecón and Old Town',
    body:
      "Puerto Vallarta's iconic seaside promenade — public art, live performers, and some of the best golden-hour views in Mexico. A slow walk from Old Town to the Los Arcos amphitheater at sunset is the city's quiet centerpiece. Cobblestone streets, boutique galleries, and a thriving food scene.",
  },
  {
    title: 'Sayulita and the Marietas',
    body:
      'A 45-minute drive north of Hilton Vallarta — surf-town energy, colorful storefronts, and a beach culture both laid-back and fashionable. Offshore, the UNESCO-protected Marietas Islands host the famous Hidden Beach at Playa del Amor, plus snorkeling, paddleboarding, and winter whale sightings.',
  },
] as const;
