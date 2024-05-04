import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.min.css";
import HomePage from "./pages/HomePage";
import { customTheme } from "./customTheme";
import useTitle from "./hooks/useTitle";
import NotFound from "./components/NotFound";
import RegisterPage from "./features/auth/pages/RegisterPage";
import VerifiedPage from "./features/auth/pages/VerifiedPage";
import LoginPage from "./features/auth/pages/LoginPage";
import { ResendEmailTokenPage } from "./features/auth/pages/ResendEmailTokenPage";

function App() {
  useTitle("MERN Project");

  const { user } = useSelector((state) => state.auth);

  console.log(user);
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {user && <Navbar />}
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="auth/verify" element={<VerifiedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/resend" element={<ResendEmailTokenPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer theme="dark" />
    </ThemeProvider>
  );
}

export default App;
