// import { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';

// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapBoxApi = () => {
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     mapboxgl.accessToken =
//       'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       zoom: 3,
//       center: [7.5, 58],
//       style: 'mapbox://styles/mapbox/light-v11',
//       antialias: true,
//       projection: 'mercator',
//     });

//     const highlightLayer = {
//       id: 'highlight',
//       type: 'custom',
//       onAdd: function (map, gl) {
//         const vertexSource = `
//             uniform mat4 u_matrix;
//             attribute vec2 a_pos;
//             void main() {
//                 gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
//             }`;

//         const fragmentSource = `
//             void main() {
//                 gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
//             }`;

//         const vertexShader = gl.createShader(gl.VERTEX_SHADER);
//         gl.shaderSource(vertexShader, vertexSource);
//         gl.compileShader(vertexShader);

//         const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
//         gl.shaderSource(fragmentShader, fragmentSource);
//         gl.compileShader(fragmentShader);

//         this.program = gl.createProgram();
//         gl.attachShader(this.program, vertexShader);
//         gl.attachShader(this.program, fragmentShader);
//         gl.linkProgram(this.program);

//         this.aPos = gl.getAttribLocation(this.program, 'a_pos');

//         const helsinki = mapboxgl.MercatorCoordinate.fromLngLat({
//           lng: 25.004,
//           lat: 60.239,
//         });
//         const berlin = mapboxgl.MercatorCoordinate.fromLngLat({
//           lng: 13.403,
//           lat: 52.562,
//         });
//         const kyiv = mapboxgl.MercatorCoordinate.fromLngLat({
//           lng: 30.498,
//           lat: 50.541,
//         });

//         this.buffer = gl.createBuffer();
//         gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
//         gl.bufferData(
//           gl.ARRAY_BUFFER,
//           new Float32Array([helsinki.x, helsinki.y, berlin.x, berlin.y, kyiv.x, kyiv.y]),
//           gl.STATIC_DRAW
//         );
//       },
//       render: function (gl, matrix) {
//         gl.useProgram(this.program);
//         gl.uniformMatrix4fv(gl.getUniformLocation(this.program, 'u_matrix'), false, matrix);
//         gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
//         gl.enableVertexAttribArray(this.aPos);
//         gl.vertexAttribPointer(this.aPos, 2, gl.FLOAT, false, 0, 0);
//         gl.enable(gl.BLEND);
//         gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
//         gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
//       },
//     };

//     map.on('load', () => {
//       map.addLayer(highlightLayer, 'building');
//     });

//     return () => map.remove();
//   }, []);

//   return <div ref={mapContainer} id='map' ></div>
// }

// export default MapBoxApi;


// Map.js


///////// working api


// import React, { useEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import { useSelector } from 'react-redux';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

// const MapBoxApi = () => {
//   const dimension = useSelector((state)=>state.sizeState)
//   const mapContainerRef = useRef(null);
//   const [lng, setLng] = useState(-122.431297);
//   const [lat, setLat] = useState(37.773972);
//   const [zoom, setZoom] = useState(12);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom,
//       width: '100%',
//       height: '400px'
//     });

//     map.on('move', () => {
//       const { lng, lat } = map.getCenter();
//       setLng(lng.toFixed(4));
//       setLat(lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     return () => map.remove();
//   }, []);

//   return (
//     <div>
//       <div  ref={mapContainerRef}  style={{ height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out" }} className='w-fit' >
//       </div>
//     </div>
//   );
// };

// export default MapBoxApi;






// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import { useSelector } from 'react-redux';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

// const MapBoxApi = () => {
//   const dimension = useSelector((state) => state.sizeState)
//   const mapContainerRef = useRef(null);
//   const textContainerRef = useRef(null);
//   const [lng, setLng] = useState(-122.431297);
//   const [lat, setLat] = useState(37.773972);
//   const [zoom, setZoom] = useState(12);

//   console.log(dimension.height)

//   useLayoutEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom,
//     });
    
//     map.on('resize', () => {
//       map.resize();
//     });

//     map.on('move', () => {
//       const { lng, lat } = map.getCenter();
//       setLng(lng.toFixed(4));
//       setLat(lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     return () => map.remove();
//   }, [dimension.height, dimension.width , lng ,lat ,zoom]);


