import { BrowserRouter as Route, Routes } from "react-router-dom";
import Login from "../Login";
import { useSelector } from "react-redux";

const BaseRouting = () => {
  const authorized = useSelector((state) => state.auth.authorized);

  if (!authorized) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<h1>App</h1>} />
    </Routes>
  );
};

export default BaseRouting;
