import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Header, UserDashBoardNav } from './components';

const UserDashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Header />
      <div className="userDashContainer flex">
      <UserDashBoardNav/>
      <div className="dashboard-content flex items-center justify-center">
        <Outlet /> {/* This will render the specific dashboard page content */}
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserDashboardLayout;
