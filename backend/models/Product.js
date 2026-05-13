const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
    maxlength: 100
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: String,
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: 0
  },
  salePrice: {
    type: Number,
    min: 0
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [
    {
      user: mongoose.Schema.Types.ObjectId,
      comment: String,
      rating: Number,
      date: { type: Date, default: Date.now }
    }
  ],
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  images: [String],
  thumbnail: String,
  video: String,
  specifications: {
    voltage: String,
    current: String,
    power: String,
    frequency: String,
    temperature: String,
    dimensions: String,
    weight: String,
    material: String
  },
  datasheet: String,
  brand: String,
  sku: {
    type: String,
    unique: true
  },
  partNumber: String,
  moq: { // Minimum Order Quantity
    type: Number,
    default: 1
  },
  bulkPricing: [
    {
      quantity: Number,
      price: Number
    }
  ],
  shipping: {
    weight: Number,
    dimensions: String,
    shippingClass: String
  },
  tags: [String],
  warranty: String,
  returnPolicy: String,
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isNewArrival: {
    type: Boolean,
    default: false
  },
  flashSale: {
    isActive: Boolean,
    discount: Number,
    startDate: Date,
    endDate: Date
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create text index for search
productSchema.index({ name: 'text', description: 'text', brand: 'text', tags: 'text' });

// Auto populate category
productSchema.pre(/^find/, function(next) {
  if (this.options._recursed) {
    return next();
  }
  this.populate('category');
  next();
});

module.exports = mongoose.model('Product', productSchema);
