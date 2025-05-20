'use client'; // Needed for App Router and dynamic imports

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const position: LatLngExpression = [51.505, -0.09];

export default function MapView() {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>Hello from Leaflet!</Popup>
      </Marker>
    </MapContainer>
  );
}
