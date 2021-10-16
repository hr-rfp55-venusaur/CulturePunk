import React from 'react';
import './App.css';
import Login from './Components/Login';
import ContextObj from './ContextObj';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      <header className="App-header">
        TEST
      </header>
      <Login />
    </ContextObj.Provider>
  </div>
);

export default App;
