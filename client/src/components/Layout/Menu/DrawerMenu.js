//DrawerMenu.js
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import AddCategory from "../../Admin/Category/AddCategory";
import AddSubCategory from "../../Admin/Category/AddSubCategory";
import DeleteCategory from "../../Admin/Category/DeleteCategory";
import DeleteSubCategory from "../../Admin/Category/DeleteSubCategory";
import ScrollDialog from "../../dialog";
import { useStyles } from "./styles";

/**
 * DrawerMenu component renders a navigation drawer for selecting categories and subcategories.
 *
 * @param {Array} categories - The list of categories to display in the drawer.
 * @param {boolean} isAuthenticated - Indicates whether the user is authenticated.
 * @returns {JSX.Element} The rendered DrawerMenu component.
 */
const DrawerMenu = ({ categories, isAuthenticated }) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const navigate = useNavigate();
  const players = useSelector((state) => state.players.players); // Alla spelare

  const filterCategories = useCallback(
    (filtCat) => {
      const filteredCategories = filtCat
        .map((category) => {
          const subMenusWithPlayers = category.subMenu.filter((subMenu) =>
            players.some((player) =>
              player.category.some(
                (cat) => cat.main === category.mainMenu && cat.sub === subMenu
              )
            )
          );

          return {
            ...category,
            subMenu: subMenusWithPlayers,
          };
        })
        .filter((category) => category.subMenu.length > 0);

      return filteredCategories;
    },
    [players]
  );

  useEffect(() => {
    setMenu(isAuthenticated ? categories : filterCategories(categories));
  }, [categories, filterCategories, isAuthenticated, players]);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleOpenDialog = useCallback((content) => {
    setDialogContent(content);
    setOpenDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleAddCategoryClick = useCallback(() => {
    handleOpenDialog(<AddCategory handleCloseDialog={handleCloseDialog} />);
  }, [handleOpenDialog, handleCloseDialog]);

  const handleAddSubCategoryClick = useCallback(
    (mainMenu) => {
      handleOpenDialog(
        <AddSubCategory
          mainCategory={mainMenu}
          handleCloseDialog={handleCloseDialog}
        />
      );
    },
    [handleOpenDialog, handleCloseDialog]
  );

  /**
   * Returns a click handler for adding sub categories.
   *
   * @param {string} mainMenu - The main category name.
   * @returns {function} The click handler function.
   */
  const createAddSubCategoryClickHandler = (mainMenu) => {
    return () => handleAddSubCategoryClick(mainMenu);
  };

  const handleDeleteCategoryClick = useCallback(
    (mainMenu, _id) => {
      handleOpenDialog(
        <DeleteCategory
          category={mainMenu}
          id={_id}
          handleCloseDialog={handleCloseDialog}
        />
      );
    },
    [handleOpenDialog, handleCloseDialog]
  );

  /**
   * Returns a click handler for deleting a specific category.
   *
   * @param {string} mainMenu - The main category name.
   * @param {string} _id - The id of the category.
   * @returns {function} The click handler function.
   */
  const createDeleteCategoryClickHandler = (mainMenu, _id) => {
    return () => handleDeleteCategoryClick(mainMenu, _id);
  };

  const handleDeleteSubCategoryClick = useCallback(
    (mainMenu, subItem) => {
      handleOpenDialog(
        <DeleteSubCategory
          mainCategory={mainMenu}
          subCategory={subItem}
          handleCloseDialog={handleCloseDialog}
        />
      );
    },
    [handleOpenDialog, handleCloseDialog]
  );

  /**
   * Returns a click handler for deleting a specific subcategory.
   *
   * @param {string} mainMenu - The main category name.
   * @param {string} subItem - The subcategory name to delete.
   * @returns {function} The click handler function.
   */
  const createDeleteSubCategoryClickHandler = (mainMenu, subItem) => {
    return () => handleDeleteSubCategoryClick(mainMenu, subItem);
  };

  const listPlayer = useCallback(
    (e, mainMenu, sub) => {
      e.preventDefault();
      const joinCategories = [mainMenu, sub];
      console.log("navigate in DrawerMenu");
      navigate(`/players/listPlayers?key=${joinCategories.join(",")}&page=1`, {
        redirect: true,
      });
      handleDrawerClose();
    },
    [handleDrawerClose, navigate]
  );

  /**
   * Returns a click handler for opening a list of players.
   *
   * @param {string} mainMenu - The main category name.
   * @param {string} subItem - The subcategory name.
   * @returns {function} The click handler function.
   */
  const createListPlayerHandler = useCallback(
    (mainMenu, subItem) => (e) => {
      listPlayer(e, mainMenu, subItem);
    },
    [listPlayer]
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerClose}>
        <IconButton
          className={classes.closeMenuButton}
          onClick={handleDrawerClose}
        >
          <CloseIcon />
        </IconButton>
        {isAuthenticated && (
          <ListItem className={classes.addCategoryButton}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleAddCategoryClick}
            >
              Add new category
            </Button>
          </ListItem>
        )}
        <div className={classes.mainMenuContainer}>
          {menu.map((category) => {
            const { _id, mainMenu, subMenu } = category;

            if (!_id || !mainMenu || !subMenu) {
              return null;
            }

            return (
              <div key={_id}>
                <ListItem className={classes.mainMenuItem}>
                  <ListItemText primary={mainMenu} />
                  {isAuthenticated && (
                    <div>
                      <IconButton
                        className={classes.iconButton}
                        onClick={createAddSubCategoryClickHandler(mainMenu)}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        className={classes.iconButton}
                        onClick={createDeleteCategoryClickHandler(
                          mainMenu,
                          _id
                        )}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  )}
                </ListItem>
                <List component="div" disablePadding>
                  {subMenu.map((subItem, index) => {
                    const subItemId = subItem ? subItem._id : "";
                    const subItemText = subItem || "";

                    return (
                      <ListItem
                        key={`${subItemId}-${index}`}
                        button
                        onClick={createListPlayerHandler(mainMenu, subItem)}
                        className={classes.subMenuItem}
                      >
                        <ListItemText primary={subItemText} />
                        {isAuthenticated && (
                          <div>
                            <IconButton
                              className={classes.iconButton}
                              onClick={createDeleteSubCategoryClickHandler(
                                mainMenu,
                                subItem
                              )}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        )}
                      </ListItem>
                    );
                  })}
                </List>
              </div>
            );
          })}
        </div>
      </Drawer>
      <ScrollDialog open={openDialog} onClose={handleCloseDialog}>
        {dialogContent}
      </ScrollDialog>
    </div>
  );
};

export default DrawerMenu;
