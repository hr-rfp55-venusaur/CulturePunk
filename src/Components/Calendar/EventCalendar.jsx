import React, { useState } from 'react';
// import format from 'date-fns/format';
// import getDay from 'date-fns/getDay';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// dateFnsLocalizer
import moment from 'moment';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import ListAltIcon from '@mui/icons-material/ListAlt';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
// import DatePicker from 'react-datepicker';
import events from './events';
// import CustomToolbar from './CustomToolbar';
// import CurrentEvents from './CurrentEvents';
import './calendar.css';

const localizer = momentLocalizer(moment);
const axios = require('axios');

const EventCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const onSelectEvent = (event) => {
    // eslint-disable-next-line no-alert
    const deleteAction = window.confirm('Would you like to remove this event?');
    if (deleteAction) {
      const curEvents = [...allEvents];
      const idx = curEvents.indexOf(event);
      curEvents.splice(idx, 1);
      setAllEvents([...curEvents]);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const getEvents = () => {
    axios.get('/calendar/events')
      .then((response) => {
        setAllEvents([response.data]);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  // eslint-disable-next-line no-unused-vars
  const deleteEvent = (id) => {
    axios.delete(`/calendar/events/${id}`)
      .then(() => {
        // setAllEvents([...curEvents]);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  // eslint-disable-next-line no-unused-vars
  const postEvent = (event) => {
    axios.post('/calendar/events', event)
      .then(() => {
        setAllEvents([...allEvents, event]);
        getEvents();
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div style={{
        marginTop: '100px',
      }}
      >
        <TextField
          id="outlined-basic"
          label="Add Event Title"
          variant="outlined"
          style={{ width: '20%', marginRight: '10px', marginTop: '20px' }}
          value={newEvent.title}
          sx={{ boxShadow: 1 }}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <ListAltIcon />
              </InputAdornment>
            ),
          }}
        />

        <div style={{
          padding: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={newEvent.start}
              sx={{ boxShadow: 1 }}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <div style={{ paddingLeft: '300px' }} />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={newEvent.end}
              sx={{ boxShadow: 1 }}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <Button variant="outlined" sx={{ boxShadow: 3 }} style={{ padding: '10px 30px 10px 30px', fontSize: '16px', fontWeight: 'bold' }} onClick={handleAddEvent}>
          Submit
        </Button>
      </div>

      <div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          onSelectEvent={onSelectEvent}
          views={['month', 'week', 'day', 'agenda']}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 1100,
            margin: '50px',
            width: 1500,
            display: 'flex',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop: '550px',
            // backgroundColor: '#77CD80',
            // marginBottom: '290px',
            // marginLeft: '200px',
          }}
        />
      </div>
      {/* <CurrentEvents /> */}
    </div>
  );
};

export default EventCalendar;
