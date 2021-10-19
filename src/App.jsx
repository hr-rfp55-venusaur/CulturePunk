import React from 'react';
import './App.css';
import ContextObj from './ContextObj';
// import Profile from './Components/Profile/Profile';
import EventCalendar from './Components/Calendar/EventCalendar';
// import Profile from './Components/Profile/Profile';
// import Home from './Components/Home/Home';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      <EventCalendar />
      {/* <Home /> */}
    </ContextObj.Provider>
  </div>
);

export default App;
