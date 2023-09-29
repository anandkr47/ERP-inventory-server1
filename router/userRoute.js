/*const express = require('express');
const { createUser, loginUser, currentInfo, wLoginUser } = require('../controllers/userController');
const ValidateToken = require('../middleware/validateHandler');
const { upload } = require('../controllers/cloudinary');


const Router = express.Router();

// User routes
Router.post('/register', createUser);
Router.post('/login', loginUser);
Router.post('/wlogin', wLoginUser);
Router.get('/current', ValidateToken, currentInfo);

// Cloudinary routes
Router.post('/uploadImage', upload);
module.exports = Router;*/

const express=require('express');
const { createUser, loginUser, currentInfo, wLoginUser } = require('../controllers/userController');
const ValidateToken = require('../middleware/validateHandler');
const  {upload} =require('../controllers/cloudinary');
const {createProduct,getProduct}=require('../controllers/product')
const Router=express.Router();

Router.post('/register',createUser);
Router.post('/login',loginUser);
Router.post('/wlogin',wLoginUser);
Router.get('/current',currentInfo);
Router.post('/uploadImage',upload);
Router.post('/addProduct',createProduct);
Router.get('/getProduct',getProduct);

module.exports=Router;