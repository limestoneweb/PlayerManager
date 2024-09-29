//LanguageToggle.js
import React, { useCallback, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useStyles } from "./styles";

/**
 * LanguageToggle component allows users to switch between different languages.
 *
 * @returns {JSX.Element} The rendered LanguageToggle component.
 */
const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const classes = useStyles();

  useEffect(() => {
    const savedLanguage = Cookies.get("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = useCallback(() => {
    const newLanguage = i18n.language === "no" ? "en" : "no";
    i18n.changeLanguage(newLanguage);
    Cookies.set("language", newLanguage, { expires: 365 }); // Store language cookie for 1 year
  }, [i18n]);

  return (
    <Button className={classes.button} onClick={toggleLanguage}>
      {i18n.language === "no" ? "En" : "No"}
    </Button>
  );
};

export default LanguageToggle;
