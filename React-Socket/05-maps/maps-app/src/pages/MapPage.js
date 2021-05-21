import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';


const puntoInicial = {
  lng: -122.4725,
  lat: 37.8010,
  zoom: 13.5,
}

export const MapPage = () => {

  const mapDiv = useRef();
  const [ map, setMap] = useState();
  const [coords, setCoords] = useState(puntoInicial);

  useEffect(() => {

    const mapObj = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [puntoInicial.lng, puntoInicial.lat],
        zoom: puntoInicial.zoom
      });

    setMap(mapObj);

  }, []);

  // Cuando se mueve el mapa
  useEffect(() => {

    map?.on('move', () => {
      const { lng, lat } = map.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    });

  }, [map])


  return (
    <>
      <div className="info">
        Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div
        ref={mapDiv}
        className="mapContainer"
      />
    </>
  )
}
