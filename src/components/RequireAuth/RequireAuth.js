import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" replace />;
  }
};
export default RequireAuth;
