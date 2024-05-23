import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCurrentPage } from '../reducers/productSlice';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Promotions from '../components/Promotions';
import ProductCategories from '../components/ProductCategories';
import BestSellers from '../components/BestSellers';
import CustomerReviews from '../components/CustomerReviews';
import BlogNews from '../components/BlogNews';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, status, error, totalPages, currentPage } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage-1, size: 4 }));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Banner />
      <Promotions />
      <ProductCategories />
      <main className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
        {status === 'succeeded' && (
          <>
            <ProductList products={items} />
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'} rounded`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
      {/* <BestSellers products={items.slice(0, 4)} /> */}
      <BestSellers products={[]} />
      <CustomerReviews />
      <BlogNews />
    </div>
  );
};

export default HomePage;
