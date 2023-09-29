const mongoose = require('mongoose');
const User=require('./usermodel');
// Define the product schema
const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true
  },
  pprice: {
    type: Number,
    required: true
  },
  pcats: {
    type: String,
    required: true
  },
  pdesc: {
    type: String,
    required: true
  },
  pimage: {
    type: String,
    required: false
  },

});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
