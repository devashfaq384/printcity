

import React, { useState, useEffect, useRef } from "react";

function CityMap() {
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGTuZbTDcH59nUfaYObGLxURldaJalDhs&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the map
    window.initMap = () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 31.335024, lng: 73.432862 },
        zoom: 10,
    });
    setMap(map)
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: "400px" , width: "250px" }}></div>
}

export default CityMap