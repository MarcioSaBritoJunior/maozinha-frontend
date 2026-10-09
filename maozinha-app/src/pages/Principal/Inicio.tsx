import { HStack } from "@chakra-ui/react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { ButtonBox } from "@/components/ButtonBox";

const local: string = "Cohama, São Luís - MA";
const nomeUsuario: string = "Rianderson";
const saudacao: string = "Olá, " + nomeUsuario + "! Do que você precisa hoje?";

export function Inicio() {
  return (
    <DefaultLayout titulo={saudacao} subtituloSuperior={local}>
      <>
        <HStack gap="4" justifyContent="space-between">
          <ButtonBox
            iconColorFillLeft="#1F7A50"
            iconColorFillRight="#ffffff"
            backgrundColor="#DDEEE3"
            titulo="Preciso de uma mãozinha"
            subtitulo="Publique um serviço com valor, data e bairro. Quem puder ajudar demonstra interesse."
          />
          <ButtonBox
            iconColorFillLeft="#ffffff"
            iconColorFillRight="#ffffff"
            backgrundColor="#F5ECD2"
            titulo="Quero dar uma mãozinha"
            subtitulo="Veja serviços perto de você e demonstre interesse no valor anunciado."
          />
        </HStack>
      </>
    </DefaultLayout>
  );
}
