import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  headerTextStyle: {
    color: theme.colors.lightBlueGray,
  },
  textStyle: {
    padding: "1rem 0",
    color: theme.colors.lightBlueGray,
  },
  gridContainerStyle: {
    height: "100%",
  },
  dividerStyle: {
    backgroundColor: theme.colors.lightBlueGray,
    height: "0.15rem",
  },
}));
