//Image.js

import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

/**
 * Image component used to display a full-screen background image.
 *
 * This component applies a fixed soccer-themed background image to a grid container,
 * utilizing Material-UI's Grid system for layout.
 *
 * @returns {JSX.Element} - The rendered Image component with a full-screen background image.
 */
const Image = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.outerContainer}>
      <div className={classes.heroImage} />
    </Grid>
  );
};

export default Image;
