'use strict';

const express = require('express');
const { productModel } = require('../models/product');

const router = express.Router();

router.get('/product', async (req, res, next) => {
  const products = await productModel.findAll();
  res.status(200).send(products);
});

router.get('/product/:id', async (req, res, next) => {
  const products = await productModel.findByPk(req.params.id);
  res.status(200).send(products);
});

router.get('/product', async (req, res, next) => {
  const product = await productModel.findOne();
  res.status(200).send(product);
  
});

router.post('/product', async (req, res, next) => {
  try {
    let newProduct = await productModel.create(req.body);
    res.status(200).json(newProduct);
  } catch (e) {
    next(e);
  }
});

router.put('/product/:id', async (req, res, next) => {
  let updatedProduct = await productModel.update(req.body, {where: {id: req.params.id}});
  res.status(200).json(updatedProduct);
});

router.delete('/product/:id', async (req, res, next) => {
  await productModel.destroy({where: {id: req.params.id}});
  res.status(200).delete('deleted');
});

module.exports = router;