//   const text = "This is some text over the map";
//   const textStyle = {
//     position: "absolute",
//     zIndex: 1,
//     bottom:0,
//     backgroundColor: "white",
//     padding: "10px",
//     borderRadius: "5px",
//   };

//   return (
//     <div>
//       <div
//         ref={mapContainerRef}
//         style={{ height: dimension.height, width: dimension.width, transition: "height 0.5s ease-out, width 0.5s ease-out" }}
//       />
//       <div ref={textContainerRef} style={textStyle} className='w-full' >
//         {text}
//       </div>
//     </div>
//   );
// };

// export default MapBoxApi;



// import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import { useSelector } from 'react-redux';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

// const MapBoxApi = () => {
//   const dimension = useSelector((state) => state.sizeState);
//   const styles = useSelector((state)=> state.styleState );

//   const mapContainerRef = useRef(null);
//   const [lng, setLng] = useState(-122.431297);
//   const [lat, setLat] = useState(37.773972);
//   const [zoom, setZoom] = useState(12);

//   useEffect(() => {
//     if (!mapContainerRef.current) {
//       return;
//     }

//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: styles.style,
//       center: [lng, lat],
//       zoom,
//     });

//     // Wait for the map container to resize before calling map.resize()
//     const resizeTimeout = setTimeout(() => {
//       map.resize();
//     }, 500);

//     map.on('move', () => {
//       const { lng, lat } = map.getCenter();
//       setLng(lng.toFixed(4));
//       setLat(lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     return () => {
//       map.remove();
//       clearTimeout(resizeTimeout);
//     };
//   }, [dimension, styles]);

//   useLayoutEffect(() => {
//       mapContainerRef.current.style.height = dimension.height;
//       mapContainerRef.current.style.width = dimension.width;
//   }, [dimension]);

//   return (
//     <div style={{ height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out"  }} >
//       <div
//         className='w-full h-full'
//         ref={mapContainerRef}
//         style={{ transition: "height 0.5s ease-out, width 0.5s ease-out" }}
//       />    
//     </div>
//   );
// };

// export default MapBoxApi;

// import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import mapboxgl from 'mapbox-gl';
// import { rewire } from 'rewire';
// import MapboxWorker from 'worker-loader';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

// // Use `rewire` to modify the Webpack configuration and add a new rule to transpile the Mapbox Web Worker bundle
// const rewireWebpack = rewire('react-scripts/scripts/build.js');
// rewireWebpack.__set__('config', function (webpackConfig) {
//   // Add a new rule to transpile the Mapbox Web Worker bundle separately from the rest of your code
//   webpackConfig.module.rules.push({
//     test: /\.worker\.js$/,
//     use: { loader: 'worker-loader' }
//   });
//   return webpackConfig;
// });

// const MapBoxApi = () => {
//   const dimension = useSelector((state) => state.sizeState);
//   const styles = useSelector((state)=> state.styleState );

//   const mapContainerRef = useRef(null);
//   const [lng, setLng] = useState(-122.431297);
//   const [lat, setLat] = useState(37.773972);
//   const [zoom, setZoom] = useState(12);

//   useEffect(() => {
//     if (!mapContainerRef.current) {
//       return;
//     }

//     // Set the Mapbox worker class to the MapboxWorker instance
//     mapboxgl.workerClass = MapboxWorker;

//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: styles.style,
//       center: [lng, lat],
//       zoom,
//     });

//     // Wait for the map container to resize before calling map.resize()
//     const resizeTimeout = setTimeout(() => {
//       map.resize();
//     }, 500);

//     map.on('move', () => {
//       const { lng, lat } = map.getCenter();
//       setLng(lng.toFixed(4));
//       setLat(lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     return () => {
//       map.remove();
//       clearTimeout(resizeTimeout);
//     };
//   }, [dimension, styles]);

//   useLayoutEffect(() => {
//       mapContainerRef.current.style.height = dimension.height;
//       mapContainerRef.current.style.width = dimension.width;
//   }, [dimension]);

//   return (
//     <div style={{ height: dimension.height , width: dimension.width ,transition: "height 0.5s ease-out, width 0.5s ease-out"  }} >
//       <div
//         className='w-full h-full'
//         ref={mapContainerRef}
//         style={{ transition: "height 0.5s ease-out, width 0.5s ease-out" }}
//       />    
//     </div>
//   );
// };

// export default MapBoxApi;

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

