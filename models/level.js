const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
  // language: { type: String, trim: true, required: true },
  // totalLevels: { type: Number},
  // totalLevelsCompleted: { type: Number },
  score: { type: Number },
  time: { type: Number },
  content: { type: String},
  index: { type: Number }
}, {
  timestamps: true
});

// levelSchema
//    .path(‘price’)
//    .get(convertToDecimal)
//    .set(convertFromDecimal);
//
// function convertToDecimal(value) {
//     Return (value/100).toFixed(2);
// }
//
// Function convertFromDecimal (value) {
//     return value *100;
// }

module.exports = mongoose.model('level', levelSchema);
