import React from 'react';
import './App.css';
import ContextObj from './ContextObj';
import Market from './Components/Market/Market';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      {/* <header className="App-header">
        TEST
      </header> */}
      <Market />
    </ContextObj.Provider>
  </div>
);

export default App;
