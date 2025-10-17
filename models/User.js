const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  memberId: { type: String, unique: true },
  phone: { type: String },
  membershipType: { type: String, enum: ['basic', 'premium', 'elite'], default: 'basic' },
  membershipStatus: { type: String, enum: ['active', 'expired', 'suspended'], default: 'active' },
  joinDate: { type: Date, default: Date.now }
}, { timestamps: true });

userSchema.pre('save', function(next) {
  if (this.isNew) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    this.memberId = `ISSA-${new Date().getFullYear()}-${randomNum}`;
  }
  next();
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
