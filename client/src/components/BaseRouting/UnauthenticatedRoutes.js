import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "../Login";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
