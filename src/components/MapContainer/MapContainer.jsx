import { GoogleMap, Marker, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import React, { useState, useMemo } from "react";
import makerImage from "./marker.png";
import "./renderMap.css";

const MapContainer = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBV9n2A8o7T7zhiYbz7IQIBH5USRlsDFBI" || "",
  });
  const center = useMemo(() => ({ lat: 33.670204, lng: -78.947204 }), []);

  const [isOpen, setIsOpen] = useState(true);
  const [zoom, setZoom] = useState(13);

  const handleMarkerDblClick = () => {
    setZoom(prevZoom => prevZoom + 1);
  };

  const mapOptions = {
    styles: [
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ebebeb"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ebebeb"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cec2b2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#cec2b2"
          }
        ]
      }
    ],
  }
  const position = {
    lat: 33.670204,
    lng: -78.947204
  }

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={position}
          zoom={zoom}
          options={mapOptions}
        >
          <MarkerF
            position={position}
            icon={{
              url: makerImage,
              scaledSize: new window.google.maps.Size(60, 60),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
            onDblClick={handleMarkerDblClick}
          >
            { isOpen &&
            <InfoWindow position={position}>
              <div className="bg-white flex flex-col justify-start rounded-lg px-5 py-3">
                  <p className="px-1 text-black text-center font-bold">MYRTLE BEACH, SC</p>
                  <p className="px-1 text-black text-center mt-3">1390 FARROW PARKWAY 3A&B</p>
                  <p className="px-1 text-black text-center">MYRTLE BEACH, SC 29577</p>
              </div>
            </InfoWindow>
            }
          </MarkerF>
        </GoogleMap>
      )}
    </div>
  );
};

export default MapContainer;