import React from 'react'
import { Outlet } from 'react-router'
import { Footer, Header, UserDashBoardNav } from './components';

const AdminDashboard = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="adminDashContainer flex">
      <UserDashBoardNav/>
      <div className="dashboard-content flex items-center justify-center">
        <Outlet /> {/* This will render the specific dashboard page content */}
      </div>
      </div>

      <Footer />
    </div>
  )
}

export default AdminDashboard