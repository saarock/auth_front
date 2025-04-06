import React from 'react';
import { FaUser, FaCog, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import './userDash.css';
import { Link } from 'react-router';
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
    <div className="dashboard-nav-container">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <h2 className='user-name'>Welcome, {user?.fullName  || "User"}</h2>
        </div>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>
                {/* Add icon and text */}
                <span className="icon">{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashBoardNav;
