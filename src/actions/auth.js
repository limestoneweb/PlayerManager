// auth.js (actions)
import Cookies from "js-cookie";
import {
  AUTH,
  START_LOADING,
  END_LOADING,
  AUTH_ERROR,
} from "../constants/actionTypes";
import * as api from "../api";

/**
 * Validates the JWT token by making an API call.
 *
 * @async
 * @function validateToken
 * @returns {Object|null} The user data if the token is valid, or null if invalid.
 */
export const validateToken = async () => {
  try {
    const response = await api.validateToken();
    return response.data;
  } catch (error) {
    console.error("Error validating token:", error);
    return null;
  }
};

/**
 * Signs up a new user by making an API call and dispatching actions to update the store.
 *
 * @async
 * @function signup
 * @param {Object} formData - The data for the new user.
 * @param {Function} router - The router function to navigate after signup.
 * @returns {function} A dispatch function to trigger a Redux action.
 * @throws {Error} Throws an error if signup fails.
 */
export const signup = (formData, router) => async (dispatch) => {
  console.log("In signup action with formData:", formData);
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signUp(formData);
    console.log("Signup response data:", data);

    Cookies.set("jwtToken", data.token, { expires: 7 });

    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    router("/");
  } catch (error) {
    console.error("Error in signup action:", error);
    dispatch({ type: AUTH_ERROR, payload: error.message });
    dispatch({ type: END_LOADING });
    throw new Error("Signup failed");
  }
};
