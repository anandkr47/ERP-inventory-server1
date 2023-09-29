const mongoose = require('mongoose');

const costomerSchema = new mongoose.Schema({
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
    required: true
  }

});

const Costomer = mongoose.model('Costomer', costomerSchema);

module.exports = Costomer;
