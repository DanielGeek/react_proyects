import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';


const puntoInicial = {
  lng: 5,
  lat: 34,
  zoom: 10,
}

export const MapPage = () => {

  const mapDiv = useRef();
  const [ , setMap] = useState();

  useEffect(() => {

    const mapObj = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [puntoInicial.lng, puntoInicial.lat],
        zoom: puntoInicial.zoom
      });

    setMap(mapObj);

  }, [])


  return (
    <>
      <div
        ref={mapDiv}
        className="mapContainer"
      />
    </>
  )
}
