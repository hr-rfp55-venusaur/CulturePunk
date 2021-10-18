import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useProgress, OrbitControls } from '@react-three/drei';
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

const SpotLightCanvas = () => {
  const canvasRef = useRef();

  return (

    <div id="home-canvas">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{
          fov: 75, near: 0.1, far: 1000, position: [1, 2, 3],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Model
            url="src/Components/Home/img/venusaur/scene.gltf"
            scale={0.01}
            position={[0, 0, 0]}
          />
        </Suspense>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 2, 5]} color="yellow" />
        <OrbitControls
          enableRotate
          autoRotate
          autoRotateSpeed={0.4}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default SpotLightCanvas;
