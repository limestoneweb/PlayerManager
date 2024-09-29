import * as api from "../api";
import {
  FETCH_MENU,
  CREATE_MENU,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
} from "../constants/actionTypes";

/**
 * Fetches all categories from the server and dispatches an action to update the store.
 *
 * @async
 * @function getCategory
 * @returns {function} A dispatch function to trigger a Redux action.
 */
export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getCategory();
    dispatch({ type: FETCH_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Fetches the menu categories from the server and dispatches an action to update the store.
 *
 * @async
 * @function getMenuCategory
 * @returns {function} A dispatch function to trigger a Redux action.
 */
export const getMenuCategory = () => async (dispatch) => {
  try {
    const { data } = await api.getMenuCategory();
    dispatch({ type: FETCH_MENU, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Adds a new category to the server and dispatches an action to update the store.
 *
 * @async
 * @function addCategory
 * @param {Object} category - The category to be added.
 * @returns {function} A dispatch function to trigger a Redux action.
 */
export const addCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.addCategory(category);
    dispatch({ type: CREATE_MENU, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Adds a new subcategory to the server and dispatches an action to update the store.
 *
 * @async
 * @function addSubCategory
 * @param {Object} category - The subcategory to be added.
 * @returns {function} A dispatch function to trigger a Redux action.
 */
export const addSubCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.addSubCategory(category);
    dispatch({ type: CREATE_MENU, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Deletes a category from the server and dispatches an action to update the store.
 *
 * @async
 * @function deleteCategory
 * @param {string} id - The ID of the category to be deleted.
 * @returns {function} A dispatch function to trigger a Redux action.
 */
export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);
    dispatch({ type: DELETE_CATEGORY, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Deletes a subcategory from the server and dispatches an action to update the store.
 *
 * @async
 * @function deleteSubCategory
 * @param {Object} category - The subcategory to be deleted.
 * @returns {function} A dispatch function to trigger a Redux action.
 */
export const deleteSubCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.deleteSubCategory(category);
    dispatch({ type: DELETE_CATEGORY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
