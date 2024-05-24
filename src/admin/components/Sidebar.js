// src/admin/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaUsers, FaShoppingCart, FaCog, FaChartLine, FaTags } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-gray-700' : '';
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <nav className="mt-10 flex-1">
        <Link to="/admin/dashboard" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/dashboard')}`}>
          <FaTachometerAlt className="mr-3" />
          Dashboard
        </Link>
        <Link to="/admin/products" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/products')}`}>
          <FaBoxOpen className="mr-3" />
          Manage Products
        </Link>
        <Link to="/admin/categories" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/categories')}`}>
          <FaTags className="mr-3" />
          Manage Categories
        </Link>
        <Link to="/admin/users" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/users')}`}>
          <FaUsers className="mr-3" />
          Manage Users
        </Link>
        <Link to="/admin/orders" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/orders')}`}>
          <FaShoppingCart className="mr-3" />
          Manage Orders
        </Link>
        <Link to="/admin/reports" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/reports')}`}>
          <FaChartLine className="mr-3" />
          Reports
        </Link>
        <Link to="/admin/settings" className={`flex items-center py-2.5 px-4 hover:bg-gray-700 ${isActive('/admin/settings')}`}>
          <FaCog className="mr-3" />
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
