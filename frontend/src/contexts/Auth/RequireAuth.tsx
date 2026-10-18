import { useContext, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Loading } from "@/components/Loading";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (auth.loading) {
    return <Loading/>;
  }
  if (!auth?.user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};
