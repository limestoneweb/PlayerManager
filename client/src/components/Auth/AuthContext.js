import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { AUTH } from "../../constants/actionTypes";
import { validateToken } from "../../actions/auth.js";
import { signIn } from "../../api";

const AuthContext = createContext();

/**
 * Custom hook to use the AuthContext for authentication state and functions.
 * @returns {object} - Authentication state and related functions.
 */
export const useAuth = () => {
  return useContext(AuthContext);
};

/**
 * Provides authentication state and functionality for its children components.
 * Handles login, logout, and token validation using context.
 *
 * @component
 * @param {object} props - The props for the AuthProvider component.
 * @param {React.ReactNode} props.children - Child components that can access authentication context.
 */
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    /**
     * Checks if a JWT token exists and validates it.
     * If valid, sets the authentication state to true.
     */
    const checkAuth = async () => {
      const token = Cookies.get("jwtToken");
      if (token) {
        try {
          const userData = await validateToken();
          if (userData) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error("Error validating token:", error);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  /**
   * Logs the user in by sending login credentials to the API, saving the JWT token,
   * and setting the authentication state.
   *
   * @param {object} formData - The login form data (email, password, etc.).
   * @param {function} navigate - Function to navigate to a different route after login.
   * @param {function} dispatch - Redux dispatch function to update the auth state.
   */
  const login = async (formData, navigate, dispatch) => {
    try {
      const { data } = await signIn(formData);
      Cookies.set("jwtToken", data.token, { expires: 1 });
      dispatch({ type: AUTH, data });
      navigate("/");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  /**
   * Logs the user out by removing the JWT token from cookies and updating the authentication state.
   */
  const logout = () => {
    Cookies.remove("jwtToken");
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
