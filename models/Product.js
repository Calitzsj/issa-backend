const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['firearms', 'ammo', 'optics', 'gear', 'merch']
  },
  images: [{ url: String, alt: String }],
  inventory: { quantity: { type: Number, default: 0 } },
  rating: { average: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
  badges: [String],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
