import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {Layout} from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import HomePage from "./pages/HomePage";
import { customTheme } from "./customTheme";
import useTitle from "./hooks/useTitle";
import NotFound from "./components/NotFound";


function App() {  
 useTitle("MERN Project")
  return (
    <ThemeProvider theme={customTheme}>
    <div className="App">
    		<Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
      </div>
      <ToastContainer theme="dark" />
      </ThemeProvider>
  );
}

export default App;
  