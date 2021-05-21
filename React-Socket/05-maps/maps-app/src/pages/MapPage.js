import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';


const puntoInicial = {
  lng: -122.4725,
  lat: 37.8010,
  zoom: 13.5,
}

export const MapPage = () => {

  const mapDiv = useRef();
  // const [ map, setMap] = useState();
  const map = useRef();
  const [coords, setCoords] = useState(puntoInicial);

  useEffect(() => {

    const mapObj = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [puntoInicial.lng, puntoInicial.lat],
        zoom: puntoInicial.zoom
      });

    map.current = mapObj;
  }, []);

  // Cuando se mueve el mapa
  useEffect(() => {

    map.current?.on('move', () => {
      const { lng, lat } = map.current.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.current.getZoom().toFixed(2)
      })
    });

  }, [])


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
