import { Typography } from "@mui/material";
import { DefaultLayout } from "../../layouts/DefaultLayout";

export function Inicio() {
  return (
    <DefaultLayout titulo="Olá, Usuário! Do que você precisa hoje?">
      <Typography variant="h5">Inicio</Typography>
    </DefaultLayout>
  );
}
