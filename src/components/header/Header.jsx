import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { setError } from '../../features/auth/authSlice';
import { handleResponse, logoutFromClientSide } from '../../utils';
import { Auth } from '../../services';
import "./header.css";
import useTopLoader from '../../hooks/useTopLoader';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { topLoaderNumber } = useTopLoader();


  // Navigation links for authenticated and non-authenticated users
  const nav = [
    {
      id: "home",
      name: "Home",
      slug: "/",
      userActive: true,  // Always visible for both logged in and logged out users
    },
    {
      id: "login",
      name: "Login",
      slug: "/login",
      userActive: !auth.isAuthenticated,  // Visible only if user is not authenticated
    },
    {
      id: "register",
      name: "Register",
      slug: "/register",
      userActive: !auth.isAuthenticated,  // Visible only if user is not authenticated
    },
    {
      id: "dashboard",
      name: "DashBoard",
      slug: `${auth.admin ? "/admin/dashboard" : "/user/dashboard"}`,
      userActive: auth.isAuthenticated,  // Visible only if user is authenticated
    },
    {
      id: "logout",
      name: "Logout",
      slug: "/logout",
      userActive: auth.isAuthenticated,  // Visible only if user is authenticated
    }
  ];

  // Handle logout action
  const handleLogout = async () => {
    try {
      const response = await handleResponse(Auth.logout({ user: localStorage.getItem("userData") }));
      if (response.error) {
        logoutFromClientSide()
      }

      logoutFromClientSide()
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <header className='header primary-div'>
      <div style={{ width: `${topLoaderNumber}px`, height: "4px", backgroundColor: "green" }}></div>

      <nav className='header-navs'>
        {nav.map((link) =>
          link.userActive && (
            link.id === "logout" ? (
              <button
                className='header-navs-nav'
                key={link.id}
                onClick={handleLogout}
                style={{ margin: "0 10px", background: "none", border: "none", cursor: "pointer" }}
              >
                {link.name}
              </button>
            ) : (
              <Link
                className='header-navs-nav'
                key={link.id}
                to={link.slug}
                style={{ margin: "0 10px" }}
              >
                {link.name}
              </Link>
            )
          )
        )}
      </nav>
    </header>

  );
};

export default Header;
