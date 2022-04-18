import React, { useEffect } from "react";
import UserService from "../../services/UserServices";

const Login = () => {
  return (
    <button
      className="btn btn-lg btn-warning"
      onClick={() => UserService.doLogin()}
    >
      Login
    </button>
  );
};

export default Login;
