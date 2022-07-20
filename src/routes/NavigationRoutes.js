import { Routes, Route } from "react-router-dom";
import { Login, Home } from "../pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export { NavigationRoutes };
