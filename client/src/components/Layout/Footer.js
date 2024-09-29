import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { FooterMessage, FooterLinks } from "./FooterComponents"; // Importera de nya komponenterna

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.rootFooter}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <FooterMessage />
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <FooterLinks />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
