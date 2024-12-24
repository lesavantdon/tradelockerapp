const { getAccountData, getExecutions } = require('../services/dataService');

exports.getAccountData = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const accountData = await getAccountData();
    const executions = await getExecutions(accountId);

    const response = {
      accountInfo: accountData,
      executions: executions
    };

    res.status(200).json(response); // Send the data back to the frontend
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
};
