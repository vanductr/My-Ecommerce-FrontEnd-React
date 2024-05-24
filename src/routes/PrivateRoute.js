// src/routes/PrivateRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { token, roles } = useSelector((state) => state.auth);

  return token && roles.includes('ROLE_ADMIN') ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
