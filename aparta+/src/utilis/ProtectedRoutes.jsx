import { Outlet, Navigate } from "react-router-dom";

const handleUserAuthenticated = () => {
    return localStorage.getItem("token");
}

const ProtectedRoutes = () => {
  const user = handleUserAuthenticated();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
