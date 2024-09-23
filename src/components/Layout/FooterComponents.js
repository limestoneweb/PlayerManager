import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useTranslation } from "react-i18next";

/**
 * FooterMessage component displays a message in the footer section
 * of the application. It uses internationalization for translating
 * the message based on the user's selected language.
 *
 * @returns {JSX.Element} The rendered FooterMessage component.
 */
const FooterMessage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Typography variant="h6" className={classes.h} component="h6">
      {t("welcome_message")}
    </Typography>
  );
};

/**
 * FooterLinks component renders a set of links in the footer section
 * of the application. It provides users with navigation options
 * and important information related to the website.
 *
 * @returns {JSX.Element} The rendered FooterLinks component.
 */
const FooterLinks = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" component="h2" className={classes.colSm}>
      &copy;{new Date().getFullYear()}{" "}
      <Link to="https://www.limestoneweb.se" className={classes.link}>
        LIMESTONEWEB.SE
      </Link>{" "}
      | All rights reserved | Terms Of Service | Privacy |
    </Typography>
  );
};

export { FooterMessage, FooterLinks };
