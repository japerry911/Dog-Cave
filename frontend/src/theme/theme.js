import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b5668",
    },
    secondary: {
      main: "#1f2d38",
    },
  },
  colors: {
    lightBlueGray: "#758895",
    white: "#fff",
    lightGray: "#b0bbc2",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
