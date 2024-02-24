import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { useRoutes } from "react-router";
import "./App.css";
import routes from "./routes";
import { store } from "./store";
import { ThemeProvider, createTheme } from "@mui/material";
 
const theme = createTheme({
  palette: {
    primary: {
      light: '#8b87ff',
      main: '#706bf9',
      dark: '#706bf9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans- serif",
    },
  },
});
 
function App() {
  const content = useRoutes(routes);
 
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s" defaultTitle="CERP-SMS" />
      <ThemeProvider theme={theme}>
        <Provider store={store}>{content}</Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
 
export default App;