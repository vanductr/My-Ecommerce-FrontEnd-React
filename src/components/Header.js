import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import CartDropdown from "./CartDropdown";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice";
import defaultAvatar from "../assets/defaultAvatar.png";
import UserMenu from "./UserMenu";

const Header = () => {
  const dispatch = useDispatch();
  const { fullName, token, avatar } = useSelector((state) => state.auth);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          <img
            src="https://via.placeholder.com/150"
            alt="Logo"
            className="h-10 inline-block mr-2"
          />
          MyStore
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <Link to="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="relative flex items-center space-x-4">
          <div
            className="relative text-gray-700 hover:text-blue-600"
            onClick={toggleCartDropdown}
          >
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {totalQuantity}
            </span>
            {isCartOpen && (
              <CartDropdown closeCart={() => setIsCartOpen(false)} />
            )}
          </div>
          {token ? (
            <div className="relative user-menu">
            <div className="relative group">
              <img
                src={avatar || defaultAvatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={toggleUserMenu}
              />
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Profile
              </div>
            </div>
            {isUserMenuOpen && (
              <UserMenu
                fullName={fullName}
                avatar={avatar || defaultAvatar}
              />
            )}
          </div>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              <FaUser className="text-2xl" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
