import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Carousel from '../Homepage/Carousel';

const style = { display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' };

const ExpandableCarousel = ({slideSelect}) => {
  const [loading, setLoading] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const handleClick = () => {
    setLoading(!loading);
    setShowCards(!showCards);
  };

  return (
    <div style={style}>
      <Switch
        checked={loading}
        onClick={handleClick}
        onChange={() => setLoading(!loading)}
        name="loading"
        color="primary"
      />
      <Carousel slideSelect={slideSelect} showCards={showCards} />
    </div>
  );
};

export default ExpandableCarousel;
