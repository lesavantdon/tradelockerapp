const express = require('express');
const router = express.Router();
const { 
  getAccountData, 
  getExecutions, 
  getOrders, 
  getPositions, 
  getState, 
  getInstruments,
  validateAccountId 
} = require('../controllers/accountController');
const authController = require('./controllers/authController');
const {validateAccountId, jwtauthmiddleware} = require('./middleware/jwtauthmiddleware');

// Authentication routes
router.post('/auth/jwt/token', authController.getAccessToken); 
router.get('/auth/jwt/all-accounts', jwtauthmiddleware, authController.getAllAccounts);  
router.post('/auth/jwt/logout', jwtauthmiddleware, authController.logout); 


// Routes for account data, executions, orders, positions, and state with JWT authentication
router.get('/trade/accounts/:accountId', jwtauthmiddleware, validateAccountId, getAccountData);
router.get('/trade/accounts/:accountId/executions', jwtauthmiddleware, validateAccountId, getExecutions);
router.get('/trade/accounts/:accountId/orders', jwtauthmiddleware, validateAccountId, getOrders);
router.get('/trade/accounts/:accountId/positions', jwtauthmiddleware, validateAccountId, getPositions);
router.get('/trade/accounts/:accountId/state', jwtauthmiddleware, validateAccountId, getState);
router.get('/trade/accounts/:accountId/instruments', jwtauthmiddleware, validateAccountId, getInstruments);

module.exports = router;
