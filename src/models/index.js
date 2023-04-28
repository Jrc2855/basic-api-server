'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const customer = require('./customer');
const product = require('./product');
const Collection = require('./collection');

// if sqlite:memory does not work, use sqlite::memory
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory' 
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const customerModel = customer(sequelizeDatabase, DataTypes);
const productModel = product(sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  customerModel: new Collection(customerModel),
  productModel: new Collection(productModel),
};
