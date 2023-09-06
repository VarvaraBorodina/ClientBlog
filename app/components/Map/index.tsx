'use client';

import 'leaflet/dist/leaflet.css';

import L, { LatLngExpression } from 'leaflet';
import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { ASSETS } from '@/constants';

import styles from './styled.module.scss';

const { LOCATION } = ASSETS;

const iconPerson = new L.Icon({
  iconUrl: LOCATION,
  iconRetinaUrl: LOCATION,
  iconSize: new L.Point(30, 30),
});

const Map = ({ places }: { places: LatLngExpression[] }) => {
  return (
    <MapContainer center={places[0]} zoom={5} scrollWheelZoom={false} className={styles.mapBlock}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place) => (
        <Marker position={place} icon={iconPerson} key={place.toString()} />
      ))}
    </MapContainer>
  );
};
export { Map };
