import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#393E46",
      light: "rgba(57, 62, 70, 0.75)",
      dark: "rgba(57, 62, 70, 0.5)",
    },
    secondary: {
      main: "#00ADB5",
      light: "rgba(0, 173, 181, 0.75)",
      dark: "rgba(0, 173, 181, 0.5)",
    },
    background: {
      default: "#EEEEEE",
    },
    text: {
      primary: "#000000",
    },
  },
});

export default theme;
