import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>loading.............</p>;
  }
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"} />;
  }
};

export default PrivateProvider;
