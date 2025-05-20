"use client"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const position: LatLngExpression = [51.505, -0.09];


export default function TerminalModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.terminal} Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>Hello from Leaflet!</Popup>
      </Marker>
    </MapContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
