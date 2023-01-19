import React from "react";
import {
  GoogleMap,
  useLoadScript,
  useJsApiLoader,
  MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
  height: "85vh",
  borderRadius: "5%",
  marginTop: "3.5rem",
};

function Gmap(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(props.center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <MarkerF position={props.center}></MarkerF>
        </>
      </GoogleMap>
    </div>
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
}

export default React.memo(Gmap);
