// services/authService.js

import axios from 'axios';


let accessToken = null;  // Cache the token

exports.getAuthToken = async () => {
  if (accessToken) return accessToken;  // Return cached token if available

  try {
    const response = await axios.post('https://live.tradelocker.com/backend-api/auth/jwt/token', {
      email: process.env.TRADELOCKER_EMAIL,
      password: process.env.TRADELOCKER_PASSWORD,
      server: process.env.TRADELOCKER_SERVER
    });

    accessToken = response.data.accessToken;  // Save token to cache
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    throw new Error('Authentication failed');
  }
};
