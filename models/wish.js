const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishSchema = new Schema({
  name: {
    type: String,
    default: 'Anonymous',
  },
  wish: String,
});

module.exports = mongoose.model('Wish', wishSchema);
