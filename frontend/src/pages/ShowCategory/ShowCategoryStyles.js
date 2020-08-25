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
    padding: "1.5rem 0",
    marginTop: "3rem",
    minHeight: "25rem",
    width: "70%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.colors.lightGray,
  },
  figureStyle: {
    width: "80%",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingBottom: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  logoStyle: {
    width: "100%",
  },
  subPaperStyle: {
    width: "80%",
    minHeight: "90%",
    padding: "1rem 0",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 12,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  gridItemStyle: {
    flexBasis: 0,
  },
  dividerStyle: {
    width: "90%",
    height: "0.25rem",
    backgroundColor: theme.colors.lightBlueGray,
  },
  gridRowContainerStyle: {
    minHeight: "3rem",
    flexBasis: 0,
  },
  lightDividerStyle: {
    width: "90%",
    height: "0.125rem",
  },
  headerTextStyle: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  headerTextLeftStyle: {
    paddingLeft: "0.75rem",
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  headerFlexGridStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
