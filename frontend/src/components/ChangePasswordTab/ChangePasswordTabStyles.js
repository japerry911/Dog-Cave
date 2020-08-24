import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  gridContainerStyle: {
    minHeight: "30rem",
  },
  headerTextStyle: {
    color: theme.colors.lightBlueGray,
  },
  textFieldStyle: {
    width: "80%",
    "& .MuiFormLabel-root": {
      color: theme.colors.lightBlueGray,
    },
    "& .MuiInput-underline:before": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiInputBase-input": {
      color: theme.colors.lightBlueGray,
    },
  },
  dividerStyle: {
    backgroundColor: theme.colors.lightBlueGray,
    height: "0.15rem",
  },
  buttonStyle: {
    marginBottom: "3rem",
    backgroundColor: theme.palette.primary.main,
    border: `1pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "80%",
    borderRadius: 12,
    padding: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      border: `1pt solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      transition: "220ms ease-in-out",
    },
    [theme.breakpoints.only("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "42%",
      fontSize: ".6rem",
    },
  },
  formContainerStyle: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justify: "space-between",
  },
}));
