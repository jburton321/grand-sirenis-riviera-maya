import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Heart } from 'lucide-react';
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
    distance: '12-15 miles',
    time: '25-30 minutes',
    lat: 20.8475,
    lng: -86.8756,
    isMain: false,
  },
  {
    id: 'playa-del-carmen',
    name: 'Downtown Playa del Carmen',
    distance: '8-10 miles',
    time: '15-20 minutes',
    lat: 20.6282,
    lng: -87.0739,
    isMain: false,
  },
  {
    id: 'golf-course',
    name: 'El Camaleón Golf Course',
    distance: '3-5 miles',
    time: '5-10 minutes',
    lat: 20.6845,
    lng: -87.0255,
    isMain: false,
  },
  {
    id: 'xcaret',
    name: 'Xcaret Park',
    distance: '10-12 miles',
    time: '15-20 minutes',
    lat: 20.5775,
    lng: -87.1197,
    isMain: false,
  },
];

function createLocationMarker(location: typeof locations[0]) {
  const isMain = location.isMain;
  const color = isMain ? '#2563eb' : '#f97316';

  const distanceText = isMain
    ? `${location.distance}<br/>${location.time}`
    : `${location.distance} | ${location.time}`;

  const nameContent = isMain
    ? `<img src="/home/image-30.png" alt="${location.name}" style="height: 56px; width: auto; margin-bottom: 6px;" />`
    : `<h3 style="font-weight: bold; color: rgb(17, 24, 39); font-size: 16px; line-height: 1.2; margin: 0 0 4px 0;">${location.name}</h3>`;

  const zIndex = isMain ? 'z-index: 9999;' : '';

  const html = isMain
    ? `
    <div style="display: flex; flex-direction: column; align-items: center; ${zIndex}">
      <div style="background: white; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); padding: 12px 20px; text-align: center; margin-bottom: 8px; width: 320px;">
        ${nameContent}
        <p style="color: rgb(75, 85, 99); font-size: 13px; margin: 0; line-height: 1.4;">${distanceText}</p>
      </div>
      <div style="flex-shrink: 0;">
        <svg width="32" height="40" viewBox="0 0 32 40" fill="${color}">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
      </div>
    </div>
  `
    : `
    <div style="display: flex; align-items: center; gap: 12px; transform: translate(-16px, -20px); width: max-content;">
      <div style="flex-shrink: 0;">
        <svg width="32" height="40" viewBox="0 0 32 40" fill="${color}">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 12 16 24 16 24s16-12 16-24c0-8.836-7.164-16-16-16zm0 22c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
      </div>
      <div style="background: white; border-radius: 8px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); padding: 12px 16px; white-space: nowrap;">
        ${nameContent}
        <p style="color: rgb(75, 85, 99); font-size: 14px; margin: 0;">${distanceText}</p>
      </div>
    </div>
  `;

  return divIcon({
    html,
    className: isMain ? 'custom-location-marker main-marker' : 'custom-location-marker',
    iconSize: isMain ? [320, 180] : [400, 80],
    iconAnchor: isMain ? [160, 180] : [16, 20],
  });
}

interface MapSectionProps {
  children?: React.ReactNode;
}

export function MapSection({ children }: MapSectionProps) {
  const center: [number, number] = [20.6976, -87.0198];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-100 relative z-0">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="text-center pt-10 pb-8 px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Adult-Only Luxury in the <Heart className="inline w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500 fill-red-500" />
              <br />
              of the Mayan Coast Riviera Cancun.
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Carretera Federal 387, Km 299 Solidaridad, Riviera Maya, QR, 77710, Mexico
            </p>
          </div>

          <div className="px-6">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl">
              <MapContainer
                center={center}
                zoom={11}
                scrollWheelZoom={true}
                className="w-full h-full"
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={[location.lat, location.lng]}
                    icon={createLocationMarker(location)}
                    zIndexOffset={location.isMain ? 1000 : 0}
                  />
                ))}
              </MapContainer>

            </div>
          </div>

          {children && (
            <div className="py-8">
              {children}
            </div>
          )}

          <div className="px-6 pb-10">
            <Button className="w-full" asCta>Reserve Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
