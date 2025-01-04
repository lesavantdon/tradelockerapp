const { getAccessToken, logout } = require('../services/authService');

/**
 * Login route - Get the access token
 */
exports.login = async (req, res) => {
  try {
    const token = await getAccessToken();
    res.json({ token });  // Send the token as a response
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

/**
 * Logout route - Clear the stored access token
 */
exports.logout = (req, res) => {
  logout();  // Call logout function to clear the token
  res.status(200).json({ message: 'User logged out successfully' });
};
