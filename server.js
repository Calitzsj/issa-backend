const express = require('express');
const app = express();

// HEALTH CHECK - FIRST THING, NO MIDDLEWARE
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Then add other middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'iSSA API Running' });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ test: 'API working' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Health check: /health');
});
