// styles.js - Styles used by DrawerMenu.js and LanguageToggle.js
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1, 2),
  },
  mainMenuContainer: {
    display: "flex",
    flexFlow: "column wrap",
    maxHeight: 500,
    overflow: "auto",
  },
  mainMenuItem: {
    fontSize: "1rem",
    paddingTop: 1,
    paddingBottom: 1,
  },
  subMenuItem: {
    fontSize: "0.2rem",
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: theme.spacing(3),
  },
  addCategoryButton: {
    paddingTop: 2,
    paddingBottom: 1,
    paddingLeft: theme.spacing(3),
  },
  closeMenuButton: {
    alignSelf: "flex-start",
    margin: theme.spacing(2),
  },
}));
