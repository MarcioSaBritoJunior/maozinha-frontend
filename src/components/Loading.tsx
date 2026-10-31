import { Spinner, Text, VStack } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <VStack
      colorPalette="#1F7A50"
      width="100%"
      height="100vh"
      align="center"
      justify="center"
    >
      <Spinner color="#1F7A50" />
      <Text color="#1F7A50">Carregando...</Text>
    </VStack>
  );
};
