import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../reducers/authSlice';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { status, error, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({});
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (status === 'succeeded' && token) {
      toast.success('Đã đăng nhập thành công');
      setTimeout(() => {
        navigate('/');
      }, 1500); // Đợi 1.5 giây trước khi chuyển hướng
    } else if (status === 'failed') {
      if (error === 'Invalid username or password') {
        setErrors({ login: 'Tài khoản hoặc mật khẩu không chính xác' });
      } else {
        toast.error(error);
      }
    }
  }, [status, token, error, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        {status === 'loading' && <p>Loading...</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
          </div>
          {errors.login && <p className="text-red-500 text-sm mb-4">{errors.login}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Bạn chưa có tài khoản? <Link to="/register" className="text-blue-500 hover:underline">Đăng kí</Link></p>
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

export default LoginPage;
