import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="text-lg font-semibold mb-2 hover:text-blue-500 transition-colors duration-300">{product.name}</h3>
      </Link>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={index < product.rating ? 'text-yellow-500' : 'text-gray-300'} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
