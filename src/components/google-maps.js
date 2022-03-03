import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const libraries = ['places'];

const centerApex = {
  lat: 35.72718,
  lng: -78.854149,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Search = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 35.72718, lng: () => -78.854149 },
      radius: 40 * 1000,
    },
    debounce: 200,
  });

  return (
    <div>
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng);
          } catch (error) {
            console.log('error');
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Find some coffee!"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};

function RenderMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  if (loadError) return 'Error Loading Map';
  if (!isLoaded) return 'Loading Map';

  return (
    <div>
      <h1>Find Coffee!</h1>
      <Search />
      <GoogleMap
        options={options}
        mapContainerStyle={containerStyle}
        center={centerApex}
        zoom={10}
      >
        <Marker
          position={centerApex}
          onClick={(address) => console.log(address)}
        />
      </GoogleMap>
    </div>
  );
}

export default RenderMap;
