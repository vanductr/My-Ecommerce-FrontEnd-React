import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../reducers/authSlice';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]{6,}$/;
    return regex.test(username);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateUsername(username)) {
      newErrors.username = 'Username phải có trên 6 ký tự và không có ký tự đặc biệt';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Email không đúng định dạng';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Mật khẩu phải có trên 8 ký tự và có chứa cả ký tự in hoa và số';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const result = await dispatch(registerUser({ fullName, username, email, password })).unwrap();
        toast.success('Đăng ký thành công!');
        setTimeout(() => {
          navigate('/login');
        }, 1500); // Đợi 1.5 giây trước khi chuyển hướng
      } catch (err) {
        if (err.httpStatus === 'CONFLICT') {
            if (err.message === 'Username already exists') {
              setErrors({ username: 'Username đã tồn tại' });
            } else if (err.message === 'Email already exists') {
              setErrors({ email: 'Email này đã được đăng kí' });
            }
          } else {
            toast.error(err.message);
            }
      }
    }
  };

  useEffect(() => {
    if (status === 'failed' && !errors.username) {
      toast.error(error);
    }
  }, [status, error, errors.username]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Bạn đã có tài khoản? <Link to="/login" className="text-blue-500 hover:underline">Đăng nhập</Link></p>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
          <a href="#" className="text-red-600 hover:text-red-800"><FaGoogle size={24} /></a>
          <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
