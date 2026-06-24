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
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              PRINTiZY
            </h1>

            <p className="text-xl mb-6 text-yellow-50">
              Custom T-Shirts, Hoodies, Mugs, Caps & Personalized Gifts.
              Design your own products and get premium quality printing delivered to your doorstep.
            </p>

            <Link
              to="/products"
              className="inline-block bg-white text-yellow-600 hover:bg-yellow-100 font-bold py-3 px-8 rounded-lg transition"
            >
              Start Designing
            </Link>
          </div>

          <div className="flex-1 text-center">
            <div className="text-8xl md:text-9xl">
              👕
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              'Custom T-Shirts',
              'Printed Hoodies',
              'Polo T-Shirts',
              'Custom Mugs',
              'Printed Caps',
              'Corporate Gifts',
              'Photo Frames',
              'Personalized Products'
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-4xl mb-3">👕</div>
                <h3 className="font-bold text-sm md:text-base">
                  {cat}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Trending Products
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              {featuredProducts.slice(0, 8).map((product) => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
                >

                  <div className="bg-yellow-50 h-48 flex items-center justify-center text-6xl">
                    👕
                  </div>

                  <div className="p-4">

                    <h3 className="font-bold text-sm mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-600 font-bold text-lg">
                        ₹{product.price}
                      </span>

                      {product.discount > 0 && (
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                          {product.discount}% OFF
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-sm text-yellow-600">
                      ⭐ {product.rating?.toFixed(1) || 0}
                      ({product.reviews?.length || 0} reviews)
                    </div>

                  </div>

                </Link>
              ))}

            </div>
          )}
        </div>
      </section>

      {/* Why Choose PRINTiZY */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose PRINTiZY?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-5xl mb-3">🎨</div>
              <h3 className="font-bold mb-2">
                Premium Printing
              </h3>
              <p className="text-gray-600 text-sm">
                High-quality DTF, Screen & Sublimation Printing
              </p>
            </div>

            <div>
              <div className="text-5xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Quick shipping across India
              </p>
            </div>

            <div>
              <div className="text-5xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600 text-sm">
                Safe and encrypted online transactions
              </p>
            </div>

            <div>
              <div className="text-5xl mb-3">💬</div>
              <h3 className="font-bold mb-2">
                Design Support
              </h3>
              <p className="text-gray-600 text-sm">
                Professional assistance for your custom designs
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-4">
            Create Your Custom Product Today
          </h2>

          <p className="text-lg mb-6">
            Upload your design and get premium quality custom prints at the best price.
          </p>

          <Link
            to="/products"
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold hover:bg-yellow-100 transition"
          >
            Shop Now
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;
