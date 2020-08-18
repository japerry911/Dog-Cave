import React from "react";
import Routes from "./router/Routes";
import NavBar from "./components/NavBar/NavBar";
import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
