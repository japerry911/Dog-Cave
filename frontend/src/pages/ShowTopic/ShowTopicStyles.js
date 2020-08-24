import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  mainDivStyle: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: "3rem",
    [theme.breakpoints.only("xs")]: {
      minHeight: "85rem",
    },
  },
  mainContainerStyle: {
    minHeight: "40rem",
  },
  paperStyle: {
    border: `3pt solid ${theme.palette.secondary.main}`,
    padding: "3rem 0",
    marginTop: "3rem",
    minHeight: "55rem",
    width: "70%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "93%",
    },
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.colors.lightGray,
  },
  figureStyle: {
    width: "100%",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  logoStyle: {
    width: "100%",
  },
  subPaperStyle: {
    width: "90%",
    minHeight: "90%",
    padding: "1rem",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem",
    },
  },
  gridItemStyle: {
    flexBasis: "15%",
  },
  dividerStyle: {
    width: "100%",
    height: "0.25rem",
    backgroundColor: theme.colors.lightBlueGray,
  },
  minFlexBasisStyle: {
    flexBasis: "100%",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "10%",
    },
  },
  lightDividerStyle: {
    width: "100%",
    height: "0.125rem",
  },
  headerTextStyle: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000",
  },
  headerTextLeftStyle: {
    paddingLeft: "0.75rem",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000",
  },
  profieImgStyle: {
    borderRadius: 12,
    width: "4.5rem",
    height: "4.5rem",
    marginTop: "1rem",
  },
  bodyTextStyle: {
    fontSize: "0.75rem",
    padding: "0 0.5rem",
  },
  timeTextStyle: {
    fontSize: "0.5rem",
  },
  formContainerStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: "0.5rem",
  },
  bigTextFieldStyle: {
    width: "90%",
    borderRadius: 12,
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    border: `1pt solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    width: "100%",
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
  buttonGridStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
