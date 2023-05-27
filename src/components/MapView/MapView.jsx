import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MapView = () => {

    return (
        <Map
            initialViewState={{
                longitude: -78.947204,
                latitude: 33.670204,
                zoom: 12,
            }}
            style={{ width:"100%", height:"400px" }}
            mapStyle="mapbox://styles/arkiv119/cli3nchst00xb01pohfi1gllc"
            mapboxAccessToken='pk.eyJ1IjoiYXJraXYxMTkiLCJhIjoiY2xpNGl4ZnQzMG9obTNnbndwc2RzcnN5aiJ9.Bh4U17FH5OYm12NHSGlSNw'
            doubleClickZoom={false}
        >
            <Marker
                longitude={-78.947204}
                latitude={33.670204}
                anchor='bottom'
            >
                <div className='flex flex-col items-center'>
                    <div className="bg-white shadow shadow-gray-500 flex flex-col justify-center rounded-lg px-5 py-3">
                        <p className="cursor-pointer text-gray-500 text-xs text-right">X</p>
                        <p className="px-1 text-black text-center">MYRTLE BEACH, SC</p>
                        <p className="px-1 text-black text-center">1390 FARROW PARKWAY 3A&B</p>
                        <p className="px-1 text-black text-center">MYRTLE BEACH, SC 29577</p>
                    </div>
                    <img className="z-10 w-12" src="assets/Home/marker.png" alt='marker' />
                </div>
            </Marker>
        </Map>
    )
}

export default MapView;
