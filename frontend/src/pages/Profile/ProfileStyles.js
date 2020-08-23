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
  profileImgStyle: {
    borderRadius: "12%",
    width: "10rem",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  paperStyle: {
    border: `3pt solid ${theme.palette.secondary.main}`,
    padding: "1.5rem",
    marginTop: "3rem",
    minHeight: "30rem",
    width: "40%",
    backgroundColor: theme.colors.lightBlueGray,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: "space-between",
  },
  titleStyle: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
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
