import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AppLayout from "../layout/AppLayout";
import SignIn from "../pages/AuthPages/SignIn";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "@/pages/AuthPages/ForgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route
        element={
          <PrivateRoute>
            <AppLayout />
          </PrivateRoute>
        }
      >
        <Route index path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
