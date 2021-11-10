import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import useAuth from "./../Context/useAuth";

function PublicRoute({ children }) {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return(<Spinner animation="grow" />)
    }
  return !user?.email ? children : <Navigate to="/" />;
}

export default PublicRoute;
