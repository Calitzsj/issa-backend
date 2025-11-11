const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Demo data
const products = [
  {
    id: 1,
    name: 'Competition Pistol',
    description: '9mm competition pistol with enhanced trigger and sights',
    price: 1250,
    category: 'firearms'
  },
  {
    id: 2,
    name: 'iSSA Pro Jersey',
    description: 'Official iSSA competition shooting jersey',
    price: 65,
    category: 'merch'
  }
];

const disciplines = [
  {
    id: 1,
    name: 'Precision Target Shooting',
    description: 'Traditional bullseye shooting at fixed distances.',
    icon: '🎯'
  },
  {
    id: 2, 
    name: 'Smallbore Rifle',
    description: '.22 caliber rifle shooting at paper targets.',
    icon: '🔫'
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'iSSA API Server Running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'iSSA API Server Running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/disciplines', (req, res) => {
  res.json({ disciplines });
});

app.post('/api/auth/register', (req, res) => {
  res.json({
    message: 'User registered successfully',
    user: {
      id: 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      memberId: 'ISSA-2024-1234'
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`iSSA Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});
