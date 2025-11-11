const express = require('express');
const app = express();

// Multiple health check endpoints
app.get('/health', (req, res) => {
  console.log('Health check called: /health');
  res.json({ status: 'OK', endpoint: '/health', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  console.log('Health check called: /api/health');
  res.json({ status: 'OK', endpoint: '/api/health', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  console.log('Root endpoint called');
  res.json({ 
    status: 'OK', 
    message: 'iSSA API Running',
    timestamp: new Date().toISOString()
  });
});

// Additional common health check paths
app.get('/api', (req, res) => {
  res.json({ status: 'OK', endpoint: '/api' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK', endpoint: '/status' });
});

app.get('/ping', (req, res) => {
  res.json({ status: 'OK', endpoint: '/ping' });
});

// PRODUCTS ENDPOINT
app.get('/api/products', (req, res) => {
  console.log('Products endpoint called');
  res.json({ 
    products: [
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
    ]
  });
});

// DISCIPLINES ENDPOINT
app.get('/api/disciplines', (req, res) => {
  console.log('Disciplines endpoint called');
  res.json({ 
    disciplines: [
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
    ]
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log('✅ All endpoints available including /api/products and /api/disciplines');
});
