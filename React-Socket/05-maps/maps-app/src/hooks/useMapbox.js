
import { useRef, useState, useEffect, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';

import { Subject } from 'rxjs';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsZ2VlayIsImEiOiJja291eHg4NGQwMm83MndwdWx3c3JwMm80In0.DuKBoxCaNqDsaVhMuyZvPA';

export const useMapbox = (puntoInicial) => {

  // Referenc to div of map
  const mapDiv = useRef();
  const setRef = useCallback( (node) => {
      mapDiv.current = node;
    },[]);

  // Referenc to markers
  const markers = useRef({});

  // Rxjs
  const movesMarkers = useRef( new Subject() );
  const newMarker = useRef( new Subject() );

  const map = useRef();
  const [coords, setCoords] = useState(puntoInicial);

  // function add markers
  const addMarker = useCallback( (ev, id) => {

    const { lng, lat } = ev.lngLat || ev;

    const marker = new mapboxgl.Marker();
    marker.id = id ?? v4();

    marker
        .setLngLat([ lng, lat ])
        .addTo( map.current )
        .setDraggable( true );

        markers.current[ marker.id ] = marker;

        if( !id ) {
          newMarker.current.next({
            id: marker.id,
            lng,
            lat
          });
        }

        // listening moves of marker
        marker.on('drag', ({ target }) => {
          const { id } = target;
          const { lng, lat } = target.getLngLat();
          movesMarkers.current.next({id, lng, lat});
        });

  },[]);

  useEffect(() => {

    const mapObj = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [puntoInicial.lng, puntoInicial.lat],
        zoom: puntoInicial.zoom
      });

    map.current = mapObj;
  }, [puntoInicial]);

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

  }, []);

  // Add market when click
  useEffect(() => {

    map.current?.on('click', addMarker);

  }, [addMarker]);

  return {
      addMarker,
      coords,
      markers,
      newMarker$: newMarker.current,
      movesMarkers$: movesMarkers.current,
      setRef
  }
}
