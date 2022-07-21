import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <main className="bg-zinc-900 text-slate-50 min-h-screen flex justify-center flex-col items-center">
        <h2 className="text-2xl">Loading...</h2>
      </main>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export { PrivateRoute };
