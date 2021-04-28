import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
