import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineHeart, AiOutlineShare2 } from 'react-icons/ai';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div></div>;
  }

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-96 flex items-center justify-center text-6xl">
            📦
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex text-yellow-500">⭐ {product.rating.toFixed(1)} ({product.reviews?.length || 0} reviews)</div>
              {product.stock > 0 ? (
                <span className="text-green-600 font-semibold">✓ In Stock</span>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              )}
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-amber-500">₹{product.price}</div>
              {product.discount > 0 && (
                <div className="text-sm text-green-600 mt-2">Save {product.discount}% with this deal</div>
              )}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    value && (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
                <span className="px-4 py-2 border-l border-r">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
              </div>
              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded transition">
                Add to Cart
              </button>
              <button className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <AiOutlineHeart size={24} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded space-y-2 text-sm">
              <p>✓ Free Shipping on Orders Over ₹500</p>
              <p>✓ 30-Day Money Back Guarantee</p>
              <p>✓ Expert Technical Support</p>
              <p>✓ Warranty Details: {product.warranty || 'Check seller'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
