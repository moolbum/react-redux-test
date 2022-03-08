import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";

import { Provider } from "react-redux";
import { store } from "./store/index";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
