import './Home.css';
import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';

import HomeCanvas from './HomeCanvas';

const Home = () => {
  const [offset, setOffset] = useState(0);

  // const canvasRef = useRef();

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
        <HomeCanvas />
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
