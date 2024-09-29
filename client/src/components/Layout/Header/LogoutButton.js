// LogoutButton.js
import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "../styles";

/**
 * LogoutButton component renders a button that triggers the logout functionality when clicked.
 *
 * @param {Function} handleLogout - Function to be called when the user clicks the button to log out.
 * @returns {JSX.Element} The rendered LogoutButton component.
 */
const LogoutButton = ({ handleLogout }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={handleLogout}
      className={classes.logoutButton}
      color="inherit"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
