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
    padding: "1rem 0",
    marginTop: "3rem",
    height: "55rem",
    width: "60%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  logoStyle: {
    width: "100%",
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
  },
  gridItemStyle: {
    flexBasis: "45%",
  },
}));
