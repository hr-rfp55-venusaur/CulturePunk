import React, {
  useRef, Suspense,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, useProgress, OrbitControls } from '@react-three/drei';

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
      <div id="coin-canvas">
        <Canvas
          ref={canvasRef}
          shadows
          camera={{
            fov: 70, near: 0.1, far: 1000, position: [3, 2, 4],
          }}
        >
          <Suspense fallback={<Loader />}>
            <Model
              url="src/Components/Home/img/ethereum/scene.gltf"
              scale={0.005}
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
              url="src/Components/Home/img/ethereum/scene.gltf"
              scale={0.0020}
              position={[0, 0, 2]}
            />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Coin
              url="src/Components/Home/img/ethereum/scene.gltf"
              scale={0.0020}
              position={[1, 0, -2]}
            />
          </Suspense>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 2, 5]} color="yellow" />
          <OrbitControls
            enableRotate
            autoRotate
            // autoRotateSpeed={0.7}
            enableZoom={false}
          />
        </Canvas>
      </div>
    </>
  );
};

export default CoinCanvas;
