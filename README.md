# Yadav Store - E-Commerce Website

A complete e-commerce platform built with Node.js, Express, and vanilla JavaScript. Perfect for selling products online!

## 🚀 Features

### Backend (Node.js + Express)
- ✅ RESTful API with 6 endpoints
- ✅ Product management (listing, filtering, searching)
- ✅ Category management
- ✅ Shopping cart functionality
- ✅ Checkout system
- ✅ CORS enabled for frontend integration

### Frontend (HTML/CSS/JavaScript)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI with gradient backgrounds
- ✅ Product showcase with images and descriptions
- ✅ Search and filter functionality
- ✅ Shopping cart with quantity management
- ✅ Order summary with automatic calculations
- ✅ Local storage for persistent cart data
- ✅ Professional footer and navigation

### Pages
1. **Home Page** - Hero section, featured products, why choose us
2. **Products Page** - Full product catalog with search and filters
3. **Cart Page** - Shopping cart management and checkout

## 📋 API Endpoints

### Products
```
GET /api/products              - Get all products
GET /api/products/:id          - Get single product
GET /api/products?category=X   - Filter by category
GET /api/products?search=X     - Search products
```

### Categories
```
GET /api/categories            - Get all categories
```

### Cart & Checkout
```
POST /api/cart/add             - Add to cart
POST /api/checkout             - Place order
```

### Health Check
```
GET /api/health                - Server status
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/upeshy/Yadav-.git
cd Yadav-
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already included):
```
PORT=5000
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

5. Open in browser:
```
http://localhost:5000
```

## 📁 Project Structure

```
Yadav-/
├── server.js              # Express server & API
├── package.json           # Dependencies
├── .env                   # Environment config
├── .gitignore            # Git ignore rules
├── README.md             # This file
└── public/
    ├── index.html        # Home page
    ├── products.html     # Products page
    ├── cart.html         # Cart page
    ├── styles.css        # All styling
    └── app.js            # Frontend logic
```

## 🎯 Sample Products

The store comes with 6 pre-loaded products:
1. **Laptop Pro Max** - ₹89,999
2. **Smartphone X** - ₹45,999
3. **Wireless Headphones** - ₹12,999
4. **USB-C Cable** - ₹599
5. **Tablet Pro** - ₹34,999
6. **Smart Watch** - ₹19,999

## 💳 Pricing

- **Products:** Variable pricing
- **Shipping:** ₹100 per order
- **Tax:** 18% on subtotal
- **Total:** Subtotal + Tax + Shipping

## 🔧 Customization

### Add More Products
Edit `server.js` and add to the `products` array:
```javascript
{
  id: 7,
  name: 'Your Product',
  category: 'Category',
  price: 9999,
  image: 'image-url',
  description: 'Description',
  stock: 50
}
```

### Change Colors
Edit `public/styles.css` CSS variables:
```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #e74c3c;    /* Accent color */
    --accent-color: #3498db;       /* Highlight color */
}
```

### Modify Store Name
- Search for "Yadav Store" in all files
- Replace with your store name
- Update navbar brand and titles

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create your-app-name
git push heroku main
heroku open
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📊 Features Breakdown

| Feature | Status | Notes |
|---------|--------|-------|
| Product Display | ✅ | 6 sample products included |
| Search Functionality | ✅ | Real-time search |
| Category Filter | ✅ | Multiple categories |
| Shopping Cart | ✅ | LocalStorage persistence |
| Add/Remove Items | ✅ | Full cart management |
| Quantity Control | ✅ | +/- buttons |
| Price Calculation | ✅ | Automatic subtotal, tax, total |
| Checkout | ✅ | Order placement |
| Responsive Design | ✅ | Mobile friendly |
| Modern UI | ✅ | Gradient design |

## 🐛 Troubleshooting

### "Port 5000 already in use"
```bash
# Change port in .env file
PORT=5001
```

### "Cannot find module"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Cart not saving
- Check browser's localStorage is enabled
- Clear browser cache and try again

## 📝 License

MIT License - Feel free to use this project for personal and commercial purposes.

## 👨‍💻 Author

Created by: **upeshy** (Yadav)

## 📞 Support

For issues or questions:
- Email: info@yadavstore.com
- GitHub: https://github.com/upeshy/Yadav-

---

**Happy Selling! 🎉**
