import { Flex, Text, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { ButtonBox } from "@/components/ButtonBox";
import { MdFrontHand, MdArrowForward, MdAdd } from "react-icons/md";
import { SectionHeader } from "@/components/SectionHeader";
import { categoryService } from "@/services/categoryService";
import { IconTile } from "@/components/IconTile";

const local: string = "Cohama, São Luís - MA";
const nomeUsuario: string = "Rianderson";
const saudacao: string = "Olá, " + nomeUsuario + "! Do que você precisa hoje?";

export function Inicio() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const response = await categoryService.getCategories();
      setCategories(response);
    };

    loadCategories();
  }, []);

  return (
    <DefaultLayout titulo={saudacao} subtituloSuperior={local}>
      <Flex gap={8} justifyContent="space-between" direction="column">
        <Flex
          gap="4"
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          <ButtonBox
            iconLeft={MdAdd}
            iconRight={MdArrowForward}
            iconColorFillLeft="#1F7A50"
            iconColorFillRight="#ffffff"
            backgrundColor="#DDEEE3"
            titulo="Preciso de uma mãozinha"
            subtitulo="Publique um serviço com valor, data e bairro. Quem puder ajudar demonstra interesse."
          />
          <ButtonBox
            iconLeft={MdFrontHand}
            iconRight={MdArrowForward}
            iconColorFillLeft="#6E5A12"
            iconColorFillRight="#ffffff"
            backgrundColor="#F5ECD2"
            titulo="Quero dar uma mãozinha"
            subtitulo="Veja serviços perto de você e demonstre interesse no valor anunciado."
          />
        </Flex>
        <Flex>
          <SectionHeader
            titulo="Para acompanhar"
            itemsCount={4}
            itemsLabel="coisas"
          />
        </Flex>
        <Flex>
          <SectionHeader titulo="Categorias" />
        </Flex>

        <Flex flexDir="column" gap={10}>
          <SectionHeader titulo="Perto de você" linkIsOn={true} />
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            maxW="100%"
          >
            {/** scroll view na horizontal */}
            <HStack justifyContent="space-between">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Flex flexDir="column" align="center">
                    <IconTile
                      key={category.id ?? category.name}
                      icone={IconComponent}
                    />
                    <Text fontSize="md" textAlign="center">
                      {category.name}
                    </Text>
                  </Flex>
                );
              })}
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
