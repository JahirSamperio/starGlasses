import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { Provider } from "react-redux";
import { store } from "./redux/store/store.jsx";
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e6758',
    },
    secondary: {
      main: '#70a090',
      light: '#6d966d',
    },
    background: {
      default: '#eaebed',
      paper: '#ecece6',
    },
    text: {
      primary: 'rgba(1, 50, 55, 1)',
      secondary: 'rgba(1, 50, 55, 1)',
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
            <CssBaseline />
            <AppRouter />
          </SnackbarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
