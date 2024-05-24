import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "./reducers/authSlice";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./admin/pages/AdminDashboard";
import PrivateRoute from "./routes/PrivateRoute";
import UserLayout from "./components/UserLayout";
import AdminLayout from "./admin/components/AdminLayout";
import ManageCategories from "./admin/pages/ManageCategories";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout><HomePage /></UserLayout>} />
        <Route path="/product/:id" element={<UserLayout><ProductDetail /></UserLayout>} />
        <Route path="/login" element={<UserLayout><LoginPage /></UserLayout>} />
        <Route path="/register" element={<UserLayout><RegisterPage /></UserLayout>} />
        <Route path="/profile" element={<UserLayout><ProfilePage /></UserLayout>} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="categories" element={<ManageCategories />} />
          {/* <Route path="products" element={<AdminLayout><ManageProducts /></AdminLayout>} />
          <Route path="users" element={<AdminLayout><ManageUsers /></AdminLayout>} />
          <Route path="orders" element={<AdminLayout><ManageOrders /></AdminLayout>} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
