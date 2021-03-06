import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  headerDiv: {
    backgroundImage: (props) =>
      `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${props.imgUrl}')`,
    minHeight: "20em",
    width: "100%",
    backgroundSize: "cover",
    paddingBottom: "5em",
    backgroundPosition: (props) =>
      props.pushUp ? "0 82%" : props.pushDown ? "0 28%" : "0 55%",
    alignItems: "center",
    display: "flex",
  },
  headerTextStyle: {
    color: theme.colors.lightGray,
    marginLeft: "8%",
    marginTop: "2em",
    fontWeight: "bold",
  },
}));
