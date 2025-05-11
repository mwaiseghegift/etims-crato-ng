import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AppLayout from "../layout/AppLayout";
import SignIn from "../pages/AuthPages/SignIn";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "@/pages/AuthPages/ForgotPassword";
import Items from "@/pages/dashboard/items/Items";
import CodeDefinitionsPage from "@/pages/dashboard/code-definitions";

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
        <Route path="/items" element={<Items />} />
        <Route path="/code-definitions" element={<CodeDefinitionsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
