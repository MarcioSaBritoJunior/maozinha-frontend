import { Box, Heading, HStack, Image, Container } from "@chakra-ui/react";
import logo from "../assets/Maozinha-favicon.png";
import { Tabs, Button, Avatar } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = (pathname: string) => {
    if (
      pathname.startsWith("/meu-perfil") ||
      pathname.startsWith("/perfil") ||
      pathname.startsWith("/editar-perfil") ||
      pathname.startsWith("/avaliar-usuario") ||
      pathname.startsWith("/avaliacao-realizada") ||
      pathname.startsWith("/reputacao")
    )
      return "meu-perfil";

    if (
      pathname.startsWith("/explorar") ||
      pathname.startsWith("/detalhe-servico") ||
      pathname.startsWith("/servico-selecionado") ||
      pathname.startsWith("/servico-em-andamento") ||
      pathname.startsWith("/servico-concluido-perfil")
    )
      return "explorar";

    if (
      pathname.startsWith("/meus-servicos") ||
      pathname.startsWith("/criar") ||
      pathname.startsWith("/editar-servico") ||
      pathname.startsWith("/gerenciar-servico-publicado") ||
      pathname.startsWith("/lista-interessados") ||
      pathname.startsWith("/selecao-interessados") ||
      pathname.startsWith("/servico-cancelado")
    )
      return "meus-servicos";

    return "inicio";
  };

  const currentTab = getActiveTab(location.pathname);

  return (
    <Box p="5" backgroundColor="#f3f4f19e">
      <Container
        maxW="1200px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack gap="6">
          {/* Logo */}
          <HStack>
            <Image src={logo} height="36px" alt="Mãozinha" />
            <Heading fontWeight="bold" size="2xl">
              mãozinha
            </Heading>
          </HStack>

          {/* Abas */}
          <Tabs.Root
            value={currentTab}
            variant="plain"
            onValueChange={(details) => {
              if (details.value === "inicio") navigate("/");
              else if (details.value === "meus-servicos")
                navigate("/meus-servicos");
              else if (details.value === "explorar") navigate("/explorar");
              else if (details.value === "meu-perfil") navigate("/meu-perfil");
            }}
          >
            <Tabs.List bg="#E9ECE6" rounded="14px" p="2">
              <Tabs.Trigger value="inicio">Início</Tabs.Trigger>
              <Tabs.Trigger value="explorar">Explorar</Tabs.Trigger>
              <Tabs.Trigger value="meus-servicos">Meus serviços</Tabs.Trigger>
              <Tabs.Trigger value="meu-perfil">Perfil</Tabs.Trigger>
              <Tabs.Indicator rounded="11px" />
            </Tabs.List>
          </Tabs.Root>
        </HStack>

        {/* Botão publicar + Perfil */}
        <HStack gap="5">
          <Button
            rounded="13px"
            background="#1F7A50"
            fontSize="15px"
            fontWeight="bold"
          >
            + Publicar serviço
          </Button>
          <Avatar.Root
            shape="rounded"
            size="md"
            outlineColor="#fff"
            outlineStyle="solid"
          >
            <Avatar.Fallback name="Rianderson Correa" />
            <Avatar.Image src="" />
          </Avatar.Root>
        </HStack>
      </Container>
    </Box>
  );
}
