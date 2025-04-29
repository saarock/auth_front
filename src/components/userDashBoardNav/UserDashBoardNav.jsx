import React from 'react';
import { FaUser, FaCog, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import './userDash.css';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';

const UserDashBoardNav = () => {
  const user = useSelector(state => state.auth.user);

  // Array to hold the navigation links along with their respective icons
  const navLinks = [
    { name: "Profile", path: "profile", icon: <FaUser /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Messages", path: "/messages", icon: <FaEnvelope /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="nav-panel">
      <div className="sidebar-container">
        <div className="user-profile">
          <h2 className="greeting-text">Welcome, {user?.fullName || "User"}</h2>
        </div>
        <ul className="navigation-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active-nav-item" : "nav-item")}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashBoardNav;