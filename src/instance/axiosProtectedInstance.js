import axios from "axios";
import { ACCESS_TOKEN_COOKIE_NAME, REFRESH_TOKEN_COOKIE_NAME } from "../constant";
import { Cookie, LocalStorage } from "../utils";
import api from "./axiosInstance";  // Assuming this imports an instance for non-protected API calls

// Create the protected axios instance
const protectedApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add Authorization header (access token) to every request
protectedApi.interceptors.request.use(
    (config) => {
        const token = Cookie.get(ACCESS_TOKEN_COOKIE_NAME);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle expired access token and refresh logic
protectedApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Check if the error is due to expired token (401 Unauthorized)
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = Cookie.get(REFRESH_TOKEN_COOKIE_NAME); // Assuming the refresh token is stored in cookies
                if (!refreshToken) {
                    throw new Error("Refresh token is missing.");
                }

                // Make a request to the backend refresh endpoint
                const response = await api.post("/refresh", { refreshToken });

                // Assuming the response contains the new access token
                const newAccessToken = response.data.accessToken;
                if (newAccessToken) {
                    // Store the new access token and retry the original request
                    Cookie.set(ACCESS_TOKEN_COOKIE_NAME, newAccessToken);
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axios(originalRequest);
                } else {
                    throw new Error("Failed to refresh token.");
                }
            } catch (refreshError) {
                console.error("Error refreshing token:", refreshError);

                // If both the access token and refresh token are invalid, clear cookies and localStorage
                Cookie.remove(ACCESS_TOKEN_COOKIE_NAME); // Remove the invalid access token
                Cookie.remove(REFRESH_TOKEN_COOKIE_NAME); // Remove the invalid refresh token
                LocalStorage.removeItem("userData"); // Assuming you store user data in localStorage

                // Redirect the user to the login page or handle error appropriately
                window.location.href = "/login";  // Example: Redirect to login page
            }
        }

        return Promise.reject(error);
    }
);

export default protectedApi;
