const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishSchema = new Schema({
  name: {
    type: String,
    default: 'Anonymous',
  },
  wish: String,
});

const bridegroomSchema = new Schema({
  bridegroom_id: String,
  data: Object,
  wishes: [wishSchema],
});

module.exports = mongoose.model('BrideGroom', bridegroomSchema);
