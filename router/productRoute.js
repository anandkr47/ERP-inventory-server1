const express = require('express');
const { createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/product');
const ValidateToken = require('../middleware/validateHandler');
const Router = express.Router();

// Product routes
Router.post('/addProduct',ValidateToken,createProduct);
Router.get('/getProduct',getProduct);
Router.put('/updateProduct/:id', ValidateToken, updateProduct);
Router.delete('/deleteProduct/:id', ValidateToken, deleteProduct);

module.exports = Router;