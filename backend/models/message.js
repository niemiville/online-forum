const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isFirst: {
    type: Boolean,
    required: true,
  }
});

//Maybe don't need
messageSchema.methods.generateId = async function () {
    return new mongoose.Types.ObjectId();
};
// Omit the version key when serialized to JSON
//productSchema.set('toJSON', { virtuals: false, versionKey: false });

module.exports = mongoose.model('Message', messageSchema);
