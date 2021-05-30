import React, { useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketContext';
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
  lng: -122.4725,
  lat: 37.8010,
  zoom: 13.5,
}

export const MapPage = () => {

  const { setRef, coords, newMarker$, movesMarkers$, addMarker } = useMapbox( puntoInicial );
  const { socket } = useContext( SocketContext );

  useEffect(() => {
    newMarker$.subscribe( marker => {
      socket.emit('marker-new', marker);
    });
  }, [newMarker$, socket]);

  useEffect(() => {
    movesMarkers$.subscribe( marker => {
      console.log(marker.id);
    });
  }, [movesMarkers$]);

  // Listen markers existent
  useEffect(() => {
    socket.on('markers-actives', (markers) => {
      for( const key of Object.keys( markers )) {
        addMarker(markers[key], key);
      }
    });
  }, [socket, addMarker]);

  // Listen new markers
  useEffect(() => {
    socket.on('marker-new', (marker) => {
      addMarker(marker, marker.id);
    });
  }, [socket, addMarker]);

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
