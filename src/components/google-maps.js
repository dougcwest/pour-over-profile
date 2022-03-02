import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const centerApex = {
  lat: 35.72718,
  lng: -78.854149,
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

const myMap = () => (
  <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerApex}
      zoom={10}
    />
  </LoadScript>
);

function renderMap() {
  return (
    <div>
      <h1>Find Coffee!</h1>
      {myMap()}
    </div>
  );
}

export default renderMap;
