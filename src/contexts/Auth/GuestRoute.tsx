import { useContext, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { Loading } from "@/components/Loading";

export const GuestRoute = ({ children }: { children: ReactNode }) => {
  const auth = useContext(AuthContext);

  if (auth.loading) {
    return <Loading />;
  }
  if (auth.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
