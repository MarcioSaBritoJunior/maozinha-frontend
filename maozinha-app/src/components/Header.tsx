import { Box, Heading, HStack, Image, Container } from "@chakra-ui/react";
import logo from "../assets/Maozinha-favicon.png";
import { Tabs, Button, Avatar } from "@chakra-ui/react";

export function Header() {
  return (
    <Box p="5" backgroundColor="#f3f4f19e">
      <Container maxW="1200px" mx="auto" display="flex" justifyContent="space-between" alignItems="center">
        <HStack gap="6">
          {/* Logo */}
          <HStack>
            <Image src={logo} height="36px" alt="Mãozinha" />
            <Heading fontWeight="bold" size="2xl">
              mãozinha
            </Heading>
          </HStack>

          {/* Abas */}
          <Tabs.Root defaultValue="inicio" variant="plain">
            <Tabs.List bg="#E9ECE6" rounded="14px" p="2">
              <Tabs.Trigger value="inicio">Início</Tabs.Trigger>
              <Tabs.Trigger value="explorar">Explorar</Tabs.Trigger>
              <Tabs.Trigger value="meus-servicos">Meus serviços</Tabs.Trigger>
              <Tabs.Trigger value="perfil">Perfil</Tabs.Trigger>
              <Tabs.Indicator rounded="11px" />
            </Tabs.List>
          </Tabs.Root>
        </HStack>

        {/* Botão publicar + Perfil */}
        <HStack gap="5">
          <Button rounded="13px" background="#1F7A50" fontSize="15px" fontWeight="bold">
            + Publicar serviço
          </Button>
          <Avatar.Root shape="rounded" size="md" outlineColor="#fff" outlineStyle="solid">
            <Avatar.Fallback name="Rianderson Correa" />
            <Avatar.Image src="" />
          </Avatar.Root>
        </HStack>
      </Container>
    </Box>
  );
}