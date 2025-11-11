const express = require('express');
const app = express();

// Multiple health check endpoints - cover all possibilities
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

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ test: 'API is working', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log('✅ Multiple health endpoints available:');
  console.log('✅ /health, /api/health, /, /api, /status, /ping');
});
