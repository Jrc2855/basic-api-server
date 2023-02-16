'use strict';

const express = require('express');
const { productModel } = require('../models/product');

const router = express.Router();

router.get('/product', async (req, res, next) => {
  const products = await productModel.findAll();
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

router.put('/product', async (req, res, next) => {
  let updatedProduct = await productModel.update(req.body);
  res.status(200).json(updatedProduct);
});

router.delete('/product', async (req, res, next) => {
  let deletedProduct = await productModel.delete();
  res.status(200).delete(deletedProduct);
});

module.exports = router;