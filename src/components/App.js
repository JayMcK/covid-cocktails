import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";

import "../App.css";
import Home from "./Home";
import Footer from "./ui/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
