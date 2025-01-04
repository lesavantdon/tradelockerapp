const apiClient = require('../apiClient');

// Function to get account data
const getAccountData = async (accountId) => {
  try {
    const response = await apiClient.get(`/trade/accounts/${accountId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error.message);
    throw error;
  }
};

// Function to get executions data
const getExecutions = async (accountId) => {
  try {
    const response = await apiClient.get(`/trade/accounts/${accountId}/executions`);
    return response.data.executions;
  } catch (error) {
    console.error('Error fetching executions:', error.message);
    throw error;
  }
};

// Function to get orders data
const getOrders = async (accountId) => {
  try {
    const response = await apiClient.get(`/trade/accounts/${accountId}/orders`);
    return response.data.orders;
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    throw error;
  }
};

// Function to get positions data
const getPositions = async (accountId) => {
  try {
    const response = await apiClient.get(`/trade/accounts/${accountId}/positions`);
    return response.data.positions;
  } catch (error) {
    console.error('Error fetching positions:', error.message);
    throw error;
  }
};

// Function to get state data
const getState = async (accountId) => {
  try {
    const response = await apiClient.get(`/trade/accounts/${accountId}/state`);
    return response.data.state;
  } catch (error) {
    console.error('Error fetching state:', error.message);
    throw error;
  }
};

// Function to get instruments data
const getInstruments = async (accountId) => {
  try {
    const response = await apiClient.get(`/trade/accounts/${accountId}/instruments`);
    return response.data.instruments;
  } catch (error) {
    console.error('Error fetching instruments:', error.message);
    throw error;
  }
};

// Exporting functions to be used in controllers
module.exports = {
  getAccountData,
  getExecutions,
  getOrders,
  getPositions,
  getState,
  getInstruments,
};
