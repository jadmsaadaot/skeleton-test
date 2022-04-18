import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authorize } from "./loginSlice";

const Login = () => {
  const authorized = useSelector((state) => state.auth.authorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authorized) {
      dispatch(authorize());
    }
  }, []);
  return <div>login</div>;
};

export default Login;
