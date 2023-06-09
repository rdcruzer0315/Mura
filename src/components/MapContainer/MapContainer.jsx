import { GoogleMap, Marker, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import React, { useState, useMemo } from "react";
import makerImage from "./marker.png";
import "./renderMap.css";
import { handleHideAddress, handleShowAddress } from "../../store/Admin";
import { useDispatch, useSelector } from "react-redux";

const MapContainer = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBV9n2A8o7T7zhiYbz7IQIBH5USRlsDFBI" || "",
  });
  const center = useMemo(() => ({ lat: 33.670050, lng: -78.946937 }), []);

  const [zoom, setZoom] = useState(13);
  const dispatch = useDispatch();

  const handleMarkerDblClick = () => {
    setZoom(18);
  };

  const showDescription = () => {
    setZoom(18);
    dispatch(handleShowAddress());
  }

  const hideDescription = () => {
    dispatch(handleHideAddress());
  }

  const isOpen = useSelector((state) => state.admin.showAddress);

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
    lat: 33.670050,
    lng: -78.946937
  }

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
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
            onClick={showDescription}
            onDblClick={handleMarkerDblClick}
          >
            {isOpen &&
            <InfoWindow position={position} onCloseClick={hideDescription} zIndex={10}>
              <div className="bg-white flex flex-col justify-start rounded-lg px-3 py-3">
                  <p className="px-1 text-black text-base font-bold">Mura</p>
                  <p className="px-1 text-black text-left font-medium mt-3">MYRTLE BEACH, SC</p>
                  <p className="px-1 text-black text-left font-medium mt-3">1390 FARROW PARKWAY 3A&B</p>
                  <p className="px-1 text-black text-left font-medium">MYRTLE BEACH, SC 29577</p>
                  <a target="_blank" href="https://www.google.com/maps/place/3716+Farrow+Pkwy,+Myrtle+Beach,+SC+29577,+USA/@33.6701197,-78.9473187,19z/data=!3m1!4b1!4m5!3m4!1s0x89006a1236785a5f:0xd934b93184b1a3bb!8m2!3d33.6701186!4d-78.946675?entry=ttu"
                    className="text-[#C27A4A] mt-3 text-left font-medium underline"
                  >GET DIRECTIONS</a>
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