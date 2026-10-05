import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { Header } from "../components/Header";

interface IDefaultLayoutProps {
  titulo: string;
  children: ReactNode;
}

export function DefaultLayout({ children, titulo }: IDefaultLayoutProps) {
  return (
    <Box sx={{ height: 100, display: "flex", flexDirection: "column", gap: 1 }}>
      <Box>
        <Header />
      </Box>
      <Box sx={{ padding: 1 }}>{titulo}</Box>
      <Box sx={{ padding: 1 }}>{children}</Box>
    </Box>
  );
}
