import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import Soccer1 from "../../../images/soccer1.png";

// Separate component for the image section
const ImageSection = ({ classes }) => (
  <Grid item xs={12}>
    <div className={classes.imageContainer}>
      <img className={classes.imageAbout} src={Soccer1} alt="Bild" />
    </div>
  </Grid>
);

/**
 * About component displays information about the application or organization.
 * It may include details such as mission, vision, values, and key features.
 *
 * @returns {JSX.Element} The rendered About component.
 */
const About = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.outerContainer}>
      {/* Vänster sida */}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        className={classes.textContainer}
      >
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          quis nostrud exercitation ullamco laboris nisi ut.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className={classes.readMoreButton}
        >
          Read more
        </Button>
      </Grid>

      {/* Höger sida med separat bildsektion */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <ImageSection classes={classes} />
      </Grid>
    </Grid>
  );
};

export default About;
