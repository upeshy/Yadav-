# 🚀 Yadav Electronics - Enterprise E-Commerce Platform

A complete, production-ready, Amazon-style e-commerce platform specialized in **Electronics Components, Arduino, IoT, Robotics, and Tech Products**.

---

## 📋 Project Structure

```
Yadav-Electronics/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── userRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   └── searchRoutes.js
│   ├── config/
│   │   └── database.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Cart.js
│   │   │   └── Checkout.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── store.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

---

## ✨ Key Features

### 🏠 Frontend (React)
- ✅ **Modern UI** - Amazon-style design with Tailwind CSS
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Product Pages** - Detailed product info with specs
- ✅ **Search & Filters** - Advanced filtering and sorting
- ✅ **Shopping Cart** - Full cart management
- ✅ **User Authentication** - Register and login

### ⚙️ Backend (Node.js + Express)
- ✅ **RESTful API** - Complete API structure
- ✅ **MongoDB** - NoSQL database for scalability
- ✅ **Authentication** - JWT-based auth system
- ✅ **Product Management** - Full CRUD operations
- ✅ **Categories** - Organized product categories
- ✅ **Search** - Text-based search with MongoDB
- ✅ **Security** - Helmet, sanitization, rate limiting

### 📦 Database (MongoDB)
- ✅ **Products** - Complete product collection
- ✅ **Users** - User profiles and authentication
- ✅ **Orders** - Order tracking and management
- ✅ **Categories** - Product categorization

---

## 🚀 Installation & Setup

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/electronics-store
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:3000
```

Start backend:
```bash
npm run dev
```

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Start frontend:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔌 API Endpoints

### Products
```
GET    /api/products              - Get all products with filters
GET    /api/products/:id          - Get product details
GET    /api/products/featured/list - Get featured products
GET    /api/products/trending/list - Get trending products
GET    /api/products/search/query - Search products
```

### Categories
```
GET    /api/categories            - Get all categories
GET    /api/categories/:id        - Get category details
```

### Users
```
POST   /api/users/register       - Register new user
POST   /api/users/login          - User login
```

### Cart & Orders
```
POST   /api/cart/add             - Add to cart
GET    /api/cart                 - Get cart items
POST   /api/orders/create        - Create order
GET    /api/orders               - Get user orders
```

### Search
```
GET    /api/search               - Advanced search with filters
```

---

## 📱 Technology Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Redux** - State management
- **Axios** - HTTP client
- **React Router** - Navigation
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Helmet** - Security

---

## 🎯 Product Categories

1. **Electronics Components** - Resistors, Capacitors, ICs, Diodes, etc.
2. **Arduino & IoT** - Arduino boards, ESP32, Raspberry Pi, Sensors
3. **Robotics** - Motors, Servo, Stepper, Robot kits
4. **Computer Parts** - RAM, SSD, Graphics Cards, Processors
5. **Mobile Accessories** - Chargers, Cables, Power Banks
6. **CCTV & Security** - Cameras, DVR, Smart Locks
7. **LED & Electrical** - LED Strips, SMPS, Switches
8. **Sensors** - Temperature, Motion, Proximity, etc.

---

## 🔐 Security Features

- ✅ **Helmet** - HTTP headers security
- ✅ **MongoDB Sanitization** - SQL injection prevention
- ✅ **Rate Limiting** - Prevent brute force attacks
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Password Hashing** - Bcrypt encryption
- ✅ **CORS** - Cross-origin security

---

## 📊 Database Schema

### Product Schema
```javascript
{
  name: String,
  description: String,
  category: ObjectId,
  price: Number,
  salePrice: Number,
  discount: Number,
  rating: Number,
  stock: Number,
  images: [String],
  specifications: Object,
  brand: String,
  sku: String,
  moq: Number,
  bulkPricing: Array,
  warranty: String,
  isActive: Boolean,
  isFeatured: Boolean,
  createdAt: Date
}
```

---

## 🎨 UI/UX Features

- ✅ **Amazon-style Layout** - Familiar navigation
- ✅ **Dark Mode** - Eye-friendly theme
- ✅ **Responsive Design** - Mobile optimized
- ✅ **Loading States** - Skeleton loaders
- ✅ **Smooth Animations** - Transition effects
- ✅ **Clean Typography** - Professional fonts
- ✅ **Trust Badges** - Security indicators

---

## 🚀 Production Deployment

### Backend (Heroku/Railway)
```bash
git push heroku main
```

### Frontend (Vercel)
```bash
vercel
```

---

## 📈 Performance Optimizations

- ✅ Code splitting
- ✅ Lazy loading
- ✅ Image optimization
- ✅ Caching strategies
- ✅ Database indexing
- ✅ API pagination

---

## 🛣️ Roadmap

- [ ] Admin Panel
- [ ] Vendor/Seller Panel
- [ ] Payment Gateway Integration (Stripe, Razorpay)
- [ ] Order Tracking
- [ ] User Reviews & Ratings
- [ ] Wishlist Feature
- [ ] Email Notifications
- [ ] SMS Notifications
- [ ] AI Recommendations
- [ ] Mobile App (React Native)

---

## 📞 Support

For issues or questions:
- Email: support@yadavelectronics.com
- Phone: +91-XXXX-XXXX-XXXX
- Hours: 9 AM - 6 PM IST

---

## 📄 License

MIT License - Feel free to use for personal and commercial projects.

---

## 👨‍💻 Author

**Yadav** (@upeshy)

Built with ❤️ for the electronics community.

---

**Let's build amazing electronics projects together! 🚀⚡**
