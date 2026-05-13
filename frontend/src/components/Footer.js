import React from 'react';
import { AiFillFacebook, AiFillTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">About Yadav Electronics</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted online marketplace for electronics components, Arduino, sensors, and robotics parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Categories</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Returns</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400 text-sm space-y-2 mb-4">
              <p>Email: support@yadavelectronics.com</p>
              <p>Phone: +91-XXXX-XXXX-XXXX</p>
              <p>Hours: 9 AM - 6 PM IST</p>
            </div>
            <div className="flex gap-4 text-2xl">
              <AiFillFacebook className="hover:text-amber-500 cursor-pointer transition" />
              <AiFillTwitter className="hover:text-amber-500 cursor-pointer transition" />
              <AiFillInstagram className="hover:text-amber-500 cursor-pointer transition" />
              <AiFillLinkedin className="hover:text-amber-500 cursor-pointer transition" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Yadav Electronics. All rights reserved. | Secure Shopping | Fast Delivery | Expert Support</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
