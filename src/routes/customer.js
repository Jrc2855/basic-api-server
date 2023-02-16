'use strict';

const express = require('express');
const { customerModel } = require('../models/customer');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerModel.findAll();
  res.status(200).send(customers);
});

router.post('/customer', async (req, res, next) => {
  try {
    const newCustomer = await customerModel.create(req.body);
    res.status(200).send(newCustomer);
  } catch(e){
    next(e);
  }
});

module.exports = router;

// Taken from in class code review