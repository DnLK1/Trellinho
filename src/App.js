import React, { useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import HandleKeywordSearch from "./contexts/HandleKeywordSearch";
import "./App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <HandleKeywordSearch.Provider value={{ keyword, setKeyword }}>
        <Header />
        <Body />
      </HandleKeywordSearch.Provider>
    </ThemeProvider>
  );
}

export default App;
