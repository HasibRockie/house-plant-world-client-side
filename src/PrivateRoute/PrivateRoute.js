import { Navigate } from "react-router";
import useAuth from "./../Context/useAuth";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user?.email ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
