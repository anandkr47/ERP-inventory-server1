const express = require('express');
const { createService, getService, updateService, deleteService } = require('../controllers/services');
const ValidateToken = require('../middleware/validateHandler');
const Router = express.Router();

Router.post('/addService',createService);
Router.get('/',getService);
Router.put('/updateService/:id',updateService);
Router.delete('/deleteService/:id',deleteService);

module.exports = Router;
