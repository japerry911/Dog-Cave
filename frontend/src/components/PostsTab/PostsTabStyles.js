import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  gridContainerStyle: {
    height: "100%",
  },
  headerTextStyle: {
    color: theme.colors.lightBlueGray,
  },
  dividerStyle: {
    backgroundColor: theme.colors.lightBlueGray,
    height: "0.15rem",
  },
  postContentTextStyle: {
    color: theme.colors.lightBlueGray,
    fontSize: ".8rem",
  },
  dateTextStyle: {
    color: theme.colors.lightBlueGray,
    fontSize: "0.4rem",
  },
  postGridContainerStyle: {
    padding: "0.5rem 0",
    textDecoration: "none",
  },
  lightDividerStyle: {
    backgroundColor: theme.colors.lightBlueGray,
  },
}));
