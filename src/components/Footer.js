import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo và mô tả */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyStore</h2>
            <p className="text-gray-400">Your one-stop shop for everything you need.</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>

          {/* Liên kết mạng xã hội */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400">
          &copy; 2024 My E-commerce Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
