// Khuyến mãi và ưu đãi đặc biệt.
import React from 'react';

const Promotions = () => {
  return (
    <div className="bg-blue-100 py-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Special Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow-lg">
            <img src="https://via.placeholder.com/300x150?text=Promo+1" alt="Promo 1" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Promo 1</h3>
            <p className="text-gray-700 mb-4">Save up to 50% on selected items.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Shop Now
            </button>
          </div>
          <div className="p-4 bg-white rounded shadow-lg">
            <img src="https://via.placeholder.com/300x150?text=Promo+2" alt="Promo 2" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Promo 2</h3>
            <p className="text-gray-700 mb-4">Buy one, get one free on select items.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Shop Now
            </button>
          </div>
          <div className="p-4 bg-white rounded shadow-lg">
            <img src="https://via.placeholder.com/300x150?text=Promo+3" alt="Promo 3" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Promo 3</h3>
            <p className="text-gray-700 mb-4">Free shipping on orders over $50.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
