const express = require('express');
const app = express();

// Track startup time
const startTime = Date.now();

// Health check with startup delay
app.get('/health', (req, res) => {
  const uptime = Date.now() - startTime;
  
  // If app started less than 10 seconds ago, return "starting"
  if (uptime < 10000) {
    return res.json({ 
      status: 'STARTING', 
      message: 'Application is starting up',
      uptime: uptime 
    });
  }
  
  // After 10 seconds, return "OK"
  res.json({ 
    status: 'OK', 
    message: 'Application is healthy',
    uptime: uptime 
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'iSSA API Running' });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ test: 'API is working' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Start time:', new Date().toISOString());
  console.log('Health check will return "STARTING" for first 10 seconds');
});
