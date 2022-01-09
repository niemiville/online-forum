const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model('Thread', threadSchema);
