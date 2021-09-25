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
    subtitle1: {
      fontFamily: "Josefin Sans",
      lineHeight: 1.5,
      fontSize: "1.5rem",
    },
  },
});
