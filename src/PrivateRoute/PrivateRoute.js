import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import useAuth from "./../Context/useAuth";

function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth();

  if(isLoading){
      return(<Spinner animation="grow" />)
  }
  return user?.email ? children : <Navigate to="/login"  />;
}

export default PrivateRoute;
