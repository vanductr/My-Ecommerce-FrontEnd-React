import React from 'react';

const ProductCategories = () => {
  return (
    <div className="py-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow-lg text-center">
            <img src="https://via.placeholder.com/150?text=Category+1" alt="Category 1" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Category 1</h3>
          </div>
          <div className="p-4 bg-white rounded shadow-lg text-center">
            <img src="https://via.placeholder.com/150?text=Category+2" alt="Category 2" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Category 2</h3>
          </div>
          <div className="p-4 bg-white rounded shadow-lg text-center">
            <img src="https://via.placeholder.com/150?text=Category+3" alt="Category 3" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Category 3</h3>
          </div>
          <div className="p-4 bg-white rounded shadow-lg text-center">
            <img src="https://via.placeholder.com/150?text=Category+4" alt="Category 4" className="w-full mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">Category 4</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
