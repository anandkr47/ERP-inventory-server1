const express = require('express');
const { createSupplier, getSupplier, updateSupplier, deleteSupplier } = require('../controllers/supplier');
const ValidateToken = require('../middleware/validateHandler');
const Router = express.Router();

// Supply routes
Router.post('/addsuplier',createSupplier);
Router.get('/getsuplier',getSupplier);
Router.put('/updatesuplier/:id', ValidateToken, updateSupplier);
Router.delete('/deletesuplier/:id', ValidateToken, deleteSupplier);

module.exports = Router;