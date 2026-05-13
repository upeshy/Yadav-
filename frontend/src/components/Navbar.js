import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>Get free shipping on orders over ₹500</div>
          <div className="flex gap-4">
            <a href="#">Help</a>
            <a href="#">Sell on Yadav Store</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
            <span>⚡</span>
            <span>Yadav Electronics</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search electronics, components, sensors..."
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:outline-none"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md">
              <AiOutlineSearch size={24} />
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition"
            >
              {darkMode ? <AiOutlineSun /> : <AiOutlineMoon />}
            </button>

            <Link to="/" className="relative text-2xl p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition">
              <AiOutlineUser />
            </Link>

            <Link to="/cart" className="relative text-2xl p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition">
              <AiOutlineShoppingCart />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-2xl p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition"
            >
              {mobileMenuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3 flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
          />
          <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
            <AiOutlineSearch />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="hidden lg:flex bg-gray-100 dark:bg-gray-800 max-w-7xl mx-auto px-4">
        <div className="flex gap-8 overflow-x-auto py-3">
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">Electronics</a>
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">Arduino & IoT</a>
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">Robotics</a>
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">Computer Parts</a>
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">Mobile Accessories</a>
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">CCTV & Security</a>
          <a href="#" className="whitespace-nowrap text-sm font-medium hover:text-amber-500 transition">LED & Electrical</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
