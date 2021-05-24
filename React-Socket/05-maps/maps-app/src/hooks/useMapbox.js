
import { useRef, useState, useEffect, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';


export const useMapbox = (puntoInicial) => {

  // Referenc to div of map
  const mapDiv = useRef();
  const setRef = useCallback( (node) => {
      mapDiv.current = node;
    },[]);

    // Referenc to markers
    const markers = useRef({});

  const map = useRef();
  const [coords, setCoords] = useState(puntoInicial);

  // function add markers
  const addMarker = useCallback( (ev) => {

    const { lng, lat } = ev.lngLat;

    const marker = new mapboxgl.Marker();
    marker.id = v4(); //TODO: si el marcador ya tiene ID

    marker
        .setLngLat([ lng, lat ])
        .addTo( map.current )
        .setDraggable( true );

        markers.current[ marker.id ] = marker;

        // listening moves of marker
        marker.on('drag', ({ target }) => {
          const { id } = target;
          const { lng, lat } = target.getLngLat();
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
      setRef
  }
}
