'use strict';

const express = require('express');
const { customerModel } = require('../models');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerModel.findAll();
  res.status(200).send(customers);
});

router.get('/customer/:id', async (req, res, next) => {
  const customers = await customerModel.findByPk(req.params.id);
  res.status(200).send(customers);
});

router.post('/customer', async (req, res, next) => {
  try {
    console.log('this is the request body', req.body);
    const newCustomer = await customerModel.create(req.body);
    res.status(200).send(newCustomer);
  } catch(e){
    next(e);
  }
});

router.put('/customer/:id', async (req, res, next) => {
  let updatedCustomer = await customerModel.update(req.body, {where: {id: req.params.id}});
  res.status(200).json(updatedCustomer);
});

router.delete('/customer/:id', async (req, res, next) => {
  await customerModel.destroy({where: {id: req.params.id}});
  res.status(200).send('deleted');
});

module.exports = router;

// Taken from in class code review
