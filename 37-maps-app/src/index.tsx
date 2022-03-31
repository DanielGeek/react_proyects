import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsZ2VlayIsImEiOiJja291eHRlODQwMm5hMm5sOXM3YzlwajlxIn0.UORg5svptSrVMXj_FSENAg';

if ( !navigator.geolocation ) {
  alert('You browser not have geolocation option');
  throw new Error('You browser not have geolocation option');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

