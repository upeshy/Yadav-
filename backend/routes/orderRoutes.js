const express = require('express');
const router = express.Router();

// Create order
router.post('/create', (req, res) => {
  try {
    res.json({ success: true, message: 'Order created' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get orders
router.get('/', (req, res) => {
  try {
    res.json({ success: true, data: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
