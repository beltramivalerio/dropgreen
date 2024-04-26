import { isEmpty } from "lodash";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = sessionStorage.getItem("token");
  if (isEmpty(token)) {
    return <Navigate to={{ pathname: "/user/login" }} />;
  }
  return <Outlet />;
};

export default Auth;
