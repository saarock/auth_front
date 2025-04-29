import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setError } from '../../features/auth/authSlice';
import { handleResponse, logoutFromClientSide } from '../../utils';
import { Auth } from '../../services';
import './header.css';
import useTopLoader from '../../hooks/useTopLoader';
import useUser from '../../hooks/useUser';

// Import icons
import { FaHome, FaSignInAlt, FaUserPlus, FaTachometerAlt, FaSignOutAlt, FaPaintRoller, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const { user } = useUser();
  const dispatch = useDispatch();
  const { topLoaderNumber } = useTopLoader();
  
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const nav = [
    { id: "home", name: "Home", slug: "/", icon: <FaHome />, userActive: true },
    { id: "login", name: "Login", slug: "/login", icon: <FaSignInAlt />, userActive: !auth.isAuthenticated },
    { id: "register", name: "Register", slug: "/register", icon: <FaUserPlus />, userActive: !auth.isAuthenticated },
    { id: "products", name: "Products", slug: `/products`, icon: <FaPaintRoller />, userActive: auth.isAuthenticated },
    { id: "dashboard", name: "Dashboard", slug: `${user?.role === "admin" ? "/admin/dashboard/add-product" : "/user/dashboard/profile"}`, icon: <FaTachometerAlt />, userActive: auth.isAuthenticated },
    { id: "logout", name: "Logout", slug: "/logout", icon: <FaSignOutAlt />, userActive: auth.isAuthenticated }
  ];

  const handleLogout = async () => {
    try {
      const response = await handleResponse(Auth.logout({ user: localStorage.getItem("userData") }));
      if (response.error) logoutFromClientSide();
      logoutFromClientSide();
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prevState => !prevState);
  };

  return (
    <>
     <div style={{ width: `${topLoaderNumber}px`, height: "4px", backgroundColor: "green" }}></div>
     <header className="header primary-div">
     
      <div className="logo-div">
        <img src="./images/org_logo.png" alt="logo" height={100} width={100} />
      </div>

      {/* Mobile Nav Toggle Button */}
      <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
        {isMobileNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <nav className={`header-navs ${isMobileNavOpen ? 'open' : ''}`}>
        {nav.map((link) => 
          link.userActive && (
            link.id === "logout" ? (
              <button className="header-navs-nav logout" key={link.id} onClick={handleLogout}>
                <span className="nav-icon">{link.icon}</span> {link.name}
              </button>
            ) : (
              <NavLink className={`header-navs-nav ${link.id}`} activeClassName="activeg" key={link.id} to={link.slug}>
                <span className="nav-icon">{link.icon}</span> {link.name}
              </NavLink>
            )
          )
        )}
      </nav>
    </header>
    </>
    
  );
};

export default Header;
