import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.TRADELOCKER_BASE_URL,  // Your API's base URL
  timeout: 10000,  // Optional timeout
});

// Add token to request headers for each API request
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;  // Attach token to request
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global error handling for API responses
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
