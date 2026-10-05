import { Box, Heading, Flex, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Header } from "../components/Header";

interface IDefaultLayoutProps {
  titulo: string;
  children: ReactNode;
  subtituloSuperior?: string;
  subtituloInferior?: string;
}

export function DefaultLayout({
  children,
  titulo,
  subtituloSuperior,
  subtituloInferior,
}: IDefaultLayoutProps) {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      gap="4"
      background="#F3F4F1"
    >
      <Header />

      <Container maxW="1200px" mx="auto" px="5" width="100%">
        <Flex gap="2" direction="column" mb="4">
          {subtituloSuperior && (
            <Heading size="sm">{subtituloSuperior}</Heading>
          )}

          <Heading size="4xl" fontWeight="extrabold">
            {titulo}
          </Heading>

          {subtituloInferior && (
            <Heading size="sm">{subtituloInferior}</Heading>
          )}
        </Flex>

        <Box>{children}</Box>
      </Container>
    </Box>
  );
}
