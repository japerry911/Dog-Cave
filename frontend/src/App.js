import React from "react";
import Routes from "./router/Routes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
