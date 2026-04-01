import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Heart, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { Button } from './Button';
import { Lightbox } from './Lightbox';
import {
  RESORT_MAP_POPUP_HIGHLIGHTS,
  RESORT_MAP_POPUP_SUMMARY,
} from '../content/amenityLists';

/**
 * Distances/times mirror the list UI (typical driving from the resort area).
 * Detail blurbs summarize widely published, non-warranty facts. Verify before legal/compliance use.
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
  /** Lightbox hero: `cover` (default) or `contain` (e.g. logos). */
  detailImageObjectFit?: 'cover' | 'contain';
  popupSummary: string;
  /** Exactly two bullets in the detail lightbox. */
  popupHighlights: readonly [string, string];
}

/** Path to an asset in `public/home` (encoded for safe `src` URLs). */
function homePublicImage(fileName: string) {
  return `home/${encodeURIComponent(fileName)}`;
}

const mapLocations: MapLocation[] = [
  {
    id: 'grand-sirenis',
    name: 'Grand Sirenis Riviera Maya Resort & Spa',
    distance: 'Ctra. Federal Cancún to Tulum, Zona Costera, km 256.3,',
    time: 'Riviera Maya, Mexico',
    lat: 20.3919,
    lng: -87.3231,
    isMain: true,
    detailImageSrc: homePublicImage('GrandSirenis.webp'),
    detailImageAlt: 'Grand Sirenis Riviera Maya Resort & Spa',
    popupSummary: RESORT_MAP_POPUP_SUMMARY,
    popupHighlights: RESORT_MAP_POPUP_HIGHLIGHTS,
  },
  {
    id: 'puerto-morelos',
    name: 'Puerto Morelos',
    distance: '48-52 miles',
    time: '55-65 minutes',
    lat: 20.8475,
    lng: -86.8756,
    isMain: false,
    detailImageSrc: homePublicImage('PuertoMorelos.jpg'),
    detailImageAlt: 'Puerto Morelos coastal scene',
    popupSummary:
      'A quieter fishing port between Cancún and Playa del Carmen, known for its reef-protected waters and a slower pace than the larger resort cities.',
    popupHighlights: [
      'Puerto Morelos Reef National Park, part of the Mesoamerican Barrier Reef System',
      'Snorkeling and diving with corals and reef life relatively close to shore',
    ],
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    distance: '24-28 miles',
    time: '35-45 minutes',
    lat: 20.6282,
    lng: -87.0739,
    isMain: false,
    detailImageSrc: homePublicImage('DowntownPlayadelCarmen.webp'),
    detailImageAlt: 'Downtown Playa del Carmen street scene',
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
    distance: '30-34 miles',
    time: '40-50 minutes',
    lat: 20.6845,
    lng: -87.0255,
    isMain: false,
    detailImageSrc: homePublicImage('mayakoba-el-camaleon-mexico.jpg'),
    detailImageAlt: 'El Camaleón golf course at Mayakoba, Riviera Maya',
    popupSummary:
      'Greg Norman-designed 18-hole championship layout at Mayakoba, routing through jungle, mangrove channels, and seaside holes, including a famous cenote and canal stretch.',
    popupHighlights: [
      'Long-running PGA TOUR host venue in Mexico’s Riviera Maya market',
      'Distinct ecosystems on one course: forest, mangrove, and oceanfront play',
    ],
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    distance: '16-20 miles',
    time: '25-35 minutes',
    lat: 20.5775,
    lng: -87.1197,
    isMain: false,
    detailImageSrc: homePublicImage('XcaretPark.jpg'),
    detailImageAlt: 'Xcaret Park',
    popupSummary:
      'Flagship eco-archaeological park along Highway 307 south of Playa del Carmen, with underground rivers, wildlife exhibits, Maya heritage displays, and a major evening show.',
    popupHighlights: [
      'Underground rivers and swimming experiences through rock galleries',
      'Evening “México Espectacular”-style production (Xcaret’s signature night show)',
    ],
  },
];

