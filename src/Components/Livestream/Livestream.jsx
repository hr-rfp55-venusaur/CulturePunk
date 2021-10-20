import React from 'react';
import ChatBidding from './ChatBidding';
import Player from './Player/Player';
import LandingCard from '../Home/LandingCard';

const Livestream = () => (
  <div className="Livestream">
    <div className="Livestream-sub">
      <Player />
      <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
    </div>
    <ChatBidding />
  </div>
);

export default Livestream;
