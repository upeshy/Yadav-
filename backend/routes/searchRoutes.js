const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Advanced search
router.get('/', async (req, res) => {
  try {
    const { q, category, brand, minPrice, maxPrice } = req.query;
    
    let filter = { isActive: true };
    
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { brand: { $regex: q, $options: 'i' } }
      ];
    }
    
    if (category) filter.category = category;
    if (brand) filter.brand = brand;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = minPrice;
      if (maxPrice) filter.price.$lte = maxPrice;
    }
    
    const products = await Product.find(filter).limit(20);
    
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
