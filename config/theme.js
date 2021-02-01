import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#556cd6",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Nanum Myeongjo",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "Nanum Myeongjo",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "Nanum Myeongjo",
      fontWeight: 800,
    },
    h4: {
      fontFamily: "Nanum Myeongjo",
      fontWeight: 800,
    },
    h5: {
      fontFamily: "Nanum Myeongjo",
      fontWeight: 800,
    },
    h6: {
      fontFamily: "Nanum Myeongjo",
      fontWeight: 800,
    },
    button: {
      textTransform: "none",
    },
    overline: {
      textTransform: "none",
    },
    fontFamily: [
      "Muli",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 2,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 2,
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 2,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 2,
      },
    },
  },
});

export default theme;
