import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Heart, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { Button } from './Button';
import { Lightbox } from './Lightbox';

/**
 * Distances/times mirror the list UI (typical driving from the resort area).
 * Detail blurbs summarize widely published, non‑warranty facts — verify before legal/compliance use.
 */
interface MapLocation {
  id: string;
  name: string;
  distance: string;
  time: string;
  lat: number;
  lng: number;
  isMain: boolean;
  /** Hero image in the detail lightbox (paths under `/public`). */
  detailImageSrc: string;
  detailImageAlt: string;
  /** Short note when the photo is thematic rather than a literal place photo. */
  detailImageCaption?: string;
  popupSummary: string;
  /** Exactly two bullets in the detail lightbox. */
  popupHighlights: readonly [string, string];
}

const mapLocations: MapLocation[] = [
  {
    id: 'hyatt',
    name: 'Hyatt Zilara Riviera Maya',
    distance: 'Carretera Federal 387, Km 299 Solidaridad,',
    time: 'Riviera Maya, QR, 77710, Mexico',
    lat: 20.6976,
    lng: -87.0198,
    isMain: true,
    detailImageSrc: 'home/resort-photo-10.png',
    detailImageAlt:
      'Resort pool and palm trees at a luxury Riviera Maya beachfront property',
    popupSummary:
      'Adults-only, all-inclusive beachfront resort on a large Riviera Maya parcel—positioned between mangroves and the Caribbean, with a strong focus on couples-oriented stays.',
    popupHighlights: [
      'Multiple restaurants, bars, pools, and a spa across the property',
      'Beachfront setting along the same corridor as Km 299 (Federal 387)',
    ],
  },
  {
    id: 'puerto-morelos',
    name: 'Puerto Morelos',
    distance: '12–15 miles',
    time: '25–30 minutes',
    lat: 20.8475,
    lng: -86.8756,
    isMain: false,
    detailImageSrc: 'all-inclusive/resorts-beaches.png',
    detailImageAlt:
      'Turquoise Caribbean water and white-sand beach with lounge chairs',
    detailImageCaption:
      'Illustrative — Puerto Morelos is known for reef snorkeling and a quieter beach town vibe than Cancún or Playa.',
    popupSummary:
      'A quieter fishing port between Cancún and Playa del Carmen, known for its reef-protected waters and a slower pace than the larger resort cities.',
    popupHighlights: [
      'Puerto Morelos Reef National Park—part of the Mesoamerican Barrier Reef System',
      'Snorkeling and diving with corals and reef life relatively close to shore',
    ],
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    distance: '8–10 miles',
    time: '15–20 minutes',
    lat: 20.6282,
    lng: -87.0739,
    isMain: false,
    detailImageSrc: 'things-to-do/downtown.png',
    detailImageAlt:
      'Pedestrian street in Playa del Carmen with shops, cafés, and palm trees',
    popupSummary:
      'Downtown Playa centers on Quinta Avenida (Fifth Avenue), a long pedestrian strip of shops and restaurants minutes from the beach.',
    popupHighlights: [
      'Quinta Avenida for walkable dining, retail, and people-watching',
      'Public beach access and beach clubs nearby along the shore',
    ],
  },
  {
    id: 'golf-course',
    name: 'El Camaleón Golf Course',
    distance: '3–5 miles',
    time: '5–10 minutes',
    lat: 20.6845,
    lng: -87.0255,
    isMain: false,
    detailImageSrc: 'home/resort-photo-50.png',
    detailImageAlt:
      'Lush tropical palms and manicured resort grounds in the Riviera Maya',
    detailImageCaption:
      'Illustrative — El Camaleón is famous for jungle, mangrove, and oceanfront holes at Mayakoba (Greg Norman design).',
    popupSummary:
      'Greg Norman–designed 18-hole championship layout at Mayakoba, routing through jungle, mangrove channels, and seaside holes—including a famous cenote and canal stretch.',
    popupHighlights: [
      'Long-running PGA TOUR host venue in Mexico’s Riviera Maya market',
      'Distinct ecosystems on one course: forest, mangrove, and oceanfront play',
    ],
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    distance: '10–12 miles',
    time: '15–20 minutes',
    lat: 20.5775,
    lng: -87.1197,
    isMain: false,
    detailImageSrc: 'things-to-do/xcaret.png',
    detailImageAlt:
      'Xcaret eco-archaeological park lagoon, rock formations, and tropical greenery',
    popupSummary:
      'Flagship eco-archaeological park along Highway 307 south of Playa del Carmen—underground rivers, wildlife exhibits, Maya heritage displays, and a major evening show.',
    popupHighlights: [
      'Underground rivers and swimming experiences through rock galleries',
      'Evening “México Espectacular”-style production (Xcaret’s signature night show)',
    ],
  },
];

