const now = new Date();

export default [
  {
    id: 0,
    title: 'Auction 1 - Paloma Rincon',
    // start: new Date(2021, 9, 4, 9, 30),
    // allDay: false,
    // start: new Date(2021, 9, 4, 2, 30, 0, 0),
    end: new Date(2021, 9, 5, 9, 30, 0, 0),
  },
  {
    id: 1,
    title: 'Auction 2 - Future Skyline ART',
    start: new Date(2021, 9, 8, 0, 0, 0),
    end: new Date(2021, 9, 10, 0, 0, 0),
  },
  {
    id: 2,
    title: 'Auction 3 - Chubbies',
    start: new Date(2021, 9, 12, 0, 0, 0),
    end: new Date(2021, 9, 14, 0, 0, 0),
  },
  {
    id: 3,
    title: 'Product Drop 1 - Gatsby Doge',
    start: new Date(2021, 9, 17, 5, 30, 0),
    end: new Date(2021, 9, 18, 6, 30, 0),
  },
  {
    id: 4,
    title: 'Product Drop 3 - Venusaur',
    start: new Date(2021, 9, 28),
    end: new Date(2021, 9, 30),
  },
  {
    id: 5,
    title: 'Product Drop 2 - Golden Nyan Cat',
    start: new Date(2021, 9, 25),
    end: new Date(2021, 9, 27),
  },
  // {
  //   id: 14,
  //   title: 'Today',
  //   start: new Date(new Date().setHours(new Date().getHours() - 3)),
  //   end: new Date(new Date().setHours(new Date().getHours() + 3)),
  // },
  {
    id: 6,
    title: 'CulturePunk Presentation',
    start: now,
    end: new Date(2021, 9, 24),
  },
];
