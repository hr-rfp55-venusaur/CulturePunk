import React, { useState } from 'react';
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import moment from 'moment';
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
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

const EventCalendar = () => (
  <div>
    Calendar 123
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{
        height: 1100,
        margin: '50px',
        width: 1500,
        display: 'flex',
        marginLeft: '200px',
      }}
    />
  </div>
);

export default EventCalendar;
