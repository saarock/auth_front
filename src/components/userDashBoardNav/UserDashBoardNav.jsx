import React from 'react';
import { FaUser, FaCog, FaBell } from 'react-icons/fa';
import './userDash.css';
import { NavLink } from 'react-router-dom'; 
import useUser from '../../hooks/useUser';
import useSocket from '../../hooks/useSocket';

const UserDashBoardNav = () => {
  const { user } = useUser();
  const { numberOfNotifications } = useSocket();







  const navLinks = [
    { name: 'Profile', path: 'profile', icon: <FaUser />, tooltip: 'View your profile' },
    { name: 'Stats', path: "stats", icon: <FaCog />, tooltip: 'Adjust your settings' },
    {
      name: 'Notifications',
      path: 'notifications',
      icon: <FaBell />,
      tooltip: 'Check your notifications',
    },
    {
      name: 'MyProduct',
      path: 'my-product',
      icon: <FaBell />,
      tooltip: 'Check your notifications',
    },
  ];

  return (
    <nav className="nav-panel">
      <div className="sidebar-container">
        <div className="user-profile">
          <div className="user-avatar">
            {user?.avatar ? (
              <img src={user.avatar} alt="User avatar" className="avatar-img" />
            ) : (
              <FaUser className="avatar-placeholder" />
            )}
          </div>
          <h2 className="greeting-text">
            Welcome, {user?.fullName || 'User'}
          </h2>
        </div>
        <ul className="navigation-list" aria-label="Dashboard navigation">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item-wrapper">
              {link.name === 'Notifications' && numberOfNotifications > 0 && (
                <span className="notification-badge">{numberOfNotifications}</span>
              )}
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-item active-nav-item' : 'nav-item')}
                title={link.tooltip} // Accessibility tooltip
                aria-label={link.name}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default UserDashBoardNav;