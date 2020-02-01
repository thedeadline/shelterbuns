const mongoose = require('mongoose');

let RabbitSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  lastExercise: {
    type: [ Date ]
  },
  location: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model('Rabbit', RabbitSchema);
