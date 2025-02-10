import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { logout, setError } from '../../features/auth/authSlice';
import { Cookie, handleResponse, LocalStorage, logoutFromClientSide } from '../../utils';
import { Auth } from '../../services';

const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

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
      slug: "/dash",
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
      const response = await handleResponse(Auth.logout({user: localStorage.getItem("userData")}));
      if (response.error) {
        logoutFromClientSide()
      }

      logoutFromClientSide()
    } catch(error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div>
      <nav>
        {nav.map((link) => 
          link.userActive && (
            link.id === "logout" ? (
              <button
                key={link.id}
                onClick={handleLogout}
                style={{ margin: "0 10px", background: "none", border: "none", cursor: "pointer" }}
              >
                {link.name}
              </button>
            ) : (
              <Link
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
    </div>
  );
};

export default Header;
