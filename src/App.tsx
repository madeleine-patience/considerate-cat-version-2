import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./theme/themeBuilder";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
