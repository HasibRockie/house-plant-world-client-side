import { Navigate } from "react-router";
import useAuth from "./../Context/useAuth";

function PublicRoute({ children }) {
  const { user } = useAuth();
  return !user?.email ? children : <Navigate to="/" />;
}

export default PublicRoute;
