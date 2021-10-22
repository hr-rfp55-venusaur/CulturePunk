import React, { useState, useEffect } from 'react';

import moment from 'moment';
import axios from 'axios';

import {
  ref, push, child, update,
} from 'firebase/database';

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
import ExpandableCarousel from '../Home/ExpandableCarousel';
import Carousel from '../Homepage/Carousel';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events';
import './calendar.css';

import { db } from '../../firebase';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);
  // const [allEvents, setAllEvents] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const getEvents = () => {
    axios.get('http://localhost:3001/calendar/events')
      .then((response) => {
        const resEvents = response.data;
        for (let i = 0; i < resEvents.length; i += 1) {
          resEvents[i].start = new Date((parseInt(resEvents[i].start, 10)));
          resEvents[i].end = new Date(parseInt(resEvents[i].end, 10));
        }
        setAllEvents(resEvents);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  // onSelectEvent - inside?
  // eslint-disable-next-line no-unused-vars
  const deleteEvent = (id) => {
    axios.delete(`http://localhost:3001/calendar/events/${id}`)
      .then(() => {
        const curEvents = [...allEvents];
        for (let i = 0; i < curEvents.length; i += 1) {
          if (curEvents[i].id === id) {
            curEvents.splice(i, 1);
            // setAllEvents([...curEvents]);
            break;
          }
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  const onSelectEvent = (event) => {
    // eslint-disable-next-line no-alert
    const deleteAction = window.confirm('Would you like to remove this event?');
    if (deleteAction) {
      const curEvents = [...allEvents];
      const idx = curEvents.indexOf(event);
      // deleteEvent(curEvents[idx].id);
      curEvents.splice(idx, 1);
      setAllEvents([...curEvents]);
    }
  };

  const handleAddEvent = () => {
    const curEvents = [...allEvents, newEvent];
    setAllEvents([...curEvents]);

    const dbRef = ref(db);
    const newPostKey = push(child(ref(db), 'events')).key;
    const updates = {};
    updates[newPostKey] = newEvent;
    update(child(dbRef, 'events'), updates)
      .then(() => {
      })
      .catch((err) => (err));

    // axios.post('http://localhost:3001/calendar/events', newEvent)
    //   .then(() => {
    //     // getEvents();
    //     const curEvents = [...allEvents, newEvent];
    //     setAllEvents([...curEvents]);
    //   })
    //   .catch((error) => {
    //     // eslint-disable-next-line no-console
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    // getEvents();
  }, []);

  return (
    <div className="calendar" style={{ padding: '150px' }}>
      <h1 className="title" style={{ color: 'black', fontWeight: 'bold' }}>CulturePunk Event Calendar</h1>

      <div className="event-carousel" style={{ margin: '150px' }}>
        <ExpandableCarousel slideSelect={3} />
      </div>

      <div style={{
        marginTop: '80px',
        paddingBottom: '60px',
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

        <div
          style={{
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
            width: 1600,
            display: 'flex',
            position: 'absolute',
            left: '48%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop: '620px',
            marginRight: '70px',
          }}
        />
      </div>
      <div>
        <div className="currentEvents" style={{ color: 'black', marginTop: '1250px' }} />
        <div style={{ marginTop: '125px' }} />
      </div>
    </div>
  );
};

export default EventCalendar;
