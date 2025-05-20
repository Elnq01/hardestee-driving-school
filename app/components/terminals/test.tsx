'use client'; // Needed for App Router and dynamic imports

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const position: LatLngExpression = [51.505, -0.09];

export default function MapView() {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} 
    style={{ height: '300px', width: '100%' }}>
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


