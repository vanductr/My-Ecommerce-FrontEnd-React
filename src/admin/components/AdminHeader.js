// src/admin/components/AdminHeader.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaBell, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../../reducers/authSlice';
import LogoutModal from '../../components/LogoutModal';
import defaultAvatar from '../../assets/defaultAvatar.png';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const { fullName, avatar } = useSelector((state) => state.auth);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    setIsLogoutModalOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-full text-black focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FaBell className="text-2xl cursor-pointer hover:text-gray-300" />
          <div className="flex items-center space-x-2">
            <img
              src={avatar || defaultAvatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span>{fullName}</span>
          </div>
          <FaSignOutAlt className="text-2xl cursor-pointer hover:text-gray-300" onClick={handleLogout} />
        </div>
      </div>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onRequestClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmLogout}
      />
    </header>
  );
};

export default AdminHeader;
