'use strict';

const express = require('express');
const errorHandler = require('./handlers/500');
const productRouter = require('./routes/product');
const customerRouter = require('./routes/customer');
const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(customerRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Base Endpoint Proof of Life');
});

app.use(errorHandler);

let start = () => {
  app.listen(PORT, () => console.log('Server is up and running on port', PORT));
};

module.exports = { start, app };