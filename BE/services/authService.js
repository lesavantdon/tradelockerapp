import apiClient from '../utils/apiClient';

/**
 * Fetch the JWT token from the authentication API and store it in localStorage.
 * @returns {string} The JWT token
 */
export const getAccessToken = async () => {
  // If token exists in localStorage, return it
  const storedToken = localStorage.getItem('accessToken');
  if (storedToken) {
    return storedToken;
  }
  try {
    // Call your authentication API to get the token
    const response = await apiClient.post('/auth/jwt/token', {
       // Credentials from environment variables
      email: process.env.TRADELOCKER_EMAIL,
      password: process.env.TRADELOCKER_PASSWORD,
      server: process.env.TRADELOCKER_SERVER,
    });

    // Store the access token in localStorage
    const token = response.data.accessToken;
    localStorage.setItem('accessToken', token);

    // Set token to expire in 24 hours
    const expiresIn = 24 * 60 * 60 * 1000;  // 24 hours in milliseconds
    setTimeout(() => {
      localStorage.removeItem('accessToken');  
      console.log('Token expired and removed from localStorage');
    }, expiresIn);

    return token;
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    throw new Error('Authentication failed');
  }
};

/**
 * Logout the user by clearing the stored access token from localStorage.
 */
export const logout = () => {
  localStorage.removeItem('accessToken');  // Clear the stored access token
  console.log('User logged out successfully');
};
