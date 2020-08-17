import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuDivStyle: {
    display: "flex",
    paddingRight: "5rem",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
  },
  linkStyle: {
    width: "7%",
    padding: "0 1rem",
  },
}));
