import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useContactMap } from './useContactMap';
import './ContactMap.css';

const ContactMap = () => {
  const { position, mapConfig } = useContactMap();

  return (
    <div className="contact-map">
      <MapContainer
        center={position}
        zoom={mapConfig.zoom}
        style={{ height: '400px', width: '100%' }}
        className="leaflet-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div className="map-popup">
              <h4>Career Link Headquarters</h4>
              <p>123 Business Avenue<br />New York, NY 10001</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;