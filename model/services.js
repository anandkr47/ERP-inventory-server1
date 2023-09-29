const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  sname: {
    type: String,
    required: true
  },
  
  pprice: {
    type: Number,
    required: true
  },
  scats: {
    type: String,
    required: true
  },
  sprice: {
    type: Number,
    required: true
  },
  stax: {
    type: Number,
    default: 5
  }

});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
