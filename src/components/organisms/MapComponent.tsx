import dynamic from 'next/dynamic';
import { LayerProps } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import geojsonData from '@/../public/ariadne_office_geojson.json';
import Loader from '../atoms/Loader';
import { MapComponentProps } from '@/types';
// Disables server-side rendering and displays a loader during import.
const Map = dynamic(() => import('react-map-gl').then((mod) => mod.Map), {
  ssr: false,
  loading: () => <Loader />,
});
const Source = dynamic(() => import('react-map-gl').then((mod) => mod.Source), {
  ssr: false,
  loading: () => <Loader />,
});
const Layer = dynamic(() => import('react-map-gl').then((mod) => mod.Layer), {
  ssr: false,
});
//  Renders an interactive Mapbox map with GeoJSON data layers.
const MapComponent: React.FC<MapComponentProps> = ({ initialViewState, mapboxToken }) => {
  const layerStyle: LayerProps = {
    id: 'geojson-layer',
    type: 'fill',
    paint: {
      'fill-color': '#088',
      'fill-opacity': 0.5,
      'fill-outline-color': '#000',
    },
  };
  if (!mapboxToken) {
    return (
      <div className="text-center text-red-500">
        Map cannot be displayed. Mapbox token is missing.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Office Map</h2>
      <Map
        initialViewState={initialViewState}
        style={{
          width: '100%',
          height: '500px',
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxToken}
      >
        <Source id="my-data" type="geojson" data={geojsonData}>
          <Layer {...layerStyle} />
          <Layer
            id="label-layer"
            type="symbol"
            source="my-data"
            layout={{
              'text-field': ['get', 'name'],
              'text-size': 14,
              'text-anchor': 'top',
              'text-allow-overlap': false,
            }}
            paint={{
              'text-color': '#000',
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default MapComponent;
