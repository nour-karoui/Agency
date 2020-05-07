const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExSchema = new Schema({
  name: {type: String},
  date: {type: Date},
  isVideo: {type: Boolean},
  imagePath: {type: String},
  videoPath: {type: String}
});

module.exports = mongoose.model('Project', ExSchema);
