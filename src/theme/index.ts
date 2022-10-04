import { createTheme } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

const defaultTheme = createTheme({});

const theme = createTheme({
  status: {
    danger: red[500],
  },
  palette: {
    primary: {
      main: "#240D57",
    },
  },
  typography: {
    subtitle1: {
      fontSize: "1.5rem",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
      },
    },
  },
});

export default theme;
