import React from 'react';
import './App.css';
import ContextObj from './ContextObj';

import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
const App = () => (
  <div className="App">
    <ContextObj.Provider>
      <header className="App-header">
        TEST
      </header>
      <Login />
      <Signup />
    </ContextObj.Provider>
  </div>
);

export default App;
