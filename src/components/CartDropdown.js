import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash, FaTimes } from "react-icons/fa";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartDropdown = ({ closeCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button
          onClick={closeCart}
          className="text-gray-600 hover:text-gray-900"
        >
          <FaTimes />
        </button>
      </div>
      <div className="p-4">
        {cartItems.length ? (
          cartItems.slice(0, 5).map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded mr-2"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  ${item.price} x {item.quantity}
                </p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty</p>
        )}
      </div>
      <div className="p-4 border-t border-gray-300">
        <p className="text-gray-700 font-semibold">Total: ${totalAmount}</p>
        <Link
          to="/cart"
          className="block text-center text-blue-500 hover:text-blue-600 mt-2"
        >
          View All Cart
        </Link>
      </div>
    </div>
  );
};

export default CartDropdown;
