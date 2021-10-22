import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Model = ({ url, scale, position }) => {
  const gltf = useLoader(GLTFLoader, url);
  const myModel = useRef();

  useFrame(({ clock }) => {
    myModel.current.position.y = Math.sin(3 * clock.getElapsedTime()) * 0.03;
  });
  return (
    <primitive ref={myModel} object={gltf.scene} scale={scale} position={position} />
  );
};

export const Coin = ({ url, scale, position }) => {
  const gltf = useLoader(GLTFLoader, url);
  // const scene = gltf.scene.clone(true);
  const scene = gltf.scene.clone(true);
  const myModel = useRef();

  useFrame(({ clock }) => {
    myModel.current.position.y = Math.sin(3 * clock.getElapsedTime()) * 0.03;
  });
  return (
    <primitive ref={myModel} object={scene} scale={scale} position={position} />
  );
};
