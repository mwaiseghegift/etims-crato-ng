import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AppLayout from "../layout/AppLayout";
import SignIn from "../pages/AuthPages/SignIn";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "@/pages/AuthPages/ForgotPassword";
import CodeDefinitionsPage from "@/pages/dashboard/code-definitions";
import CodeList from "@/pages/dashboard/BasicPage/code-list/CodeList";
import BhfListPage from "@/pages/dashboard/BasicPage/bhf-list/bhf-list.page";
import ItemsClsPageComponent from "@/pages/dashboard/BasicPage/items-cls/items-cls.page";
import NoticeListComponent from "@/pages/dashboard/BasicPage/notice-list/notice-list.page";
import ItemsPage from "@/pages/dashboard/items/Items";

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
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/code-definitions" element={<CodeDefinitionsPage />} />
        <Route path="/code-list" element={<CodeList />} />
        <Route path="/bhs-list" element={<BhfListPage />} />
        <Route path="/item-class-list" element={<ItemsClsPageComponent />} />
        <Route path="/notice-list" element={<NoticeListComponent />} />
        {/* Add more routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
