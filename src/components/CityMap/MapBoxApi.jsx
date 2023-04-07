import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapBoxApi = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYXNoZmFxMzg0IiwiYSI6ImNsZnc3bjV5czAzdHkzdHRhYjI0OG10dzkifQ.wuNcKy4xCuGNn8QCSyrJBg';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 3,
      center: [7.5, 58],
      style: 'mapbox://styles/mapbox/light-v11',
      antialias: true,
      projection: 'mercator',
    });

    const highlightLayer = {
      id: 'highlight',
      type: 'custom',
      onAdd: function (map, gl) {
        const vertexSource = `
            uniform mat4 u_matrix;
            attribute vec2 a_pos;
            void main() {
                gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);
            }`;

        const fragmentSource = `
            void main() {
                gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
            }`;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexSource);
        gl.compileShader(vertexShader);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentSource);
        gl.compileShader(fragmentShader);

        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        this.aPos = gl.getAttribLocation(this.program, 'a_pos');

        const helsinki = mapboxgl.MercatorCoordinate.fromLngLat({
          lng: 25.004,
          lat: 60.239,
        });
        const berlin = mapboxgl.MercatorCoordinate.fromLngLat({
          lng: 13.403,
          lat: 52.562,
        });
        const kyiv = mapboxgl.MercatorCoordinate.fromLngLat({
          lng: 30.498,
          lat: 50.541,
        });

        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array([helsinki.x, helsinki.y, berlin.x, berlin.y, kyiv.x, kyiv.y]),
          gl.STATIC_DRAW
        );
      },
      render: function (gl, matrix) {
        gl.useProgram(this.program);
        gl.uniformMatrix4fv(gl.getUniformLocation(this.program, 'u_matrix'), false, matrix);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.enableVertexAttribArray(this.aPos);
        gl.vertexAttribPointer(this.aPos, 2, gl.FLOAT, false, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
      },
    };

    map.on('load', () => {
      map.addLayer(highlightLayer, 'building');
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} id='map' ></div>
}

export default MapBoxApi;