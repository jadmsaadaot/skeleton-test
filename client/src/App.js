import "./App.css";
import React, { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const authToken = decrypt(localStorage.getItem("authToken"));

  useEffect(() => {
    UserService.initKeycloak(dispatch);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>App</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
