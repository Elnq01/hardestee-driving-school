'use client'; // Needed for App Router and dynamic imports

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import locationStyles from "./location.module.css";
import { Row } from 'react-bootstrap';
import HeaderDesign from '../UI/headerDesign';

const position: LatLngExpression = [51.505, -0.09];

export default function Location() {
  return (    
  <Row className={locationStyles.container}>   
          <HeaderDesign text1="Our" text2="Location"/>
          <h2 className={locationStyles.H2} >Where we are?</h2>


    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={locationStyles.map}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>Hello from Leaflet!</Popup>
      </Marker>
    </MapContainer>

  </Row>
  );
}


