//styles.js for /Players/Player/addNewPlayer.js and /Players/Player/Player.js
import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  card: {
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    paddingLeft: "1rem",
  },
  image: {
    marginLeft: "15px",
  },

  media: {
    height: 140,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  overlay: {
    position: "absolute",
    bottom: "40px",
    right: "20px",
    color: "black",
  },
}));
