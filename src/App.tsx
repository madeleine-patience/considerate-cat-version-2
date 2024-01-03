import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./theme/themeBuilder";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
