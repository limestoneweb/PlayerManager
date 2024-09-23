// Title.js
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "../styles";

/**
 * Title component renders the application's main title, styled as a clickable link that navigates to the homepage.
 *
 * @returns {JSX.Element} The rendered Title component.
 */
const Title = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="h6"
      color="inherit"
      className={classes.title}
      component={Link}
      to="./../"
    >
      Norsk Fotballdraktmuseum
    </Typography>
  );
};

export default Title;
