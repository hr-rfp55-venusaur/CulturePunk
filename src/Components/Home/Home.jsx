import './Home.css';
import React, {
  useRef, useState, useEffect, Suspense,
} from 'react';
import { withRouter, Link } from 'react-router-dom';


import UnstyledButtonCustom from './SignUpButton';
import Carousel from '../Homepage/Carousel';
import CoinCanvas from './CoinCanvas';
import LandingCard from './LandingCard';
import NFTVideo from './NFTVideo';
import Player from '../Livestream/Player/Player';

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
        <CoinCanvas />
        {/* <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
        <LandingCard src="src/Components/Home/img/venusaur/scene.gltf"/>
        <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" /> */}
        <h2 className="culture-punk-heading">
          .CULTURE PUNK.
          <br />
          <p className="landing-sub-heading">A new kind of art access for a new world of virtual community.</p>
        </h2>
        <p className="byline-statement">
          By honoring our collective lived experiences
          in a virtual world, we re-imagine an art space that operates to serve and see everyone.
          {' '}
          <br />
          {' '}
        </p>
        <p style={{ 'fontFamily': 'PM-light-shadow', 'fontSize': '3vw', color: 'white' }}>
          <em>We are artists.</em>
          {' '}
          <br />
          {' '}
          <em>We are you.</em>
        </p>
        <Link to='/signup' style={{position: 'absolute', bottom: '0vh', left: '0vw'}}><UnstyledButtonCustom /></Link>
        
      </div>
      <div
        className="home-section home-sec-2"
      >
        <h2
          className="home-section-header"
        >
          Live Events
        </h2>
        <div className="section-2-content">
          <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
          {/* <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
          <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" /> */}
          <Player />
        </div>
      </div>
      <div
        className="home-section home-sec-3"
      >
        <h2 className="home-carousel-banner">New Releases</h2>
        <Carousel slideSelect={0} />
        <h2 className="home-carousel-banner">Trending</h2>
        <Carousel slideSelect={1} />
      </div>
      <div
        className="home-section home-sec-4"
      >
        <h2 className="home-section-header">Learn More About NFTs</h2>
        <NFTVideo />
      </div>
    </div>
  );
};

export default withRouter(Home);
