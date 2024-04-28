import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {Layout} from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import HomePage from "./pages/HomePage";

function App() { 
  return (
    <div className="App">
    		<Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
  </Routes>
    </div>
  );
}

export default App;
  