/* eslint-disable react/prop-types */
import React from 'react';
import '../../App.css';

const UpcomingEvents = ({ user }) => (
  <div className="ProfileEvents">
    <span><h4>Upcoming Events:</h4></span>
    {user.upcomingEvents.map((event) => (
      <div className="Profile-EventListing" key={event.id}>
        <div><h4>{event.date}</h4></div>
        <div><h5>{event.title}</h5></div>
      </div>
    ))}
  </div>
);

export default UpcomingEvents;
