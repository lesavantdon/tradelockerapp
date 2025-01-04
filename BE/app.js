const express = require('express');
const cors = require('cors');
const routes = require('../routes/index'); // Import the unified route file
const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use('/', routes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});
module.exports = app;
