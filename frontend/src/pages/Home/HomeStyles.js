import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                      url('https://dog-cave2134912939213.s3.us-east-2.amazonaws.com/Home/agreen-duhoki-7V_j2mFTJLQ-unsplash.jpg')`,
    backgroundSize: "cover",
    minHeight: "100%",
    backgroundPosition: "0 60%",
  },
  paperStyle: {
    border: `3pt solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    width: "30%",
    borderRadius: 12,
    padding: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      padding: 0,
    },
  },
  headerTextStyle: {
    color: theme.colors.white,
  },
  gridItemStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  mainGridContainerStyle: {
    height: "100%",
    width: "100%",
    paddingTop: "15rem",
  },
  buttonsDivStyle: {
    cpaddingTop: "3rem",
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1rem",
      width: "90%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    border: `3pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "40%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `3pt solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: "220ms ease-in-out",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      height: "5rem",
      padding: "0.5rem",
      margin: "1rem 0",
    },
  },
  logoStyle: {
    width: "100%",
  },
}));
