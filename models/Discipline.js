const mongoose = require('mongoose');

const disciplineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: '🎯' },
  type: { type: String, enum: ['standard', 'clubshoot'], default: 'standard' }
}, { timestamps: true });

module.exports = mongoose.model('Discipline', disciplineSchema);
