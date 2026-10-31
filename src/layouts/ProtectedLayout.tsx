import { RequireAuth } from "@/contexts/Auth/RequireAuth";
import { Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};
