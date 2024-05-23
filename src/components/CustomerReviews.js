import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Great product, highly recommend!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Very satisfied with the quality.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    rating: 5,
    comment: 'Exceeded my expectations!',
  },
];

const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 py-8 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="p-4 bg-white rounded shadow">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index < review.rating ? 'text-yellow-500' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-gray-700 mb-2">{review.comment}</p>
              <p className="text-gray-500">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
