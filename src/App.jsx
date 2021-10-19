import React from 'react';
import './App.css';
import ContextObj from './ContextObj';
import Profile from './Components/Profile/Profile';
// import EventCalendar from './Components/Calendar/EventCalendar';
import './Components/Calendar/calendar.css';
import './Components/Profile/Profile.css';
// import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Market from './Components/Market/Market';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      {/* <header className="App-header">
        TEST
      </header> */}
      {/* <EventCalendar /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Market /> */}
    </ContextObj.Provider>
  </div>
);

export default App;
