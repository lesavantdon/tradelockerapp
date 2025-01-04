// Middleware for validating accountId
const validateAccountId = (req, res, next) => {
  const accountId = req.params.accountId;
  if (!accountId) {
    return res.status(400).json({ success: false, error: 'Account ID is required' });
  }
  next();
};

module.exports = validateAccountId;
