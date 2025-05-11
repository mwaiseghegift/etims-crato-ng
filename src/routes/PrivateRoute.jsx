import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // const user = localStorage.getItem("userToken");
  const user = true;

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return children;
};

export default PrivateRoute;
