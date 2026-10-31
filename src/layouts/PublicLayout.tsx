import { GuestRoute } from "@/contexts/Auth/GuestRoute";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <GuestRoute>
      <Outlet />
    </GuestRoute>
  );
};
