import { createTheme } from "@material-ui/core/styles";

const ccBlue = "#0B5269";
const ccBlack = "#03051E";
const ccGold = "#978D58";
const ccWhite = "#EAE1E1";

export default createTheme({
  palette: {
    common: {
      blue: ccBlue,
      black: ccBlack,
      gold: ccGold,
      white: ccWhite,
    },
    primary: {
      main: ccBlue,
    },
    secondary: {
      main: ccGold,
    },
  },
  typography: {
    h1: {
      fontFamily: "Italianno",
      fontSize: "10rem",
      lineHeight: 1.5,
      color: ccGold,
    },
    h2: {
      fontFamily: "Josefin Sans",
      lineHeight: 1.5,
      fontSize: "2rem",
      color: ccWhite,
    },
    h3: {
      fontFamily: "Italianno",
      lineHeight: 1.5,
      fontSize: "2rem",
      color: ccGold,
    },
    h4: {
      fontFamily: "Josefin Sans",
      lineHeight: 1.5,
      fontSize: "2.5rem",
      color: ccBlue,
    },
    subtitle1: {
      fontFamily: "Josefin Sans",
      lineHeight: 1.5,
      fontSize: "1.5rem",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: ccBlue,
        fontSize: "1.5rem",
        fontFamily: "Italianno",
      },
    },
    MuiInput: {
      root: {
        color: ccBlue,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${ccGold}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${ccBlue}`,
        },
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: "Josefin Sans",
        fontWeight: "bold",
        fontSize: "1.5rem",
      },
    },
  },
});