/** Match tailwind `primary` / `primary-dark` / `accent` (vars.css). */
const MAP_PIN_MAIN = '#369082';
const MAP_PIN_MAIN_ACTIVE = '#44AD98';
const MAP_PIN_SECONDARY = '#E29A28';
const MAP_PIN_SECONDARY_ACTIVE = '#e9b25a';

function createMapPinIcon(location: MapLocation, isHighlighted: boolean) {
  const isMain = location.isMain;
  const fill = isHighlighted
    ? isMain
      ? MAP_PIN_MAIN_ACTIVE
      : MAP_PIN_SECONDARY_ACTIVE
    : isMain
      ? MAP_PIN_MAIN
      : MAP_PIN_SECONDARY;
  const glow = isHighlighted
    ? isMain
      ? 'filter: drop-shadow(0 0 10px rgba(68,173,152,0.9)) drop-shadow(0 4px 8px rgba(0,0,0,0.18));'
      : 'filter: drop-shadow(0 0 10px rgba(233,178,90,0.75)) drop-shadow(0 4px 8px rgba(0,0,0,0.18));'
    : 'filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2));';
  const scale = isHighlighted ? 1.12 : 1;
  const w = 36 * scale;
  const h = 44 * scale;

  const html = `
    <div style="width:${w}px;height:${h}px;display:flex;justify-content:center;align-items:flex-end;${glow}">
      <svg width="${w}" height="${h}" viewBox="0 0 32 40" fill="${fill}" aria-hidden="true">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
        <circle cx="16" cy="16" r="4" fill="white"/>
      </svg>
    </div>
  `;

  const pad = 4;
  const iw = Math.ceil(w) + pad * 2;
  const ih = Math.ceil(h) + pad * 2;

  return divIcon({
    html,
    className: 'map-pin-marker',
    iconSize: [iw, ih],
    iconAnchor: [iw / 2, ih - pad],
    popupAnchor: [0, -ih + pad],
  });
}

function LocationLightboxDetail({ location }: { location: MapLocation }) {
  return (
    <>
      <figure className="mb-5 overflow-hidden rounded-xl bg-gray-100 shadow-md ring-1 ring-black/5">
        <img
          src={location.detailImageSrc}
          alt={location.detailImageAlt}
          width={1200}
          height={800}
          className="h-36 w-full object-cover xs:h-40 sm:h-44 md:h-52"
          loading="lazy"
          decoding="async"
        />
        {location.detailImageCaption ? (
          <figcaption className="border-t border-gray-100 bg-gray-50/90 px-3 py-2 text-left text-[11px] leading-snug text-gray-600 sm:px-4 sm:text-xs">
            {location.detailImageCaption}
          </figcaption>
        ) : null}
      </figure>
      <p className="text-fluid-base leading-relaxed text-gray-600">
        {location.popupSummary}
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-fluid-sm leading-relaxed text-gray-700 sm:text-fluid-base">
        {location.popupHighlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-6 border-t border-gray-200 pt-4">
        {location.isMain ? (
          <p className="text-fluid-sm leading-snug text-gray-500">
            <span className="font-semibold text-gray-800">Address — </span>
            {location.distance} {location.time}
          </p>
        ) : (
          <p className="text-fluid-sm text-gray-500">
            <span className="font-semibold text-gray-800">
              {location.distance}
            </span>
            <span className="mx-1.5 text-gray-400">·</span>
            <span>{location.time} drive (typical)</span>
          </p>
        )}
      </div>
      <Button className="mt-6 w-full min-h-touch" asCta>
        RESERVE NOW
      </Button>
    </>
  );
}

function MapMarkerLayer({
  locations,
  highlightId,
  lightboxId,
  setLightboxId,
  setHoverId,
}: {
  locations: MapLocation[];
  highlightId: string | null;
  lightboxId: string | null;
  setLightboxId: Dispatch<SetStateAction<string | null>>;
  setHoverId: (id: string | null) => void;
}) {
  const map = useMap();

  useEffect(() => {
    if (!lightboxId) return;
    const loc = locations.find((l) => l.id === lightboxId);
    if (!loc) return;
    const targetZoom = loc.isMain ? 12 : 13;
    map.flyTo([loc.lat, loc.lng], Math.max(map.getZoom(), targetZoom), {
      duration: 0.45,
    });
  }, [lightboxId, locations, map]);

  return (
    <>
      {locations.map((location) => {
        const isOn = highlightId === location.id;
        return (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createMapPinIcon(location, isOn)}
            zIndexOffset={isOn ? 3000 : location.isMain ? 1000 : 0}
            eventHandlers={{
              mouseover: () => setHoverId(location.id),
              mouseout: () => setHoverId(null),
              click: () =>
                setLightboxId((prev) =>
                  prev === location.id ? null : location.id
                ),
            }}
          />
        );
      })}
    </>
  );
}

