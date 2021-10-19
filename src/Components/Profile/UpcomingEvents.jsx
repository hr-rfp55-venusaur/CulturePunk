/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.css';
import Box from '@mui/material/Box';

const UpcomingEvents = ({ user }) => (
  <Box
    className="ProfileEvents"
    sx={{
      // width: 300,
      backgroundColor: 'primary.dark',
      padding: 3,
      // '&:hover': {
      //   backgroundColor: 'primary.main',
      //   opacity: [0.9, 0.8, 0.7],
      // },
    }}
  >
    <span><h4>Upcoming Events:</h4></span>
    {user.upcomingEvents.map((event) => (
      <div className="Profile-EventListing" key={event.id}>
        <div><h5>{event.date}</h5></div>
        <div><h6>{event.title}</h6></div>
      </div>
    ))}
  </Box>
);

export default UpcomingEvents;

