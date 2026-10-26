import { MyProfileInfo } from "@/components/MyProfileInfo";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Flex, VStack } from "@chakra-ui/react";
import { Skills } from "@/components/Skills";
import { Reputation } from "@/components/Reputation";
import { ReviewsReceived } from "@/components/ReviewsReceived";

export function MeuPerfil() {
  return (
    <DefaultLayout>
      <Flex
        gap={8}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "space-between", md: "space-between" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <MyProfileInfo />
        <VStack w={{ base: "full", md: "70%" }} pb={20}>
          <Skills title="Habilidades" />
          <Reputation title="Reputação" />
          <ReviewsReceived title="Avaliações recebidas" />
        </VStack>
      </Flex>
    </DefaultLayout>
  );
}
