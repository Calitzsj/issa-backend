const express = require('express');
const cors = require('cors');

const app = express();

// Middleware - SIMPLIFIED
app.use(cors());
app.use(express.json());

// IMMEDIATE Health check - at the very top of middleware
app.get('/health', (req, res) => {
  console.log('Health check called');
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Root route - SIMPLE
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'iSSA API Server Running'
  });
});

// Demo data - WITH STRING PRICES
const products = [
  {
    id: 1,
    name: 'Competition Pistol',
    description: '9mm competition pistol with enhanced trigger and sights',
    price: "R1250",
    category: 'firearms'
  },
  {
    id: 2,
    name: 'iSSA Pro Jersey',
    description: 'Official iSSA competition shooting jersey',
    price: "R650",
    category: 'merch'
  }
];

const disciplines = [
  {
    id: 1,
    name: 'Precision Target Shooting',
    description: 'Traditional bullseye shooting at fixed distances.'
  },
  {
    id: 2, 
    name: 'Smallbore Rifle',
    description: '.22 caliber rifle shooting at paper targets.'
  }
];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
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
    user: { id: 1, email: req.body.email }
  });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`iSSA Server running on port ${PORT}`);
  console.log('Health check: /health');
});
