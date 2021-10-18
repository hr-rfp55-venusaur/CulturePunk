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
// import Profile from './Components/Profile/Profile';
// import EventCalendar from './Components/Calendar/EventCalendar';
import './Components/Calendar/calendar.css';
// import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      {/* {/* <header className="App-header">
        TEST
      </header> */}
      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/navbar" component={NavBar} />
      </Router>
      {/* <EventCalendar /> */}
      {/* <Home /> */}
    </ContextObj.Provider>
  </div>
);

export default App;
