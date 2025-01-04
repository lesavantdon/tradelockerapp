require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const app = express();
const routes = require('./routes');  // Import routes

// Middleware
app.use(express.json());  // To parse incoming JSON requests

// Use routes
app.use(routes);  // Register the routes for the app

// Set up the server to listen on the port defined in .env or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
