// src/admin/pages/AdminDashboard.js
import React from 'react';
import AdminLayout from '../components/AdminLayout';
import AdminDashboardOverview from '../components/AdminDashboardOverview';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <AdminDashboardOverview />
    </AdminLayout>
  );
};

export default AdminDashboard;