/** Main resort pin: plum. Secondary pins: brand purple (primary). */
const MAP_PIN_MAIN = '#1A1033';
const MAP_PIN_MAIN_ACTIVE = '#1A1033';
const MAP_PIN_SECONDARY = '#793DC3';
const MAP_PIN_SECONDARY_ACTIVE = '#793DC3';

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
      ? 'filter: drop-shadow(0 0 10px rgba(26,16,51,0.9)) drop-shadow(0 4px 8px rgba(0,0,0,0.18));'
      : 'filter: drop-shadow(0 0 10px rgba(121,61,195,0.85)) drop-shadow(0 4px 8px rgba(0,0,0,0.18));'
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
      <figure className="mb-5 overflow-hidden rounded-xl bg-page shadow-md ring-1 ring-purple/15">
        <img
          src={location.detailImageSrc}
          alt={location.detailImageAlt}
          width={1200}
          height={800}
          className={
            location.detailImageObjectFit === 'contain'
              ? 'h-36 w-full object-contain bg-white p-6 xs:h-40 sm:h-44 md:h-52'
              : 'h-36 w-full object-cover xs:h-40 sm:h-44 md:h-52'
          }
          loading="lazy"
          decoding="async"
        />
        {location.detailImageCaption ? (
          <figcaption className="border-t border-cardline bg-page/95 px-3 py-2 text-left text-[11px] leading-snug text-muted sm:px-4 sm:text-xs">
            {location.detailImageCaption}
          </figcaption>
        ) : null}
      </figure>
      <p className="text-fluid-base leading-relaxed text-muted">
        {location.popupSummary}
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-fluid-sm leading-relaxed text-plum/90 sm:text-fluid-base">
        {location.popupHighlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-6 border-t border-cardline pt-4">
        {location.isMain ? (
          <p className="text-fluid-sm leading-snug text-muted">
            <span className="font-semibold text-plum">Address: </span>
            {location.distance} {location.time}
          </p>
        ) : (
          <p className="text-fluid-sm text-muted">
            <span className="font-semibold text-plum">
              {location.distance}
            </span>
            <span className="mx-1.5 text-plum/35">·</span>
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
  const center: [number, number] = [20.6, -87.08];
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const highlightId = hoverId ?? lightboxId;
  const lightboxLocation = lightboxId
    ? mapLocations.find((l) => l.id === lightboxId) ?? null
    : null;

  return (
    <section className="relative bg-page py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="rounded-3xl border border-cardline bg-white shadow-xl">
          <div className="px-6 pb-6 pt-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-plum sm:text-4xl md:text-5xl">
              Discover the heart of the{' '}
              <Heart className="inline h-8 w-8 fill-cta text-cta sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <br />
              Mayan Caribbean, Riviera Maya.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted">
              Ctra. Federal Cancún to Tulum, Zona Costera, km 256.3, Riviera Maya, Mexico
            </p>
          </div>

          <div className="px-4 pb-8 sm:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:min-h-[560px]">
              <div className="relative h-[380px] min-h-[380px] overflow-hidden rounded-2xl border border-purple/25 shadow-inner shadow-purple/10 sm:h-[420px] sm:min-h-[420px] lg:h-full lg:min-h-0">
                <MapContainer
                  center={center}
                  zoom={10}
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
                <p className="mb-2 shrink-0 text-left text-fluid-sm font-semibold uppercase tracking-wide text-plum/70 lg:mb-3">
                  Nearby destinations (tap for details)
                </p>
                <div className="flex min-h-0 flex-1 flex-col gap-4 scroll-touch-y lg:overflow-y-auto lg:overflow-x-visible lg:overscroll-contain lg:py-1 lg:pr-2">
                  {mapLocations.map((location) => {
                    const isOn = highlightId === location.id;
                    const isMainLoc = location.isMain;
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
                        className={`cursor-pointer rounded-2xl border-2 p-4 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                          isMainLoc
                            ? isOn
                              ? 'border-plum bg-plum/10 shadow-md ring-2 ring-plum/30 focus-visible:ring-plum'
                              : 'border-cardline bg-page hover:border-plum/30 hover:bg-white focus-visible:ring-plum'
                            : isOn
                              ? 'border-purple bg-purple/10 shadow-md ring-2 ring-purple/30 focus-visible:ring-purple'
                              : 'border-cardline bg-page hover:border-purple/25 hover:bg-white focus-visible:ring-purple'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                              isMainLoc
                                ? 'bg-plum/15 text-plum'
                                : 'bg-purple/15 text-purple'
                            } ${
                              isOn
                                ? isMainLoc
                                  ? 'ring-2 ring-plum ring-offset-2 ring-offset-white'
                                  : 'ring-2 ring-purple ring-offset-2 ring-offset-white'
                                : ''
                            }`}
                            aria-hidden
                          >
                            <MapPin className="h-5 w-5" strokeWidth={2.25} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-bold text-plum sm:text-xl">
                              {location.name}
                            </h3>
                            {location.isMain ? (
                              <p className="mt-1 text-fluid-sm leading-snug text-muted">
                                {location.distance}
                                <br />
                                {location.time}
                              </p>
                            ) : (
                              <p className="mt-1 text-fluid-sm text-muted">
                                <span className="font-semibold text-plum">
                                  {location.distance}
                                </span>
                                <span className="mx-1.5 text-plum/35">
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
