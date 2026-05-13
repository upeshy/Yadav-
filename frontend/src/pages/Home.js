import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/featured/list');
        setFeaturedProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics & Components</h1>
            <p className="text-lg mb-6 text-gray-100">Find everything you need for your electronics projects - Arduino, Sensors, Robotics, and more.</p>
            <Link to="/products" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition">
              Shop Now
            </Link>
          </div>
          <div className="flex-1">
            <div className="text-6xl">⚡</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Arduino & IoT', 'Robotics', 'Computer Parts', 'Mobile Accessories', 'CCTV & Security', 'LED & Electrical', 'Sensors'].map((cat, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="font-bold text-sm md:text-base">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 8).map((product) => (
                <Link key={product._id} to={`/product/${product._id}`} className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-xl transition overflow-hidden">
                  <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                    📦
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-amber-500 font-bold">₹{product.price}</span>
                      {product.discount > 0 && (
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">{product.discount}% OFF</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      ⭐ {product.rating.toFixed(1)} ({product.reviews?.length || 0} reviews)
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold mb-2">Authentic Products</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">100% genuine electronics components</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Quick shipping across India</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">Secure Payment</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Safe & encrypted transactions</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Expert customer support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
