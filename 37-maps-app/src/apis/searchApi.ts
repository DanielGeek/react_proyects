import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'en',
    access_token: 'pk.eyJ1IjoiZGFuaWVsZ2VlayIsImEiOiJja291eHRlODQwMm5hMm5sOXM3YzlwajlxIn0.UORg5svptSrVMXj_FSENAg'
  }
})

export default searchApi;
