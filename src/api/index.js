import axios from "axios";
import Cookies from "js-cookie";

// Create an instance of axios with a base URL defined by environment variable
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

/**
 * Axios request interceptor to attach JWT token to requests if available.
 * The token is retrieved from cookies and added to the Authorization header.
 */
API.interceptors.request.use(
  (req) => {
    const token = Cookies.get("jwtToken");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls

/**
 * Validates the current JWT token stored in the cookies by sending a request to the API.
 * @returns {Promise} - API response.
 */
export const validateToken = () => API.get("/users/validateToken");

/**
 * Sends a sign-in request with user credentials.
 * @param {Object} formData - The user login credentials (e.g., username and password).
 * @returns {Promise} - API response with user data and JWT token.
 */
export const signIn = (formData) => API.post("/users/signin", formData);

/**
 * Sends a sign-up request to register a new user.
 * @param {Object} formData - The new user's registration details.
 * @returns {Promise} - API response with user data and JWT token.
 */
export const signUp = (formData) => API.post("/users/signup", formData);

// Menu and Category API calls

/**
 * Fetches all available categories from the API.
 * @returns {Promise} - API response with a list of categories.
 */
export const getCategory = () => API.get("/menus/getCategory");

/**
 * Fetches menu categories from the API.
 * @returns {Promise} - API response with a list of menu categories.
 */
export const getMenuCategory = () => API.get("/menus/getMenuCategory");

// Player API calls

/**
 * Fetches all players from the API.
 * @returns {Promise} - API response with a list of players.
 */
export const getPlayer = () => API.get("/players");

/**
 * Fetches players with optional search key and pagination.
 * @param {Object} params - Parameters for search and pagination.
 * @param {string} [params.key="none"] - Search keyword.
 * @param {number} [params.page=1] - Page number for pagination.
 * @returns {Promise} - API response with a list of players.
 */
export const getPlayers = ({ key, page = 1 }) =>
  API.get("/players/listPlayers", { params: { key: key || "none", page } });

/**
 * Fetches a specific player by their ID.
 * @param {string} id - The ID of the player to fetch.
 * @returns {Promise} - API response with the player's details.
 */
export const getPlayerById = (id) => API.get(`/players/${id}`);

/**
 * Fetches players based on a search query and page number.
 * @param {Object} params - Parameters for search and pagination.
 * @param {string} [params.searchQuery="none"] - Search query.
 * @param {number} [params.page=1] - Page number for pagination.
 * @returns {Promise} - API response with filtered players.
 */
export const getPlayersBySearch = ({ searchQuery, page }) =>
  API.get("/players/search", {
    params: { searchQuery: searchQuery || "none", page },
  });

// Category management API calls

/**
 * Adds a new category to the system.
 * @param {Object} newCategory - The new category to add.
 * @returns {Promise} - API response with the added category.
 */
export const addCategory = (newCategory) =>
  API.post("/menus/addCategory", newCategory);

/**
 * Deletes a category by its ID.
 * @param {string} id - The ID of the category to delete.
 * @returns {Promise} - API response confirming the deletion.
 */
export const deleteCategory = (id) => API.delete(`/menus/${id}`);

/**
 * Adds a new sub-category to the system.
 * @param {Object} newSubCategory - The new sub-category to add.
 * @returns {Promise} - API response with the added sub-category.
 */
export const addSubCategory = (newSubCategory) =>
  API.post("/menus/addSubCategory", newSubCategory);

/**
 * Deletes a sub-category from the system.
 * @param {Object} subCategory - The sub-category to delete.
 * @returns {Promise} - API response confirming the deletion.
 */
export const deleteSubCategory = (subCategory) =>
  API.delete("/menus/deleteSubCategory", subCategory);

// Player management API calls

/**
 * Adds a new player to the system.
 * @param {Object} formData - The data of the player to add.
 * @returns {Promise} - API response with the added player.
 */
export const addPlayer = (formData) => API.post("/players", formData);

/**
 * Updates an existing player's details.
 * @param {string} id - The ID of the player to update.
 * @param {Object} formData - The updated player data.
 * @returns {Promise} - API response with the updated player.
 */
export const updatePlayer = (id, formData) =>
  API.post(`/players/updatePlayer/${id}`, formData);

/**
 * Deletes a player from the system.
 * @param {Object} formData - The data of the player to delete.
 * @returns {Promise} - API response confirming the deletion.
 */
export const deletePlayer = (formData) => API.delete(`players/${formData}`);
