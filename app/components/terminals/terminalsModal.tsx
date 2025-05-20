'use client';

import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import { Button, Modal } from 'react-bootstrap';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

// 🧭 Component to find user location and notify parent
const LocationFinder = ({ onLocationFound }:any) => {
  const map = useMap();

  useEffect(() => {
    map.locate({ setView: true, enableHighAccuracy: true });

    const handleLocation = (e) => {
      onLocationFound(e.latlng);
    };

    map.on('locationfound', handleLocation);
    map.on('locationerror', (e) => console.log("Location Error: ", e));

    return () => {
      map.off('locationfound', handleLocation);
    };
  }, [map, onLocationFound]);

  return null;
};

// 🚗 Routing Component
const Routing = ({ userLocation, destination }:any) => {
  const map = useMap();

  useEffect(() => {
    if (!userLocation || !destination) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(userLocation.lat, userLocation.lng),
        L.latLng(destination.lat, destination.lng),
      ],
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }],
        extendToWaypoints: true,
        missingRouteTolerance: 10,
        addWaypoints: false,
      } as L.Routing.LineOptions,
      // show: false,
      fitSelectedRoutes: true,
      routeWhileDragging: false,
      addWaypoints: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [userLocation, destination, map]);

  return null;
};

// 📍 Destination Location (Empire State Building)
const destination: LatLngExpression = [40.748817, -73.985428];

export default function TerminalModal(props:any) {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.terminal} Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MapContainer
          center={destination}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '300px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {/* 👤 User Marker */}
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>Your Location</Popup>
            </Marker>
          )}

          {/* 📍 Destination Marker */}
          <Marker position={destination}>
            <Popup>Destination</Popup>
          </Marker>

          {/* 🔄 Find location */}
          <LocationFinder onLocationFound={setUserLocation} />

          {/* 🛣️ Routing line */}
          {userLocation && (
            <Routing userLocation={userLocation} destination={destination} />
          )}
        </MapContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
