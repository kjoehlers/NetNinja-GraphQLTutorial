const mongoose = require('mongoose');
// const mongoose = require('mongoose').set('debug', true);
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);
