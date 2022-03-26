import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

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

