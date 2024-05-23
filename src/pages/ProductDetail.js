import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../reducers/cartSlice';
import { fetchProducts } from '../reducers/productSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.items.find(item => item.id === parseInt(id)));

  useEffect(() => {
    if (!product) {
      dispatch(fetchProducts({ page: 1, size: 5 }));
    }
  }, [dispatch, product]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded mb-4 md:mb-0" />
        <div className="md:ml-8 flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < product.rating ? 'text-yellow-500' : 'text-gray-300'}>
                &#9733;
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
