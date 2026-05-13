const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sample Products Database
const products = [
  {
    id: 1,
    name: 'Laptop Pro Max',
    category: 'Electronics',
    price: 89999,
    image: 'https://via.placeholder.com/300x300?text=Laptop',
    description: 'High-performance laptop with 16GB RAM and 512GB SSD',
    stock: 15
  },
  {
    id: 2,
    name: 'Smartphone X',
    category: 'Electronics',
    price: 45999,
    image: 'https://via.placeholder.com/300x300?text=Smartphone',
    description: 'Latest smartphone with 108MP camera and 5G',
    stock: 25
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    category: 'Accessories',
    price: 12999,
    image: 'https://via.placeholder.com/300x300?text=Headphones',
    description: 'Noise-cancelling wireless headphones with 30hr battery',
    stock: 40
  },
  {
    id: 4,
    name: 'USB-C Cable',
    category: 'Accessories',
    price: 599,
    image: 'https://via.placeholder.com/300x300?text=Cable',
    description: 'Durable USB-C charging cable - 2 meter',
    stock: 100
  },
  {
    id: 5,
    name: 'Tablet Pro',
    category: 'Electronics',
    price: 34999,
    image: 'https://via.placeholder.com/300x300?text=Tablet',
    description: '12.9" tablet with M1 chip and stunning display',
    stock: 20
  },
  {
    id: 6,
    name: 'Smart Watch',
    category: 'Accessories',
    price: 19999,
    image: 'https://via.placeholder.com/300x300?text=Watch',
    description: 'Fitness tracking smartwatch with heart rate monitor',
    stock: 35
  }
];

// API Routes

// Get all products
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  
  let filtered = products;
  
  if (category && category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filtered);
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Get categories
app.get('/api/categories', (req, res) => {
  const categories = ['All', ...new Set(products.map(p => p.category))];
  res.json(categories);
});

// Add to cart (dummy endpoint)
app.post('/api/cart/add', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  if (quantity > product.stock) {
    return res.status(400).json({ message: 'Insufficient stock' });
  }
  
  res.json({ message: 'Product added to cart', product, quantity });
});

// Checkout endpoint
app.post('/api/checkout', (req, res) => {
  const { items, totalAmount } = req.body;
  
  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }
  
  res.json({
    message: 'Order placed successfully',
    orderId: 'ORD-' + Date.now(),
    totalAmount: totalAmount,
    items: items,
    status: 'pending',
    estimatedDelivery: '5-7 days'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cart.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📦 API available at http://localhost:${PORT}/api`);
});

module.exports = app;