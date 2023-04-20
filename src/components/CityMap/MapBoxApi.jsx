import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

const MapBoxApi = () => {
  const dimension = useSelector((state) => state.sizeState);
  const styles = useSelector((state)=> state.styleState );

  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-122.431297);
  const [lat, setLat] = useState(37.773972);
  const [zoom, setZoom] = useState(12);
  //Search value is here
  const geocoderValue = useSelector((state) => state.map.geocoderValue);


  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: styles.style,
      center: [lng, lat],
      zoom,
    });

    // Wait for the map container to resize before calling map.resize()
    const resizeTimeout = setTimeout(() => {
      map.resize();
    }, 500);

    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      setLng(lng.toFixed(4));
      setLat(lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => {
      map.remove();
      clearTimeout(resizeTimeout);
    };
  }, [dimension, styles]);

  useLayoutEffect(() => {
      mapContainerRef.current.style.height = dimension.height;
      mapContainerRef.current.style.width = dimension.width;
  }, [dimension]);

  return (
    <div style={{ height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out"  }} >
      <div
        className='w-full h-full'
        ref={mapContainerRef}
        style={{ transition: "height 0.5s ease-out, width 0.5s ease-out" }}
      />    
    </div>
  );
};

export default MapBoxApi;
