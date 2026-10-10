import { Flex } from "@chakra-ui/react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { ButtonBox } from "@/components/ButtonBox";
import { MdFrontHand, MdArrowForward, MdAdd } from "react-icons/md";

const local: string = "Cohama, São Luís - MA";
const nomeUsuario: string = "Rianderson";
const saudacao: string = "Olá, " + nomeUsuario + "! Do que você precisa hoje?";

export function Inicio() {
  return (
    <DefaultLayout titulo={saudacao} subtituloSuperior={local}>
      <>
        <Flex
          gap="4"
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          <ButtonBox
            iconLeft={MdAdd}
            iconRight={MdArrowForward}
            iconSize="28"
            iconColorFillLeft="#1F7A50"
            iconColorFillRight="#ffffff"
            backgrundColor="#DDEEE3"
            titulo="Preciso de uma mãozinha"
            subtitulo="Publique um serviço com valor, data e bairro. Quem puder ajudar demonstra interesse."
          />
          <ButtonBox
            iconLeft={MdFrontHand}
            iconRight={MdArrowForward}
            iconSize="28"
            iconColorFillLeft="#6E5A12"
            iconColorFillRight="#ffffff"
            backgrundColor="#F5ECD2"
            titulo="Quero dar uma mãozinha"
            subtitulo="Veja serviços perto de você e demonstre interesse no valor anunciado."
          />
        </Flex>
      </>
    </DefaultLayout>
  );
}
