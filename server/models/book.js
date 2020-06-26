const mongoose = require('mongoose');
// const mongoose = require('mongoose').set('debug', true);
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorid: String,
});

module.exports = mongoose.model('Book', bookSchema);
