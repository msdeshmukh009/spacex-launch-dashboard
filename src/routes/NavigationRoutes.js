import { Routes, Route } from "react-router-dom";
import { Login, Home } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export { NavigationRoutes };
