import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  imageUploaderStyle: {
    width: "100%",
  },
  labelStyle: {
    color: "rgba(0, 0, 0, 0.54)",
    paddingBottom: "1em",
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
  inputStyle: {
    width: "70%",
    color: "rgba(0, 0, 0, 0.54)",
    [theme.breakpoints.only("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.5rem",
    },
  },
}));
