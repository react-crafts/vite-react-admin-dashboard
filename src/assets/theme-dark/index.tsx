import { createTheme } from "@mui/material";
const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#576270',
      light: 'rgba(89, 96, 112, 0.75)',
      dark: 'rgba(57, 62, 70, 0.5)',
    },
    secondary: {
      main: '#80E1E5',
      light: 'rgba(128, 225, 229, 0.75)',
      dark: 'rgba(0, 173, 181, 0.5)',
    },
    background: {
      default: '#222831',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

export default themeDark;
