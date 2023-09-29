const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  cname: {
    type: String,
    required: true
  },
  
  cmob: {
    type: Number,
    required: true
  },
  cbname: {
    type: String,
    required: true
  },
  wnmob: {
    type: Number,
    required: true
  },
  cbadd: {
    type: String,
    default: 'No address'
  }

});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
