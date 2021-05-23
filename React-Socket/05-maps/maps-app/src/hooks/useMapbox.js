
import { useRef, useState, useEffect, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';


export const useMapbox = (puntoInicial) => {

  // Referenc to div of map
  const mapDiv = useRef();
  const setRef = useCallback( (node) => {
      mapDiv.current = node;
    },[])


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

  }, [])

  return {
      coords,
      setRef
  }
}
