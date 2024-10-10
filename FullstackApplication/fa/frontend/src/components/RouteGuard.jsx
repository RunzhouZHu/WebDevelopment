import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function RouteGuard({ children, requireAuth }) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <></>;
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
