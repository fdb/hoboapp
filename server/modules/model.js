const mongoose = require('mongoose');

const Module = mongoose.model('Module', {
  title: String,
  explanation: String,
  exercise: String,
  evaluation: String
});

module.exports = { Module };
