import React, { useEffect } from 'react';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
  lng: -122.4725,
  lat: 37.8010,
  zoom: 13.5,
}

export const MapPage = () => {

  const { setRef, coords, newMarker$ } = useMapbox( puntoInicial );

  useEffect(() => {
    newMarker$.subscribe( marker => {
      // TODO: new marker emit
    });
  }, [newMarker$]);

  return (
    <>
      <div className="info">
        Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
      </div>
      <div
        ref={setRef}
        className="mapContainer"
      />
    </>
  )
}
