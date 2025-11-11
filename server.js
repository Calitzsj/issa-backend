const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced Health check for Railway - responds immediately
app.get('/health', (req, res) => {
  const healthData = {
    status: 'OK',
    message: 'iSSA API is healthy and running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    nodeVersion: process.version,
    platform: process.platform
  };
  
  console.log('✅ Health check passed:', healthData.timestamp);
  res.status(200).json(healthData);
});

// Root route - responds immediately
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'iSSA API Server Running',
    timestamp: new Date().toISOString()
  });
});

// Demo data
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
    price: "R65",
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
  res.json({ status: 'OK', message: 'API health check' });
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

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ iSSA Server successfully started on port ${PORT}`);
  console.log(`✅ Health check endpoint: /health`);
  console.log(`✅ Server start time: ${new Date().toISOString()}`);
  console.log(`✅ All routes are now available`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
