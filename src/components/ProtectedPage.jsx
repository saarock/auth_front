import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Auth } from '../services';
import { login, setError, setLoading } from '../features/auth/authSlice';
import { Cookie, handleResponse, LocalStorage } from '../utils';
import { ACCESS_TOKEN_COOKIE_NAME } from '../constant';


const PUBLIC_ROUTES = ["/", "/login", "/register"]; // Define all public routes


const PagesWrapper = ({ children }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // Loading and Error states from auth slice
    const { loading, error } = auth;

    /**
     * run every time when the page mount;
     */


    const isPublicPage = PUBLIC_ROUTES.includes(location.pathname);
    console.log(isPublicPage);
    




    useEffect(() => {


        const verifyToken = async () => {

            try {

                dispatch(setLoading(true)); // Set loading state to true before the async operation
                const response = await handleResponse(Auth.verify());
                console.log(response);

                if (response.error) {
                    dispatch(setError(response.error));
                    navigate("/login");
                    return;
                }

                const userStateObj = {
                    token: Cookie.get(ACCESS_TOKEN_COOKIE_NAME),
                    ...LocalStorage.getItem("userData")
                };

                if (!auth.isAuthenticated) {
                    dispatch(login(userStateObj)); // Login user if not already authenticated
                }


                /**
                 * removed all the errors at the last
                 */
                dispatch(setError(""));

            } catch (error) {
                dispatch(setError(error.message)); // Handle error if caught
            } finally {
                dispatch(setLoading(false)); // Set loading state to false when the operation finishes
            }
        };

        verifyToken();
    }, [dispatch, auth.isAuthenticated]); // Only re-run effect if authentication state changes


       // Redirect if already authenticated and trying to access the login page
       useEffect(() => {
        if (auth.isAuthenticated && location.pathname === "/login") {
            navigate("/dash");
        }
    }, [auth.isAuthenticated, location.pathname, navigate]);
    


    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error && !isPublicPage) {
        return <div>Error: {error}</div>; // Display error message if error exists
    }

    return <>{children}</>; // Render children when everything is fine
};

export default PagesWrapper;
