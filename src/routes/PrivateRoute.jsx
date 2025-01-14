import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import LoadingSpinner from "../shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace="true" />;
};

export default PrivateRoute;
