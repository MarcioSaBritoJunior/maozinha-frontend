import { DefaultLayout } from "../../layouts/DefaultLayout";

const local: string = "Cohama, São Luís - MA";
const nomeUsuario: string = "Rianderson";
const saudacao: string = "Olá, " + nomeUsuario + "! Do que você precisa hoje?";

export function Inicio() {
  return (
    <DefaultLayout titulo={saudacao} subtituloSuperior={local}>
      <></>
    </DefaultLayout>
  );
}
