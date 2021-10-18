import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
} from 'react-router-dom';
import './App.css';
import ContextObj from './ContextObj';
import Login from './Components/Login';
import NavBar from './Components/NavBar/NavBar';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      <header className="App-header">
        TEST
      </header>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/navbar" component={NavBar} />
      </Router>
    </ContextObj.Provider>
  </div>
);

export default App;
