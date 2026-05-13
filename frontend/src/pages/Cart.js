import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</p>
              <Link to="/products" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded transition">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 h-fit">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>₹0</span>
              </div>
              <div className="border-t border-gray-300 dark:border-gray-700 pt-3 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-amber-500">₹0</span>
              </div>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded transition" disabled>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
