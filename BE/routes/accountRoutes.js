const express = require('express');
const { getAccountData } = require('../controllers/accountController');
const router = express.Router();

router.get('/account-data/:accountId', getAccountData);

module.exports = router;
