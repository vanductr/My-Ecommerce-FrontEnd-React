import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../reducers/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const UserMenu = ({ fullName, avatar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    confirmAlert({
      title: 'Xác nhận đăng xuất',
      message: 'Bạn có chắc chắn muốn đăng xuất không?',
      buttons: [
        {
          label: 'Có',
          onClick: async () => {
            await dispatch(logoutUser()).unwrap();
            navigate('/');
          }
        },
        {
          label: 'Không',
          onClick: () => { }
        }
      ]
    });
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-50">
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
