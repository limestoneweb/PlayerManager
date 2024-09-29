// Welcome.js
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import Soccer3 from "../../../images/soccer3.png";

// Separate component for the image section
const ImageSection = ({ classes, src, alt }) => (
  <div className={classes.imageContainer}>
    <img className={classes.image} src={src} alt={alt} />
  </div>
);

// Separate component for the text section
const TextSection = ({ classes }) => (
  <div className={classes.textContainer}>
    <Typography variant="h4" gutterBottom>
      Welcome
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation
      ullamco laboris nisi ut
    </Typography>
    <div className={classes.buttonContainer}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.readMoreButton}
      >
        Read more
      </Button>
    </div>
  </div>
);

/**
 * Welcome component serves as a greeting or introductory section of the application.
 * It may include a welcome message, application features, or a call to action.
 *
 * @returns {JSX.Element} The rendered Welcome component.
 */
const Welcome = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.outerContainer}>
      {/* Left side */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ImageSection classes={classes} src={Soccer3} alt="Soccer Image" />
          </Grid>
        </Grid>
      </Grid>

      {/* Right side */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextSection classes={classes} />
      </Grid>
    </Grid>
  );
};

export default Welcome;
