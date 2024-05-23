import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/authSlice';
import { Link } from 'react-router-dom';

const UserMenu = ({ fullName, avatar }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50"
    >
      <div className="px-4 py-2 text-gray-800">
        <img
          src={avatar}
          alt="Avatar"
          className="w-8 h-8 rounded-full inline-block mr-2"
        />
        <span>{fullName}</span>
      </div>
      <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Profile
      </Link>
      <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Settings
      </Link>
      <button
        onClick={handleLogout}
        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
