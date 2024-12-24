import axios from 'axios';

require('dotenv').config();

const apiClient = axios.create({
  baseURL: process.env.TRADELOCKER_BASE_URL,
  timeout: 10000,
});

module.exports = apiClient;
