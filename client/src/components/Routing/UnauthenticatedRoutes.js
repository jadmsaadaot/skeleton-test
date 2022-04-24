import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
