import { use, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p>loading.............</p>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to={"/auth/login"} />;
  }
};

export default PrivateProvider;
