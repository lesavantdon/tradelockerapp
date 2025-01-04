const mongoose = require('mongoose');


const executionSchema = new mongoose.Schema({
  executionId: {
    type: String,
    required: true,
    unique: true 
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account', 
    required: true
  },
  tradeDetails: {
    symbol: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    tradeType: {
      type: String,
      enum: ['buy', 'sell'], 
      required: true
    }
  },
  status: {
    type: String,
    enum: ['pending', 'executed', 'failed'], 
    default: 'pending'
  },
  executedAt: {
    type: Date,
    default: Date.now 
  }
});


module.exports = mongoose.model('Execution', executionSchema);
