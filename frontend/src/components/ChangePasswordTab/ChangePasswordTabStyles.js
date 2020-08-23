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
    color: theme.colors.lightBlueGray,
  },
  dividerStyle: {
    backgroundColor: theme.colors.lightBlueGray,
    height: "0.15rem",
  },
}));
