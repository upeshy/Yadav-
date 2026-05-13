const express = require('express');
const router = express.Router();

// Add to cart
router.post('/add', (req, res) => {
  try {
    const { productId, quantity } = req.body;
    res.json({ success: true, message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get cart
router.get('/', (req, res) => {
  try {
    res.json({ success: true, data: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
