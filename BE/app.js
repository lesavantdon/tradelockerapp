const express = require('express');
const app = express();
const accountRoutes = require('./routes/accountRoutes');


app.use(express.json());

// Routes
app.use('/api', accountRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
