const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  thread: {
    type: mongoose.Schema.Types.ObjectId,
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

// Omit the version key when serialized to JSON
//productSchema.set('toJSON', { virtuals: false, versionKey: false });

module.exports = mongoose.model('Message', messageSchema);
