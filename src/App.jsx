import React from 'react';
import './App.css';
import ContextObj from './ContextObj';
// import Profile from './Components/Profile/Profile';
import EventCalendar from './Components/Calendar/EventCalendar';
import './Components/Calendar/calendar.css';

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      {/* <header className="App-header">
        TEST
      </header> */}
      <EventCalendar className="calendar" />
    </ContextObj.Provider>
  </div>
);

export default App;
