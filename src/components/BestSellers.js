import React from 'react';
import ProductCard from './ProductCard';

const BestSellers = ({ products }) => {
  return (
    <div className="py-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
