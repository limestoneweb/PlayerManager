// Home.js
import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Layout/styles";
import LandingImage from "../images/UllevaalStadion.png";
import Welcome from "./Layout/Home/Welcome";
import About from "./Layout/Home/About";
import Image from "./Layout/Home/Image";
import Footer from "./Layout/Footer";

/**
 * Home component for the main landing page.
 * Displays a hero image, welcome message, about sections, an image, and the footer.
 *
 * @component
 */
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <img
            className={classes.heroImage}
            src={LandingImage}
            alt="Soccer Jersey Collection"
          />
        </Grid>
        <Welcome />
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Image />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
};

export default Home;
