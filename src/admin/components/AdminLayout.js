// src/admin/components/AdminLayout.js
import React from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
