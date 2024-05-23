import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch } from 'react-redux';
import { checkToken } from './reducers/authSlice';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


// Thực hiện thay đổi Code trên nhánh mới. Để tránh việc mất mã nguồn trước đó.

// Thực hiện cập nhật và phát triển các tính năng liên quan đến người dùng và thông tin của họ