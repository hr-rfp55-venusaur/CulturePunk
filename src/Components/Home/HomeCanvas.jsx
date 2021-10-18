// import './Home.css';
import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useProgress, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import { Model, Coin } from './3DModels';

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

const HomeCanvas = () => {
  const canvasRef = useRef();

  return (

    <div id="canvas">
      <Canvas
        ref={canvasRef}
        shadows
        camera={{
          fov: 75, near: 0.1, far: 1000, position: [1, 2, 3],
        }}
      >
        <Suspense fallback={<Loader />}>
          <Model
            url="src/Components/Home/img/bitcoin/scene.gltf"
            scale={0.01}
            position={[0, 0, 0]}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Coin
            url="src/Components/Home/img/ethereum/scene.gltf"
            scale={0.001}
            position={[2, 1, 0]}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Coin
            url="src/Components/Home/img/ethereum/scene.gltf"
            scale={0.001}
            position={[-2, 0, 1]}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Coin
            url="src/Components/Home/img/bitcoin/scene.gltf"
            scale={0.002}
            position={[0, 0, 2]}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Coin
            url="src/Components/Home/img/bitcoin/scene.gltf"
            scale={0.002}
            position={[1, 0, -2]}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Coin
            url="src/Components/Home/img/bitcoin/scene.gltf"
            scale={0.002}
            position={[-1, -1, -1]}
          />
        </Suspense>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 2, 5]} color="yellow" />
        <OrbitControls
          enableRotate
            // autoRotate={true}
            // // autoRotateSpeed={0.7}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default HomeCanvas;
