import { useSelector } from "react-redux";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import UnauthenticatedRoutes from "./UnauthenticatedRoutes";

const BaseRouting = () => {
  const authorized = useSelector((state) => state.auth.authorized);

  if (!authorized) {
    return <UnauthenticatedRoutes />;
  }
  return <AuthenticatedRoutes />;
};

export default BaseRouting;
