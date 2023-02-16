'use strict';

require('dotenv').config();
const { Sequelize, Datatypes } = require('sequelize');
const customer = require('./customer');
const product = require('./product');

// if sqlite:memory does not work, use sqlite::memory
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory' 
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDatabase, Datatypes);
const productModel = product(sequelizeDatabase, Datatypes);

module.exports = {
  sequelizeDatabase,
  customerModel,
  productModel,
};