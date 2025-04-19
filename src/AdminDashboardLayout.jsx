import React from 'react'
import { Outlet } from 'react-router'
import { Footer, Header} from './components';
import AdminDashBoardNav from './components/adminDashBoardNav/AdminDashBoardNav';

import { ToastContainer } from 'react-toastify';
const AdminDashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <ToastContainer />
      <div className="adminDashContainer flex relative">
        <AdminDashBoardNav />
        <div className="dashboard-content">
          <Outlet /> {/* This will render the specific dashboard page content */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboardLayout;
