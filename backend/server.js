const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// ============ MIDDLEWARE ============

// Security Middleware
app.use(helmet());
app.use(mongoSanitize());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later'
});
app.use('/api/', limiter);

// CORS
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Body Parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ============ DATABASE CONNECTION ============

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/electronics-store')
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  });

// ============ ROUTES ============

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date() });
});

// Product Routes
app.use('/api/products', require('./routes/productRoutes'));

// User Routes
app.use('/api/users', require('./routes/userRoutes'));

// Cart Routes
app.use('/api/cart', require('./routes/cartRoutes'));

// Order Routes
app.use('/api/orders', require('./routes/orderRoutes'));

// Category Routes
app.use('/api/categories', require('./routes/categoryRoutes'));

// Search Routes
app.use('/api/search', require('./routes/searchRoutes'));

// ============ ERROR HANDLING ============

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ 
    success: false, 
    message: err.message || 'Internal Server Error' 
  });
});

// ============ START SERVER ============

app.listen(PORT, () => {
  console.log(`
🚀 Electronics Store Server Running`);
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌐 API: http://localhost:${PORT}/api`);
  console.log(`📊 Health: http://localhost:${PORT}/api/health`);
});

module.exports = app;
