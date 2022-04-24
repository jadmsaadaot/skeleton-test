import React from "react";
import { Route, Routes } from "react-router-dom";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>App</h1>} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
