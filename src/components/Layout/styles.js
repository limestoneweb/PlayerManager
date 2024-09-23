//styles.js - Styles for /Layout/Footer.js, /Layout/Header.js and /Layout/Main.js
import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  transparentBackground: {
    backgroundColor: "transparent",
  },

  blackBackground: {
    backgroundColor: "black",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
  language: {
    paddingLeft: 30,
  },
  appBar: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "transparent",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  logoutButton: {
    backgroundColor: theme.palette.primary.light, // Use the desired color from your theme
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },

  homeContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: "100vh",
  },
  hero: {
    display: "flex",
    height: "100vh", // 100% of the viewport height
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundAttachment: "fixed",
  },
  contentContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
  },

  welcomeText: {
    marginBottom: theme.spacing(3),
  },

  readMoreButton: {
    color: "white",
    borderColor: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },

  imagesContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomImage: {
    width: "100%",
    height: "auto",
    position: "relative",
    zIndex: 1,
  },

  topImage: {
    width: "75%", // Justera efter behov
    height: "auto",
    position: "absolute",
    top: "25%", // Justera efter behov
    left: "12.5%", // Justera efter behov
    zIndex: 2,
  },

  // Header styling
  rootHeader: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    padding: 0,
    marginTop: 0,
  },

  // Styles for the Footer component
  rootFooter: {
    flexGrow: 1,
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
  },
  h: {
    color: "white",
    textAlign: "center",
  },
  row: {},
  colSm: {
    color: "white",
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
  },
}));

export default useStyles;
