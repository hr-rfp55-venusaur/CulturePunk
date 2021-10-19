import './Home.css';
import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';

import CoinCanvas from './CoinCanvas';
import LandingCard from './LandingCard';

const Home = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div
      className="home-section home-container"
    >
      <div
        id="parallax-sec-1"
        className="home-section home-sec-1"
        style={{
          transform: `translateX(${offset * 0.8}px)`,
        }}
      >
        {/* <CoinCanvas /> */}
        {/* <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
        <LandingCard src="src/Components/Home/img/venusaur/scene.gltf"/>
        <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" /> */}
        <h2>CULTURE PUNK. <br/>THE NFT MARKETPLACE FOR ARTISTS, BY ARTISTS</h2>
      </div>
      <div
        id="parallax-sec-1"
        className="home-section home-sec-2"
      >
        <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
        <LandingCard src="src/Components/Home/img/venusaur/scene.gltf"/>
        <h2>Live Stream Here</h2>
      </div>
      <div
        className="home-section home-sec-3"
      >
        <h2>section three</h2>
      </div>
      <div
        className="home-section home-sec-4"
      >
        <h2>section four</h2>
      </div>
    </div>
  );
};

export default Home;
