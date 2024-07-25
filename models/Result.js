
const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  userName: { type: String, required: true }, 
  email: { type: String, required: true },  
  correct: { type: Number, required: true },
  incorrect: { type: Number, required: true },
  unattempted: { type: Number, required: true }
});

module.exports = mongoose.model('Result', ResultSchema);


