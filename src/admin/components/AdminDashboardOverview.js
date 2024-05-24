// src/admin/components/AdminDashboardOverview.js
import React from 'react';

const AdminDashboardOverview = () => {
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-6 text-gray-100">Welcome to the Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Total Products</h3>
          <p className="text-3xl font-semibold">123</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Total Users</h3>
          <p className="text-3xl font-semibold">456</p>
        </div>
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h3 className="text-2xl font-bold mb-2">Total Orders</h3>
          <p className="text-3xl font-semibold">789</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-gray-100">Recent Activities</h3>
        <ul className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <li className="mb-2 flex items-center">
            <span className="bg-green-500 w-3 h-3 rounded-full inline-block mr-2"></span>
            <p className="text-gray-300">User John Doe registered.</p>
          </li>
          <li className="mb-2 flex items-center">
            <span className="bg-yellow-500 w-3 h-3 rounded-full inline-block mr-2"></span>
            <p className="text-gray-300">Order #1234 placed by Jane Doe.</p>
          </li>
          <li className="mb-2 flex items-center">
            <span className="bg-blue-500 w-3 h-3 rounded-full inline-block mr-2"></span>
            <p className="text-gray-300">Product "XYZ" added to the catalog.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardOverview;
