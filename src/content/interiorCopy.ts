/**
 * Verbatim narrative from docs/grand-sirenis-ulc-lp-copy-interior-pages.md
 * (On-Site Amenities + Things to Do blocks). Keep in sync when regenerating from Word.
 */

export const ON_SITE_AMENITIES_TITLE = 'On-site amenities — all included';

export const ON_SITE_AMENITIES_INTRO =
  'The Riviera Maya rewards discovery, and Grand Sirenis ensures every moment is extraordinary.';

export const AMENITY_BLOCKS = [
  {
    title: 'Multiple pools and lazy river',
    body:
      "Immerse yourself in an oasis of pure tranquility. Float gently along the resort's beloved lazy river, surrounded by tropical vegetation and the soft sound of waterfalls. Multiple heated outdoor pools — including an Activities Pool designed for organized water games and family fun — provide endless ways to spend your most perfect days.",
  },
  {
    title: 'Award-winning Spa Grand Sirenis',
    body:
      'Relax and rejuvenate body and mind in the award-winning Spa Grand Sirenis. A wide range of treatments and therapies await you, designed to revitalize and restore your well-being in an atmosphere of serenity and quiet luxury. Spa treatments are also available on the beach for the ultimate in sensory indulgence.',
  },
  {
    title: 'Beyond Flavors — a culinary journey',
    body:
      'Beyond Flavors invites you to explore an exciting stroll through the most iconic and contemporary world flavors. Innovation and creativity come together to amaze through complete sensory experiences, with great attention paid not just to taste but to space, service, and atmosphere. Eight themed a-la-carte restaurants and two buffets ensure your palate is never anything less than delighted.',
  },
  {
    title: 'Nightly live entertainment',
    body:
      "Immerse yourself in a world of entertainment every evening in the resort's semi-outdoor theater, where talented artists transport you through engaging and memorable shows — from live music to stunning theatrical performances that blend seamlessly into the tropical surroundings.",
  },
  {
    title: 'Water activities and nature trails',
    body:
      "Embark on exciting water adventures with snorkeling, fishing, and non-motorized watersports directly from the resort's two miles of Caribbean beach. Explore the natural beauty of your surroundings through carefully designed trails winding through stunning gardens and jungle landscapes. Visit the on-site turtle sanctuary and discover a genuine Mayan ruin right within the property grounds.",
  },
] as const;

export const THINGS_TO_DO_TITLE = 'Things to do — the Riviera Maya awaits';

export function thingsToDoIntro(resortDisplayName: string): string {
  return `The Riviera Maya is more than a destination. It is a world unto itself, packed with natural wonders, ancient history, and Caribbean magic — all just moments from ${resortDisplayName}.`;
}

export const THINGS_TO_DO_BLOCKS = [
  {
    title: 'Tulum archaeological ruins',
    body:
      'Perched dramatically on coastal cliffs above the turquoise Caribbean Sea, the Tulum Ruins are among the most beautifully situated Mayan ruins in the world. Located just 20 minutes from the resort, this UNESCO-recognized site offers a breathtaking glimpse into an ancient civilization against a backdrop of ocean and jungle that photography cannot fully capture.',
  },
  {
    title: 'Cenote exploration',
    body:
      'The Yucatan Peninsula is home to thousands of cenotes — sacred Mayan pools of crystal-clear freshwater connected to an underground river system. These remarkable natural formations range from open-air swimming holes to dramatic cave environments lit by shafts of light filtering through the jungle canopy. Snorkeling, swimming, and cave diving experiences are available throughout the region.',
  },
  {
    title: 'Chichen Itza',
    body:
      'One of the New Seven Wonders of the World, Chichen Itza is an awe-inspiring Mayan archaeological complex featuring the iconic El Castillo pyramid. Guided day trips from the resort bring this remarkable UNESCO World Heritage Site to life with expert commentary on the mathematics, astronomy, and culture embedded in every stone.',
  },
  {
    title: 'Xcaret eco-archaeological park',
    body:
      "Xcaret is the Riviera Maya's flagship eco-archaeological experience, blending underground rivers, coral reef snorkeling, Mayan village re-creations, wildlife sanctuaries, and the celebrated Mexico Espectacular evening show into one extraordinary day. It is the single most complete cultural and natural immersion the region offers.",
  },
  {
    title: 'Akumal Bay — swim with sea turtles',
    body:
      "Akumal, meaning 'Place of the Turtle' in Mayan, is a sheltered bay just a short drive from the resort where snorkelers regularly encounter wild sea turtles grazing on seagrass in their natural habitat. This accessible, effortless wildlife encounter is among the most memorable experiences the Riviera Maya offers.",
  },
  {
    title: 'Playa del Carmen',
    body:
      "Playa del Carmen's famous 5th Avenue pedestrian promenade offers the best of the Riviera Maya's contemporary side — boutique shopping, world-class dining, vibrant open-air bars, and a bustling energy that contrasts beautifully with the resort's tranquility. Just 30 minutes from Grand Sirenis, it makes for a perfect half-day excursion.",
  },
] as const;
