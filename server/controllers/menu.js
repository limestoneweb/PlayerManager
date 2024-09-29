// controllers/menu.js
import express from "express";
import mongoose from "mongoose";
import Menu from "../models/Menu.js";

const router = express.Router();

/**
 * Adds a new category to the menu.
 * Checks if the category already exists before adding.
 *
 * @param {object} req - The request object containing the new category in the body.
 * @param {object} res - The response object for sending responses.
 */
export const addCategory = (req, res) => {
  Menu.findOne({ mainMenu: req.body.newCategory }).then(async (menu) => {
    if (menu) {
      return res.status(404).json("Category already exists");
    }

    const newCategory = new Menu({ mainMenu: req.body.newCategory });

    await newCategory
      .save()
      .then((newCategory) => res.json("Category " + newCategory + " added!"))
      .catch((err) => res.sendStatus(400).json("Error: " + err));
  });
};

/**
 * Adds a new sub-category to an existing category.
 *
 * @param {object} req - The request object containing category and new sub-category in the body.
 * @param {object} res - The response object for sending responses.
 */
export const addSubCategory = async (req, res) => {
  try {
    Menu.findOneAndUpdate(
      { mainMenu: req.body.category },
      { $addToSet: { subMenu: req.body.newSubCategory } },
      { new: true, useFindAndModify: false },
      function (err, menu) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        if (!menu) {
          return res.sendStatus(404);
        }
        if (menu) {
          menu.save(function (err) {
            if (err) {
              res.send("Error: ", err);
            } else {
              return res.sendStatus(200);
            }
          });
        }
      }
    );
  } catch (err) {
    console.log("Error: " + err);
    return false;
  }
};

/**
 * Deletes a category by its ID.
 *
 * @param {object} req - The request object containing the category ID in params.
 * @param {object} res - The response object for sending responses.
 */
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No category with that id");

  await Menu.findByIdAndRemove(id);

  res.json({ message: "Category deleted successfully" });
};

/**
 * Deletes a sub-category from a category.
 *
 * @param {object} req - The request object containing category ID and sub-category name in the body.
 * @param {object} res - The response object for sending responses.
 */
export const deleteSubCategory = async (req, res) => {
  try {
    const { categoryId, subCategoryName } = req.body;

    const category = await Menu.findById(categoryId);

    if (!category) {
      return res.status(404).send("No category with that id");
    }

    category.subMenu = category.subMenu.filter(
      (subCategory) => subCategory.name !== subCategoryName
    );

    await category.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500);
  }
};

/**
 * Retrieves all categories with sub-menu items.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object for sending responses.
 */
export const getMenuCategory = (req, res) => {
  Menu.find({ subMenu: { $exists: true, $not: { $size: 0 } } })
    .then((categories) => res.json(categories))
    .catch((err) => res.sendStatus(400).json("Error: " + err));
};

/**
 * Retrieves all categories.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object for sending responses.
 */
export const getCategory = async (req, res) => {
  Menu.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.sendStatus(400).json("Error: " + err));
};
