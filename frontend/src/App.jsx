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
import PasswordResetRequestPage from "./features/auth/pages/PasswordResetRequestPage";
import PasswordResetPage from "./features/auth/pages/PasswordResetPage";
import { ROLES } from "./config/roles";
import UserListPage from "./features/users/pages/UserListPage";
import AuthRequired from "./components/AuthRequired";
import ProfilePage from "./features/users/pages/ProfilePage";
import EditProfileForm from "./features/users/pages/EditProfileForm";
import CustomerCreateForm from './features/customers/pages/CustomerCreateForm';
import SingleCustomerPage from './features/customers/pages/SingleCustomerPage';
import CustomerEditForm from "./features/customers/pages/CustomerEditForm";
import CustomersPage from './features/customers/pages/CustomersPage';
import SingleDocumentPage from './features/documents/pages/SingleDocumentPage';
import DocCreateEditForm from './features/documents/pages/DocCreateEditForm';
import DocumentsPage from './features/documents/pages/DocumentsPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';

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
          <Route
            path="reset_password_request"
            element={<PasswordResetRequestPage />}
          />
          <Route path="auth/reset_password" element={<PasswordResetPage />} />
          <Route element={<AuthRequired allowedRoles={[ROLES.User]} />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="edit-profile" element={<EditProfileForm />} />
            	<Route path="customers" element={<CustomersPage />} />
						<Route
							path="create-customer"
							element={<CustomerCreateForm />}
						/>
						<Route
							path="single-customer/:custId"
							element={<SingleCustomerPage />}
						/>
						<Route
							path="edit-customer/:custId"
							element={<CustomerEditForm />}
						/>
 		<Route path="documents" element={<DocumentsPage />} />
						<Route
							path="create-doc"
							element={<DocCreateEditForm />}
						/>
						<Route
							path="edit-doc/:id"
							element={<DocCreateEditForm />}
						/>
						<Route
							path="document/:id"
							element={<SingleDocumentPage />}
						/>
			<Route path="dashboard" element={<DashboardPage />} />
          </Route>
          <Route element={<AuthRequired allowedRoles={[ROLES.Admin]} />}>
            <Route path="users" element={<UserListPage />} />

          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer theme="dark" />
    </ThemeProvider>
  );
}

export default App;
