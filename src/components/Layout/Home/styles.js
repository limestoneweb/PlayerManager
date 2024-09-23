// styles.js - Styles used by /Layout/Home/About.js, /Layout/Home/Image.js, and /Layout/Home/Welcome/.js

import { makeStyles } from "@material-ui/core/styles";
import Soccer2 from "../../../images/soccer2.jpg";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    marginBottom: theme.spacing(2),
  },
  image: {
    marginTop: "5rem",
    marginLeft: "7.5rem",
    width: "80%",
    height: "auto",
    objectFit: "cover",
    borderRadius: 0,
  },
  imageAbout: {
    marginTop: "5rem",
    marginLeft: "0.5rem",
    width: "80%",
    height: "auto",
    objectFit: "cover",
    borderRadius: 0,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },

  readMoreButton: {
    color: "white",
    borderColor: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
  textContainer: {
    flex: 1,
    maxWidth: "75%",
    padding: theme.spacing(2),
    margin: "5rem",
    color: "white",
  },
  textContainerAbout: {
    flex: 1,
    maxWidth: "75%",
    padding: theme.spacing(2),
    marginTop: "5rem",
    marginLeft: "6.5rem",
    color: "white",
  },
  relativeContainer: {
    position: "relative",
  },
  heroImage: {
    backgroundImage: `url(${Soccer2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export default useStyles;
