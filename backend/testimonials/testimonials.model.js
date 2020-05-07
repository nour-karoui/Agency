const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExSchema = new Schema({
  name: {type: String},
  origin: {type: String},
  comment: {type: String},
  country: {type: String},

});

module.exports = mongoose.model('Testimonial', ExSchema);
