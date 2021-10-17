const now = new Date();

export default [
  {
    id: 1,
    title: 'Auction 1',
    start: new Date(2021, 9, 6),
    end: new Date(2021, 9, 7),
  },

  {
    id: 2,
    title: 'Auction 2',
    start: new Date(2021, 9, 8, 0, 0, 0),
    end: new Date(2021, 9, 9, 0, 0, 0),
  },

  {
    id: 3,
    title: 'Auction 3',
    start: new Date(2021, 9, 12, 0, 0, 0),
    end: new Date(2021, 9, 14, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Product Drop 1',
    start: new Date(2021, 9, 17, 5, 30, 0),
    end: new Date(2021, 9, 18, 6, 30, 0),
  },
  {
    id: 5,
    title: 'Product Drop 2',
    start: new Date(2021, 9, 21),
    end: new Date(2021, 9, 22),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Product Drop 3',
    start: new Date(2021, 9, 25),
    end: new Date(2021, 9, 27),
    desc: 'Big conference for important people',
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0),
    end: new Date(2015, 3, 22, 2, 0, 0),
  },
  // {
  //   id: 14,
  //   title: 'Today',
  //   start: new Date(new Date().setHours(new Date().getHours() - 3)),
  //   end: new Date(new Date().setHours(new Date().getHours() + 3)),
  // },
  {
    id: 15,
    title: 'CulturePunk Presentation',
    start: now,
    end: now,
  },
];

// const events = [
//   {
//     title: 'Big Meeting',
//     allDay: true,
//     start: new Date(2021, 9, 0),
//     end: new Date(2021, 9, 0),
//   },
//   {
//     title: 'Vacation',
//     start: new Date(2021, 9, 7),
//     end: new Date(2021, 9, 10),
//   },
//   {
//     title: 'Conference',
//     start: new Date(2021, 9, 20),
//     end: new Date(2021, 9, 23),
//   },
//   {
//     title: 'test',
//     start: new Date(2021, 9, 20),
//     end: new Date(2021, 9, 23),
//   },
// ];
