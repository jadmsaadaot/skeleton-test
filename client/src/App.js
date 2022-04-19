import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import BaseRouting from "./components/BaseRouting";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [appLoading, setAppLoading] = useState(true);
  const dispatch = useDispatch();
  // const authToken = decrypt(localStorage.getItem("authToken"));

  useEffect(() => {
    // UserService.initKeycloak(dispatch);
    setAppLoading(false);
  }, [dispatch]);

  if (appLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <BaseRouting />
      </Router>
    </>
  );
};

export default App;
