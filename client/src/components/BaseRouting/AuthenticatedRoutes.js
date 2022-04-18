import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>App</h1>} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
