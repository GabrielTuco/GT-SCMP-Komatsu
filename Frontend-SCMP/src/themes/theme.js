import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
      dark: "#323232",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      dark: "#333333",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#AAAAAA",
    },

    background: {
      default: "#fff",

      defaul2: "#F2F2F2",
      border: "#E6E6E6",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    color: "black",
  },
});
