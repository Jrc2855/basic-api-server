'use strict';

const { start } = require('./src/server');
const { sequelizeDatabase } = require('./src/models/index');
require('dotenv').config();

sequelizeDatabase.sync()
  .then(() => {
    console.log('Database Proof of life');
    start();
  })
  .catch(e => console.error(e));