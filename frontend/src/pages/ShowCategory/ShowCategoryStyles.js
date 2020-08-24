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
    height: "55rem",
    width: "70%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0.1rem 0",
      width: "94%",
    },
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.colors.lightGray,
  },
  figureStyle: {
    padding: "1rem 0",
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
    width: "80%",
    height: "90%",
    padding: "0.5rem",
    backgroundColor: theme.colors.lightGray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
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
  },
  lightDividerStyle: {
    width: "100%",
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
  headerGridStyle: {
    display: "flex",
    alignItems: "flex-end",
  },
}));
