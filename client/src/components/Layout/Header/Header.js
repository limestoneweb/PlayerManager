//Header.js
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import DrawerMenu from "../Menu/DrawerMenu";
import LanguageToggle from "../Menu/LanguageToggle";
import useStyles from "../styles";
import { useAuth } from "../../Auth/AuthContext";
import Title from "./Title";
import SearchBar from "./SearchBar";
import LogoutButton from "./LogoutButton";

const Header = () => {
  // Local state to manage loading status and search query
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Redux state for menu categories
  const category = useSelector((state) => state.menus);

  // Custom styles from useStyles
  const classes = useStyles();

  // Hooks for navigation and route location
  const navigate = useNavigate();
  const location = useLocation();

  // Authentication context
  const { isAuthenticated, logout } = useAuth();

  // Effect to manage loading state, simulating async operation
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Effect to manage loading state when authentication status changes
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [isAuthenticated]);

  // Function to navigate to search results or home page
  const searchPlayer = useCallback(() => {
    if (search.trim()) {
      navigate(`/players/search?searchQuery=${search}&page=1`);
    } else {
      navigate("/");
    }
  }, [navigate, search]);

  // Handle Enter key press to trigger search
  const handleKeyPress = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        searchPlayer();
      }
    },
    [searchPlayer]
  );

  // Handle logout and redirect to home page
  const handleLogout = useCallback(
    (e) => {
      e.preventDefault();
      logout();
      navigate("/");
    },
    [logout, navigate]
  );

  // Show loading indicator while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Filter menu items based on authentication status
  const menuItems = isAuthenticated
    ? category
    : category.filter((menu) => menu.subMenu.length > 0);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={
          location.pathname === "/"
            ? classes.transparentBackground
            : classes.blackBackground
        }
      >
        <div className={classes.appBar}>
          <Toolbar component="div">
            {/* Drawer menu with categories */}
            <DrawerMenu
              categories={menuItems}
              isAuthenticated={isAuthenticated}
            />

            {/* Title with link to home */}
            <Title />

            {/* Search input field */}
            <SearchBar
              search={search}
              setSearch={setSearch}
              handleKeyPress={handleKeyPress}
            />

            {/* Language toggle button */}
            <LanguageToggle />

            {/* Logout button, shown only if authenticated */}
            {isAuthenticated && <LogoutButton handleLogout={handleLogout} />}
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
