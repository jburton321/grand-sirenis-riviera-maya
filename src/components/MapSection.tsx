import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Heart, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { Button } from './Button';

const locations = [
  {
    id: 'hyatt',
    name: 'Hyatt Zilara',
    distance: 'Carretera Federal 387, Km 299 Solidaridad,',
    time: 'Riviera Maya, QR, 77710, Mexico',
    lat: 20.6976,
    lng: -87.0198,
    isMain: true,
  },
  {
    id: 'puerto-morelos',
    name: 'Puerto Morelos',
    distance: '12–15 miles',
    time: '25–30 minutes',
    lat: 20.8475,
    lng: -86.8756,
    isMain: false,
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    distance: '8–10 miles',
    time: '15–20 minutes',
    lat: 20.6282,
    lng: -87.0739,
    isMain: false,
  },
  {
    id: 'golf-course',
    name: 'El Camaleón Golf Course',
    distance: '3–5 miles',
    time: '5–10 minutes',
    lat: 20.6845,
    lng: -87.0255,
    isMain: false,
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    distance: '10–12 miles',
    time: '15–20 minutes',
    lat: 20.5775,
    lng: -87.1197,
    isMain: false,
  },
] as const;

type LocationItem = (typeof locations)[number];

function createMapPinIcon(location: LocationItem, isHighlighted: boolean) {
  const isMain = location.isMain;
  const fill = isHighlighted ? '#44AD98' : isMain ? '#1d4ed8' : '#ea580c';
  const glow = isHighlighted
    ? 'filter: drop-shadow(0 0 10px rgba(68,173,152,0.85)) drop-shadow(0 4px 8px rgba(0,0,0,0.2));'
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

interface MapSectionProps {
  children?: React.ReactNode;
}

export function MapSection({ children }: MapSectionProps) {
  const center: [number, number] = [20.6976, -87.0198];
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const clearHighlight = () => setHighlightedId(null);
  const setHighlight = (id: string) => setHighlightedId(id);

  return (
    <section className="relative z-0 bg-gray-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="rounded-3xl bg-white shadow-xl">
          <div className="px-6 pb-6 pt-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Discover Adult-Only Luxury in the{' '}
              <Heart className="inline h-8 w-8 fill-red-500 text-red-500 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <br />
              of the Mayan Coast Riviera Cancun.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR, 77710, Mexico
            </p>
          </div>

          <div className="px-4 pb-8 sm:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:min-h-[560px]">
              <div className="relative h-[380px] min-h-[380px] overflow-hidden rounded-2xl border border-gray-200 shadow-inner sm:h-[420px] sm:min-h-[420px] lg:h-full lg:min-h-0">
                <MapContainer
                  center={center}
                  zoom={11}
                  scrollWheelZoom
                  className="h-full w-full z-0"
                  zoomControl
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {locations.map((location) => {
                    const isOn = highlightedId === location.id;
                    return (
                      <Marker
                        key={location.id}
                        position={[location.lat, location.lng]}
                        icon={createMapPinIcon(location, isOn)}
                        zIndexOffset={
                          isOn ? 3000 : location.isMain ? 1000 : 0
                        }
                        eventHandlers={{
                          mouseover: () => setHighlight(location.id),
                          mouseout: clearHighlight,
                          click: () =>
                            setHighlightedId((prev) =>
                              prev === location.id ? null : location.id
                            ),
                        }}
                      />
                    );
                  })}
                </MapContainer>
              </div>

              <div
                className="flex min-h-0 flex-col py-1 lg:h-full"
                role="list"
                aria-label="Destinations near the resort"
              >
                <p className="mb-2 shrink-0 text-left text-fluid-sm font-semibold uppercase tracking-wide text-gray-500 lg:mb-3">
                  Nearby destinations
                </p>
                <div className="flex min-h-0 flex-1 flex-col gap-4 lg:overflow-y-auto lg:overflow-x-visible lg:overscroll-contain lg:py-1 lg:pr-2">
                {locations.map((location) => {
                  const isOn = highlightedId === location.id;
                  return (
                    <article
                      key={location.id}
                      role="listitem"
                      tabIndex={0}
                      onMouseEnter={() => setHighlight(location.id)}
                      onMouseLeave={clearHighlight}
                      onFocus={() => setHighlight(location.id)}
                      onBlur={clearHighlight}
                      onClick={() =>
                        setHighlightedId((prev) =>
                          prev === location.id ? null : location.id
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setHighlightedId((prev) =>
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
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-orange-100 text-orange-700'
                          } ${isOn ? 'ring-2 ring-primary ring-offset-2 ring-offset-white' : ''}`}
                          aria-hidden
                        >
                          <MapPin className="h-5 w-5" strokeWidth={2.25} />
                        </span>
                        <div className="min-w-0 flex-1">
                          {location.isMain ? (
                            <img
                              src="home/image-30.png"
                              alt=""
                              className="mb-2 h-8 w-auto max-w-[180px] object-contain sm:h-9"
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
                              <span className="mx-1.5 text-gray-400">·</span>
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
    </section>
  );
}
