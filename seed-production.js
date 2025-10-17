const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product');
const Discipline = require('./models/Discipline');

const disciplines = [
  {
    name: 'Precision Target Shooting',
    description: 'Traditional bullseye shooting at fixed distances with handguns and rifles.',
    icon: '🎯',
    type: 'standard'
  },
  {
    name: 'Smallbore Rifle',
    description: '.22 caliber rifle shooting at paper targets.',
    icon: '🔫', 
    type: 'standard'
  },
  {
    name: 'Dynamic Shooting',
    description: 'Movement-based shooting stages with multiple targets and challenges.',
    icon: '🏃',
    type: 'clubshoot'
  }
];

const products = [
  {
    name: 'Competition Pistol',
    description: '9mm competition pistol with enhanced trigger and sights',
    price: 1250,
    category: 'firearms',
    inventory: { quantity: 8 },
    badges: ['bestseller'],
    rating: { average: 4.5, count: 24 }
  },
  {
    name: 'Competition Red Dot',
    description: '2 MOA red dot sight with shake-awake technology',
    price: 380,
    category: 'optics',
    inventory: { quantity: 15 },
    rating: { average: 4.8, count: 18 }
  },
  {
    name: 'iSSA Pro Jersey',
    description: 'Official iSSA competition shooting jersey',
    price: 65,
    category: 'merch',
    inventory: { quantity: 50 },
    badges: ['new'],
    rating: { average: 4.9, count: 42 }
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Discipline.deleteMany({});
    await Product.deleteMany({});

    await Discipline.insertMany(disciplines);
    await Product.insertMany(products);

    console.log('Production database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
