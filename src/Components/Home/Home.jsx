import './Home.css';
import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';

import HomeCanvas from './HomeCanvas';
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
        id="parallax"
        className="home-section home-sec-1"
        style={{
          transform: `translateX(${offset * 0.8}px)`,
        }}
      >
        {/* <HomeCanvas /> */}
        <LandingCard />
        {/* <h2>NFT MARKETPLACE: HERO STATEMENT</h2> */}
      </div>
      <div
        className="home-section home-sec-2"
      >
        <h2>section two</h2>
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
