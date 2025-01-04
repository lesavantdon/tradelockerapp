const { getAccountData, getExecutions, getOrders, getPositions, getState, getInstruments } = require('../services/dataService');


// Controller to fetch account data from TradeLocker API
exports.getAccountDataController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const accountData = await getAccountData(accountId);

    if (!accountData) {
      return res.status(404).json({ success: false, error: 'Account not found' });
    }

    res.status(200).json({ success: true, accountInfo: accountData });
  } catch (error) {
    console.error('Error fetching account data:', error.message);
    res.status(500).json({ success: false, error: 'An error occurred while fetching account data' });
  }
};

// Controller to fetch executions data from TradeLocker API
exports.getExecutionsController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const executions = await getExecutions(accountId);

    if (!executions || executions.length === 0) {
      return res.status(404).json({ success: false, error: 'No executions found for this account' });
    }

    res.status(200).json({ success: true, executions });
  } catch (error) {
    console.error('Error fetching executions:', error.message);
    res.status(500).json({ success: false, error: 'An error occurred while fetching executions' });
  }
};

// Controller to fetch orders data from TradeLocker API
exports.getOrdersController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const orders = await getOrders(accountId);

    if (!orders || orders.length === 0) {
      return res.status(404).json({ success: false, error: 'No orders found for this account' });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ success: false, error: 'An error occurred while fetching orders' });
  }
};

// Controller to fetch positions data from TradeLocker API
exports.getPositionsController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const positions = await getPositions(accountId);

    if (!positions || positions.length === 0) {
      return res.status(404).json({ success: false, error: 'No positions found for this account' });
    }

    res.status(200).json({ success: true, positions });
  } catch (error) {
    console.error('Error fetching positions:', error.message);
    res.status(500).json({ success: false, error: 'An error occurred while fetching positions' });
  }
};

// Controller to fetch state data from TradeLocker API
exports.getStateController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const state = await getState(accountId);

    if (!state) {
      return res.status(404).json({ success: false, error: 'No state found for this account' });
    }

    res.status(200).json({ success: true, state });
  } catch (error) {
    console.error('Error fetching state:', error.message);
    res.status(500).json({ success: false, error: 'An error occurred while fetching account state' });
  }
};

// Controller to fetch instruments data from TradeLocker API
exports.getInstrumentsController = async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const instruments = await getInstruments(accountId);

    if (!instruments || instruments.length === 0) {
      return res.status(404).json({ success: false, error: 'No instruments found for this account' });
    }

    res.status(200).json({ success: true, instruments });
  } catch (error) {
    console.error('Error fetching instruments:', error.message);
    res.status(500).json({ success: false, error: 'An error occurred while fetching instruments' });
  }
};

// Exporting middleware and controllers separately
exports.getAccountData = getAccountDataController;
exports.getExecutions = getExecutionsController;
exports.getOrders = getOrdersController;
exports.getPositions = getPositionsController;
exports.getState = getStateController;
exports.getInstruments = getInstrumentsController;
