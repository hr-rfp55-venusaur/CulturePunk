import React from 'react';
import './App.css';
import CardMedia from '@mui/material/CardMedia';
import ContextObj from './ContextObj';
import Carousel from './Components/Homepage/Carousel';
import BasicTile from './Components/Homepage/BasicTile';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      <div className="testing">
        <Carousel />
      </div>
      {/* <header className="App-header">
        <BasicTile title={'Venusaur (when-you-soar)'} desc={'Leaf Pokemon'}>
          <CardMedia
            component="img"
            height="350"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFHjLxyyECE-O4VS87ylVLdcDdsS_5Zxkaf40Oar_KqjgxdNk&s"
            alt="RYAN"
          />
        </BasicTile>
      </header> */}

    </ContextObj.Provider>
  </div>
);

export default App;
