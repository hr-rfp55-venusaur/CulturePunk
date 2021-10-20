import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Html, useProgress, OrbitControls, Cylinder,
} from '@react-three/drei';
import * as THREE from 'three';

import { Model } from './3DModels';

// replace with material UI loading icon
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {progress}
      {' '}
      % loaded
    </Html>
  );
}

const SpotLightCanvas = ( {src} ) => {
  const canvasRef = useRef();

  return (

    <div id="spotlight-canvas">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{
          fov: 90, near: 0.1, far: 1000, position: [2, 2, 3],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Model
            url={src}
            scale={0.015}
            position={[0, 0, 0]}
          />
          <Cylinder
            args={[1, 1, 0.5, 15]}
            position={[0, -1, 0]}
            scale={1.8}
          >
            <meshPhongMaterial attach="material" color="#f3f3f3" />
          </Cylinder>
        </Suspense>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 2, 5]} color="yellow" />
        <OrbitControls
          enableRotate
          autoRotate
          // autoRotateSpeed={0.4}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default SpotLightCanvas;
