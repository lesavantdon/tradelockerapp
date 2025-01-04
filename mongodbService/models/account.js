const mongoose = require('mongoose');

// Define the Account Schema
const accountSchema = new mongoose.Schema({
  accountId: {
    type: String,
    required: true,
    unique: true // Ensure accountId is unique
  },
  balance: {
    type: Number,
    required: true,
    default: 0 // You can set a default balance if needed
  },
  currency: {
    type: String,
    required: true, // Currency type (e.g., USD, EUR, etc.)
  },
  createdAt: {
    type: Date,
    default: Date.now // Set the date the account was created
  }
});

// Create and export the Account model
module.exports = mongoose.model('Account', accountSchema);
