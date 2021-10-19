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
  axios.get(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=${limit}&order_by=sale_count`)
    .then((apiRes) => {
      res.send(apiRes.data.assets);
    })
    .catch((error) => res.send(error));
});

app.get('/product/:product_id_address/:product_token_id', ( {params: { product_id_address, product_token_id } }, res) => {
  axios.get(`https://api.opensea.io/api/v1/asset/${product_id_address}/${product_token_id}/`)
    .then((apiRes) => res.send(apiRes.data))
    .catch((error) => res.send(error));
});

app.listen(PORT, () => {
  console.log(`Express server listening at localhost:${PORT}!`);
});
