import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useProgress, OrbitControls, Billboard, Plane, Text, } from '@react-three/drei';
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

const CoinCanvas = () => {
  const canvasRef = useRef();

  return (
    <>
      {/* <h1 className="hero-statement">
        NFT MARKETPLACE HERO STATEMENT
        NFT MARKETPLACE HERO STATEMENT
        NFT MARKETPLACE HERO STATEMENT
        NFT MARKETPLACE HERO STATEMEN
      </h1> */}
      <div id="coin-canvas">
        <Canvas
          ref={canvasRef}
          shadows
          camera={{
            fov: 70, near: 0.1, far: 1000, position: [1, 3, 4],
          }}
        >
          {/* <Plane args={[5, 3]} material-color="red" position={[0, 0, 0]} /> */}
          {/* <Text
            fontSize={0.6}
            outlineWidth="5%"
            outlineColor="#000000"
            outlineOpacity={1}
            position={[0, 2, 0]}
          >
            NFT MARKETPLACE
          </Text> */}
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
              scale={0.0010}
              position={[-2, 0, 1]}
            />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Coin
              url="src/Components/Home/img/bitcoin/scene.gltf"
              scale={0.0020}
              position={[0, 0, 2]}
            />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Coin
              url="src/Components/Home/img/bitcoin/scene.gltf"
              scale={0.0020}
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
            autoRotate
            // autoRotateSpeed={0.7}
            // enableZoom
          />
        </Canvas>
      </div>
    </>
  );
};

export default CoinCanvas;
