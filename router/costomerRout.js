const express=require('express');

const { createCostomer, getCostomer, updateCostomer, deleteCostomer } = require('../controllers/costomer')
const ValidateToken = require('../middleware/validateHandler');
const Router = express.Router();

// Costomer routes
Router.post('/addCustomer',createCostomer);
Router.get('/getCustomer',getCostomer);
Router.put('/updateCustomer/:id', ValidateToken, updateCostomer);
Router.delete('/deleteCustomer/:id', ValidateToken, deleteCostomer);

module.exports = Router;