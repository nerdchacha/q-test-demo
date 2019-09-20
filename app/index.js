const express = require('express')
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const products = require('./dal/products');

mongoose.connect(`mongodb://localhost:27017/${config.get('dbName')}`);

app.get('/', async (req, res) => {
  const availableProducts = await products.getAvailable();
  res.send(availableProducts);
});

const PORT = config.get('port');

app.listen(PORT, () => console.log(`Server is listening onn port ${PORT}`))

module.exports = app;