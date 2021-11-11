import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import useAuth from "./../Context/useAuth";

function AdminRoute({ children }) {
  const { isAdmin, isLoading } = useAuth();
  if(isLoading){
      return(<Spinner animation="grow" />)
  }
  return isAdmin ? children : <Navigate to="/login" />;
}

export default AdminRoute;
