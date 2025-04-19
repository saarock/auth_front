import React from 'react';
import { FaUtensils, FaPlusCircle, FaUsersCog, FaDeviantart } from 'react-icons/fa';
import './AdminDash.css';
import { NavLink } from 'react-router'; // Correct import for NavLink
import { useSelector } from 'react-redux';

const AdminDashBoardNav = () => {
  const user = useSelector((state) => state.auth.user);

  const navLinks = [
    { name: 'Add Product', path: 'add-product', icon: <FaUtensils /> }, 
    { name: 'Manage Product', path: 'manage-product', icon: <FaPlusCircle /> },
    { name: 'Manage Users', path: 'manage-users', icon: <FaUsersCog /> },
    { name: 'My details', path: 'my-details', icon: <FaDeviantart /> },
  ];

  return (
    <div className="dashboard-nav-container">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <h2 className="user-name">Welcome, {user?.fullName || 'Admin'}</h2>
        </div>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink
                to={link.path}
                className="nav-link"
                activeClassName="activeg"
                exact={link.path === '/'} // Only use exact for the root path
              >
                <span className="icon">{link.icon}</span>
                <span className="link-text">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashBoardNav;
