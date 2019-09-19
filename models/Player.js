const mongoose = require('mongoose')

const Player = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  },
  teams: [{
    team: String,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }]
}, {
  strict: true
}, {
  toJSON: {
    virtuals: true
  }
})

module.exports = mongoose.model('Player', Player)
