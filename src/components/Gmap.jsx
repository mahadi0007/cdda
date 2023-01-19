import React from "react";
import {
  GoogleMap,
  useLoadScript,
  useJsApiLoader,
  MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "30vw",
  height: "85vh",
  borderRadius: "5%",
  marginTop: "3.5rem",
};

const markers = [
  {
    name: "loc-1",
    location: {
      lat: 25.7638,
      lng: 100.4067,
    },
  },
  {
    name: "loc-2",
    location: {
      lat: 23.7638,
      lng: 90.4067,
    },
  },
  {
    name: "loc-3",
    location: {
      lat: 27.7638,
      lng: 90.4067,
    },
  },
  {
    name: "loc-4",
    location: {
      lat: 30.7638,
      lng: 91.4067,
    },
  },
];

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
          {/* {markers.map((marker, key) => {
            return (
              <div key={marker.name}>
                {console.log("marker")}
                {console.log(marker)}
                <MarkerF position={marker.location}></MarkerF>
              </div>
            );
          })} */}
        </>
      </GoogleMap>
    </div>
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
}

// export default Gmap;
export default React.memo(Gmap);

// function Map() {
//   return (
//     <GoogleMap
//       zoom={10}
//       center={{ lat: 44, lng: -80 }}
//       mapContainerStyle="width:10%, height=50vh"
//     ></GoogleMap>
//   );
// }
