import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const MapView = () => {

    return (
        <Map
            initialViewState={{
                longitude: -78.945063,
                latitude: 33.670658,
                zoom: 15,
            }}
            style={{ width:"100%", height:"500px" }}
            mapStyle="mapbox://styles/arkiv119/cli3nchst00xb01pohfi1gllc"
            mapboxAccessToken='pk.eyJ1IjoiYXJraXYxMTkiLCJhIjoiY2xpM21qNTZ2MTB1cTNlbzBmdmVnZHFveSJ9.LE4rmwB4XkbHxTqXNiZ5Gg'
            doubleClickZoom={false}
        >
            <Marker
                longitude={-78.945063}
                latitude={33.670658}
                anchor='bottom'
            ></Marker>
        </Map>
    )
}

export default MapView;
