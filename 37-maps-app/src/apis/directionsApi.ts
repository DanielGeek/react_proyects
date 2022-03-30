import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiZGFuaWVsZ2VlayIsImEiOiJja291eHRlODQwMm5hMm5sOXM3YzlwajlxIn0.UORg5svptSrVMXj_FSENAg'
  }
})

export default directionsApi;
