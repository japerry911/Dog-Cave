import React from "react";
import Routes from "./router/Routes";
import NavBar from "./components/NavBar/NavBar";
import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import ToastBar from "./components/ToastBar/ToastBar";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes />
        </main>
        <ToastBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
