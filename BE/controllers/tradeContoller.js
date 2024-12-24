const axios = require('axios');



exports.getTradeData = async (req, res) => {
  const { accessToken } = req.user; // Assume accessToken is saved in DB
  try {
    const response = await axios.get("https://api.tradelocker.com/trades", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};
