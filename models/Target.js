const mongoose = require('mongoose');

const targetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  discipline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discipline',
    required: true
  },
  image: {
    url: String,
    filename: String
  },
  location: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  match: {
    name: String,
    type: {
      type: String,
      enum: ['practice', 'competition']
    }
  },
  scores: {
    totalShots: Number,
    hits: Number,
    misses: Number,
    totalPoints: Number,
    maxPoints: Number,
    accuracy: Number
  },
  verification: {
    status: {
      type: String,
      enum: ['pending', 'verified', 'rejected'],
      default: 'pending'
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Target', targetSchema);
