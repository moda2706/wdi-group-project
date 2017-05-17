const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({

  content: { type: String, required: true, unique: true},
  index: { type: Number, required: true, unique: true },
  seconds: { type: Number, required: true },
  language: { type: String, enum: ['JS, Ruby'] },

  plays: [{
    user: { type: mongoose.Schema.ObjectId, ref: 'User' }, // req.user
    score: Number,
    wpm: Number,
    secondsLeft: Number
  }]
}
);

module.exports = mongoose.model('level', levelSchema);
