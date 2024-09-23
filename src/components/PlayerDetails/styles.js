//styles.js for PlayerDetails.jsx
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    borderRadius: "0px",
  },
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxWidth: "300px",
    maxHeight: "500px",
  },
  card: {
    display: "flex",
    width: "100%",
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "20px",
    flex: 1,
  },
  imageSection: {
    marginRight: "20px",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  imageList1: {
    width: 200,
    maxHeight: "500px",
    paddingRight: 20,
  },
  imageListItem: {
    position: "relative",
    "& img": {
      opacity: 0.5,
      transition: "opacity 0.3s ease",
    },
    "&:hover img": {
      opacity: 1,
    },
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  swiperContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  },
  swiperSlide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  swiperImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  iconButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
  },
  closeIconButton: {
    top: 10,
    right: 10,
  },
  prevIconButton: {
    left: 10,
  },
  nextIconButton: {
    right: 10,
  },
}));
