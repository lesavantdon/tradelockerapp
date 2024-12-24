// services/dataService.js

import axios from 'axios';

const { getAuthToken } = require('./authService');

exports.getAccountData = async () => {
  const token = await getAuthToken();
  try {
    const response = await axios.get('https://live.tradelocker.com/backend-api/auth/jwt/all-accounts', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.accounts;
  } catch (error) {
    console.error('Error fetching account data:', error.message);
    throw new Error('Failed to fetch account data');
  }
};

exports.getExecutions = async (accountId) => {
  const token = await getAuthToken();
  try {
    const response = await axios.get(`https://live.tradelocker.com/backend-api/trade/accounts/${accountId}/executions`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.executions;
  } catch (error) {
    console.error('Error fetching executions:', error.message);
    throw new Error('Failed to fetch executions');
  }
};
