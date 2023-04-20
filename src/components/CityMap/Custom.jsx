
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useSelector } from 'react-redux';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

const MapBoxApi = () => {
  const dimension = useSelector((state) => state.sizeState);
  const styles = useSelector((state)=> state.styleState );
  const searchQuery = useSelector((state)=>state.mapGeo)

  const [lng, setLng] = useState(-122.431297);
  const [lat, setLat] = useState(37.773972);
  const [zoom, setZoom] = useState(12);
  const searchInputRef = useRef(null);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

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

    mapRef.current = map;

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

    map.addControl(new mapboxgl.NavigationControl(), 'top-left');

    return () => {
      map.remove();
      clearTimeout(resizeTimeout);
    };
  }, [dimension, styles]);

  useEffect(() => {
    const geocoderInput = document.querySelector('.mapboxgl-ctrl-geocoder--input');

    if (geocoderInput) {
      geocoderInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          event.stopPropagation();
          geocoderInput.blur();
        }
      });
    }
  }, []);

  useLayoutEffect(() => {
    mapContainerRef.current.style.height = dimension.height;
    mapContainerRef.current.style.width = dimension.width;
  }, [dimension]);
  
  const handleSearch = async (event) => {
    // event.preventDefault();  
    // const searchQuery = searchInputRef.current.value;
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${mapboxgl.accessToken}`;
    const response = await fetch(geocodingUrl);
    const data = await response.json();
    const coordinates = data.features[0].center;
    mapRef.current.setCenter(coordinates);
};

  useEffect(() => {
    handleSearch()
  }, [searchQuery])
  console.log(dimension.class)
  return (
    <div className={ dimension.height && dimension.width === '300px' ? dimension.class : ' '} style={{ overflow: "hidden" ,height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out"  }}>
        <div ref={mapContainerRef} className="map-container" />
    </div>
    );
    };
    
    export default MapBoxApi;