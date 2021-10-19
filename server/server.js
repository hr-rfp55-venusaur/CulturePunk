/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const db = require('../database/index');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/products', ({ query: { offset, limit } }, res) => {
  axios.get(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=${limit}&order_by=sale_count`)
    .then((apiRes) => {
      res.send(apiRes.data.assets);
    })
    .catch((error) => res.send(error));
});

app.get('/product/:product_id_address/:product_token_id', ({params: { product_id_address, product_token_id } }, res) => {
  axios.get(`https://api.opensea.io/api/v1/asset/${product_id_address}/${product_token_id}/`)
    .then((apiRes) => res.send(apiRes.data))
    .catch((error) => res.send(error));
});

// ---------------------- EVENT CALENDAR ------------------------
// GET events
app.get('/calendar/events', (req, res) => {
  const text = 'SELECT * FROM events';
  db.query(text, (err, data) => {
    if (err) {
      console.log(`GET events error ${err}`);
      res.sendStatus(500);
    } else {
      console.log('GET events success');
      res.send(data.rows[0]);
    }
  });
});

// POST event
// eslint-disable-next-line no-unused-vars
app.post('/calendar/events', (req, res) => {
  // eslint-disable-next-line camelcase
  // Bigint to date - new Date(1634579739981)
  // start: Fri Oct 22 2021 10:57:42 GMT-0700(Pacific Daylight Time)

  const { title, start, end } = req.body;
  const text = 'INSERT INTO events(title, date_start, date_end) VALUES ($1, $2, $3)';
  // eslint-disable-next-line camelcase
  const values = [title, start, end];
  db.query(text, values, (err, data) => {
    if (err) {
      console.log(`POST events error ${err}`);
      data.sendStatus(500);
    } else {
      data.sendStatus(201);
    }
  });
});

// DELETE event
// eslint-disable-next-line no-unused-vars
app.delete('/calendar/events/:id', (req, res) => {
  const { id } = req.params;
  const text = 'DELETE FROM events WHERE id = $1';
  const values = [id];
  db.query(text, values, (err, data) => {
    if (err) {
      console.log(`DELETE events error ${err}`);
      data.sendStatus(500);
    } else {
      data.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at localhost:${PORT}!`);
});