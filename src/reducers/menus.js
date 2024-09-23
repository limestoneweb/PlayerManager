import {
  FETCH_MENU,
  CREATE_MENU,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
} from "../constants/actionTypes";

/**
 * Reducer function to manage menu-related state.
 * Handles actions for fetching, creating, and deleting menus and categories.
 *
 * @param {Array} menus - The current state of the menus (default is an empty array).
 * @param {Object} action - The action dispatched to the reducer.
 * @returns {Array} The updated state based on the action type.
 */
const menusReducer = (menus = [], action) => {
  switch (action.type) {
    // Updates the state with the fetched menu data
    case FETCH_MENU:
      return action.payload;

    // Adds a new menu to the current state
    case CREATE_MENU:
      return [...menus, action.payload];

    // Updates the state with fetched categories
    case FETCH_CATEGORIES:
      return action.payload;

    // Removes a category from the state based on the action payload (category ID)
    case DELETE_CATEGORY:
      return menus.filter((menu) => menu._id !== action.payload);

    // Default case returns the current state if action type doesn't match
    default:
      return menus;
  }
};

export default menusReducer;