interface MapSectionProps {
  children?: React.ReactNode;
}

export function MapSection({ children }: MapSectionProps) {
  const center: [number, number] = [20.6976, -87.0198];
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const highlightId = hoverId ?? lightboxId;
  const lightboxLocation = lightboxId
    ? mapLocations.find((l) => l.id === lightboxId) ?? null
    : null;

  return (
    <section className="relative bg-[#eef5f4] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="rounded-3xl bg-white shadow-xl">
          <div className="px-6 pb-6 pt-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Discover Adult-Only Luxury in the{' '}
              <Heart className="inline h-8 w-8 fill-primary text-primary sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <br />
              of the Mayan Coast Riviera Cancun.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR,
              77710, Mexico
            </p>
          </div>

          <div className="px-4 pb-8 sm:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:min-h-[560px]">
              <div className="relative h-[380px] min-h-[380px] overflow-hidden rounded-2xl border border-primary/20 shadow-inner shadow-primary/5 sm:h-[420px] sm:min-h-[420px] lg:h-full lg:min-h-0">
                <MapContainer
                  center={center}
                  zoom={11}
                  scrollWheelZoom
                  className="brand-map h-full w-full z-0"
                  zoomControl
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  />
                  <MapMarkerLayer
                    locations={mapLocations}
                    highlightId={highlightId}
                    lightboxId={lightboxId}
                    setLightboxId={setLightboxId}
                    setHoverId={setHoverId}
                  />
                </MapContainer>
              </div>

              <div
                className="flex min-h-0 flex-col py-1 lg:h-full"
                role="list"
                aria-label="Destinations near the resort"
              >
                <p className="mb-2 shrink-0 text-left text-fluid-sm font-semibold uppercase tracking-wide text-gray-500 lg:mb-3">
                  Nearby destinations — tap for details
                </p>
                <div className="flex min-h-0 flex-1 flex-col gap-4 lg:overflow-y-auto lg:overflow-x-visible lg:overscroll-contain lg:py-1 lg:pr-2">
                  {mapLocations.map((location) => {
                    const isOn = highlightId === location.id;
                    return (
                      <article
                        key={location.id}
                        role="listitem"
                        tabIndex={0}
                        onMouseEnter={() => setHoverId(location.id)}
                        onMouseLeave={() => setHoverId(null)}
                        onFocus={() => setHoverId(location.id)}
                        onBlur={() => setHoverId(null)}
                        onClick={() =>
                          setLightboxId((prev) =>
                            prev === location.id ? null : location.id
                          )
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setLightboxId((prev) =>
                              prev === location.id ? null : location.id
                            );
                          }
                        }}
                        className={`cursor-pointer rounded-2xl border-2 p-4 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                          isOn
                            ? 'border-primary bg-primary/10 shadow-md ring-2 ring-primary/30'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                              location.isMain
                                ? 'bg-primary/15 text-primary-dark'
                                : 'bg-gold-100 text-gold-800'
                            } ${isOn ? 'ring-2 ring-primary ring-offset-2 ring-offset-white' : ''}`}
                            aria-hidden
                          >
                            <MapPin className="h-5 w-5" strokeWidth={2.25} />
                          </span>
                          <div className="min-w-0 flex-1">
                            {location.isMain ? (
                              <img
                                src="home/Zilara-logo.png"
                                alt=""
                                className="mb-2 h-8 w-auto max-w-[180px] object-contain sm:h-9"
                                width={1112}
                                height={171}
                              />
                            ) : null}
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                              {location.name}
                            </h3>
                            {location.isMain ? (
                              <p className="mt-1 text-fluid-sm leading-snug text-gray-600">
                                {location.distance}
                                <br />
                                {location.time}
                              </p>
                            ) : (
                              <p className="mt-1 text-fluid-sm text-gray-600">
                                <span className="font-semibold text-gray-800">
                                  {location.distance}
                                </span>
                                <span className="mx-1.5 text-gray-400">
                                  ·
                                </span>
                                <span>{location.time} drive</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {children ? <div className="py-8">{children}</div> : null}

          <div className="px-6 pb-10">
            <Button className="w-full" asCta>
              Reserve Now
            </Button>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={Boolean(lightboxLocation)}
        onClose={() => setLightboxId(null)}
        title={lightboxLocation?.name}
        bodyContent={
          lightboxLocation ? (
            <LocationLightboxDetail location={lightboxLocation} />
          ) : null
        }
      />
    </section>
  );
}
