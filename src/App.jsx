import React from 'react';
import './App.css';
import ContextObj from './ContextObj';
import Profile from './Components/Profile/Profile';
// import EventCalendar from './Components/Calendar/EventCalendar';
import './Components/Calendar/calendar.css';
import './Components/Profile/Profile.css';
<<<<<<< HEAD
// import Home from './Components/Home/Home';
=======
// import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
>>>>>>> d44bb461630dafe7113974b2293498b029d8d109

const App = () => (
  <div className="App">
    <ContextObj.Provider>
      {/* <header className="App-header">
        TEST
      </header> */}
      {/* <EventCalendar /> */}
      {/* <Home /> */}
      <Profile />
    </ContextObj.Provider>
  </div>
);

export default App;
