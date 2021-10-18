import './Home.css';
import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useProgress, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
// import feast from './img/feast.jpg';
// import touch from './img/touch.jpg';

// import venusaur from './img/venusaur/scene.gltf';
import { Model, Coin } from './3DModels';

//replace with material UI loading icon
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

const Home = () => {
  const [offset, setOffset] = useState(0);

  const canvasRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  // useFrame(() => {
  //   canvasRef.camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
  // })

  return (
    <>
      <div
        id="parallax"
        style={{
          transform: `translateX(${offset * 0.8}px)`,
        }}
      >
        <h2>NFT MARKETPLACE: HERO STATEMENT</h2>
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
                url="src/Components/Home/img/venusaur/scene.gltf"
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
        {/* <h1>SPACING DIV</h1> */}
      </div>
      <div>
        <h2>section two</h2>
      </div>
      <div>
        <h2>section three</h2>
      </div>
      <div>
        <h2>section four</h2>
      </div>
    </>
  );
};

export default Home;
