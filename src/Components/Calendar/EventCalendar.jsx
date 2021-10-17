import React, { useState } from 'react';
// import format from 'date-fns/format';
// import getDay from 'date-fns/getDay';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// dateFnsLocalizer
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import events from './events';
import CurrentEvents from './CurrentEvents';

// const locales = {
//   'en-US': require('date-fns/locale/en-US'),
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>

        <TextField
          id="outlined-basic"
          label="Add Event Title"
          variant="outlined"
          style={{ width: '20%', marginRight: '10px', marginTop: '20px' }}
          value={newEvent.title}
          sx={{ boxShadow: 1 }}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <div style={{
          padding: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: '10px' }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />

          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
        </div>

        <button type="button" style={{ marginTop: '10px' }} onClick={handleAddEvent}>Submit</button>

      </div>

      <div>
        <Calendar
          localizer={localizer}
          events={allEvents}
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
            marginTop: '350px',
            // marginBottom: '290px',

            // marginLeft: '200px',
          }}
        />
      </div>
      <CurrentEvents />
    </div>
  );
};

export default EventCalendar;
