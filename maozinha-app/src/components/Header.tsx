import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@mui/material";
import logo from "../assets/Maozinha-favicon.png";
export function Header() {
  return (
    <Box
      sx={{
        height: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/*Logo */}
      <Box sx={{ display: "flex", gap: 1.25, alignItems: "center" }}>
        <img src={logo} height={36} />
        <Typography variant="h5" component="h5">
          mãozinha
        </Typography>
      </Box>

      {/*Abas */}
      <Box
        sx={{
          width: 384,
          height: 48,
          borderRadius: 14,
          backgroundColor: "#E9ECE6",
          display: "flex",
          gap: 1.25,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <BottomNavigation
          showLabels
          sx={{ height: "70%", backgroundColor: "#E9ECE6" }}
        >
          <BottomNavigationAction label="Início" />
          <BottomNavigationAction label="Explorar" />
          <BottomNavigationAction label="Meus serviços" />
          <BottomNavigationAction label="Perfil" />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
