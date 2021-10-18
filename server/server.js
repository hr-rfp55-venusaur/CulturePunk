const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/products', ({ query: { offset, limit } }, res) => {
  axios.get(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=${limit}`)
    .then((data) => {
      res.send(data.data.assets);
    })
    .catch((error) => res.send(error));
});

app.listen(PORT, () => {
  console.log(`Express server listening at localhost:${PORT}!`);
});
