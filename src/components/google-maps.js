import { useState, useRef, useCallback } from 'react';
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
  getDetails,
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

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

function RenderMap() {
  const [marker, setMarker] = useState({ lat: 35.72718, lng: -78.854149 });
  const [selected, setSelected] = useState(null);
  const [resultsArray, setResultsArray] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng, results }) => {
    setMarker({ lat, lng });
    setResultsArray({ results });
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  if (loadError) return 'Error Loading Map';
  if (!isLoaded) return 'Loading Map';

  return (
    <div>
      <h5 className="map-header">Find Pour-Over Coffee Near You!</h5>
      <Search panTo={panTo} />
      <GoogleMap
        onLoad={onMapLoad}
        options={options}
        mapContainerStyle={containerStyle}
        center={{ lat: 35.72718, lng: -78.854149 }}
        zoom={10}
      >
        <Marker position={marker} onClick={() => setSelected(marker)}>
          {selected ? (
            <InfoWindow
              position={marker}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <p>{resultsArray.results[0].formatted_address}</p>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      </GoogleMap>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Search({ panTo }) {
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

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng, results });
    } catch (error) {
      console.log('😱 Error: ', error);
    }
  };

  return (
    <div>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
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
}

export default RenderMap;
