import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      minHeight: "45rem",
    },
  },
  logoImgStyle: {
    width: "40%",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  paperStyle: {
    border: `3pt solid ${theme.palette.secondary.main}`,
    padding: "1.5rem 0",
    marginTop: "3rem",
    minHeight: "30rem",
    width: "31%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.only("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.colors.lightGray,
  },
  buttonStyle: {
    marginBottom: "3rem",
    backgroundColor: theme.palette.primary.main,
    border: `1pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "80%",
    borderRadius: 12,
    padding: "1rem 0rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `1pt solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: "220ms ease-in-out",
    },
    [theme.breakpoints.only("md")]: {
      width: "60%",
      fontSize: "0.65rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      height: "1rem",
      fontSize: "0.45rem",
    },
  },
  dividerStyle: {
    backgroundColor: theme.palette.secondary.main,
    width: "95%",
  },
  textFieldStyle: {
    width: "70%",
    margin: "1.5rem 0",
    [theme.breakpoints.only("xs")]: {
      width: "80%",
      "& .MuiFormLabel-root": {
        fontSize: "0.7rem",
      },
      "& .MuiFormHelperText-root": {
        fontSize: "0.5rem",
      },
    },
  },
  subPaperStyle: {
    width: "80%",
    height: "90%",
    padding: "1rem 0",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    [theme.breakpoints.only("xs")]: {
      width: "88%",
      padding: "0.5rem 0",
      height: "70%",
    },
  },
  mainContainerStyle: {
    minHeight: "40rem",
  },
  buttonGridStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingTop: "2rem",
  },
  formStyle: {
    width: "100%",
  },
  textGridStyle: {
    width: "100%",
  },
}));
