import React, { useState } from 'react';
// import format from 'date-fns/format';
// import getDay from 'date-fns/getDay';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// dateFnsLocalizer
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import events from './events';

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

// const events = [
//   {
//     title: 'Big Meeting',
//     allDay: true,
//     start: new Date(2021, 6, 0),
//     end: new Date(2021, 6, 0),
//   },
//   {
//     title: 'Vacation',
//     start: new Date(2021, 6, 7),
//     end: new Date(2021, 6, 10),
//   },
//   {
//     title: 'Conference',
//     start: new Date(2021, 6, 20),
//     end: new Date(2021, 6, 23),
//   },
// ];

// const events = [
//   {
//     title: "Big Meeting",
//     allDay: true,
//     start: new Date(2021, 9, 0),
//     end: new Date(2021, 9, 0),
//   },
//   {
//     title: "Vacation",
//     start: new Date(2021, 9, 7),
//     end: new Date(2021, 9, 10),
//   },
//   {
//     title: "Conference",
//     start: new Date(2021, 9, 20),
//     end: new Date(2021, 9, 23),
//   },
// ];

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
        <input
          type="text"
          placeholder="Add Event Title"
          style={{ width: '20%', marginRight: '10px' }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

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

        <button type="button" style={{ marginTop: '10px' }} onClick={handleAddEvent}>Submit</button>

      </div>

      <Calendar
        localizer={localizer}
        events={events}
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
          marginTop: '220px',
          // marginLeft: '200px',
        }}
      />
    </div>
  );
};

export default EventCalendar;
