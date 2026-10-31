import { IconTile } from "@/components/IconTile";
import {
  Button,
  Field,
  Fieldset,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { BackButton } from "@/components/BackButton";
import { Logo } from "@/components/Logo";

export function RecuperarAcesso() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      background="#F3F4F1"
      minH="100vh"
      w="100%"
      p={{ base: 0, md: "16px" }}
      gap={{ base: 0, md: "16px" }}
    >
      {/* Painel esquerdo — só em md+ */}
      <VStack
        hideBelow="md"
        flex="0 0 42%"
        background="#E1EFE6"
        rounded="32px"
        p="48px"
        align="flex-start"
        justify="space-between"
        position="sticky"
        top="16px"
        h="calc(100vh - 32px)"
      >
        <VStack align="flex-start" gap="14px">
          <Logo />
        </VStack>

        {/* Conteúdo do meio/rodapé do painel — ajuste ao seu design */}
        <VStack align="flex-start" gap="12px">
          <Heading size="6xl" fontWeight="bolder" lineHeight="1.1">
            Todo mundo precisa de uma.
          </Heading>
          <Text fontWeight="lighter" color="fg.muted">
            Publique pequenos serviços do dia a dia ou dê uma mãozinha para
            alguém do seu bairro. Simples, direto e perto de você.
          </Text>
        </VStack>

        <VStack minW="100%">
          <HStack
            background="#fff"
            minW="100%"
            gap="14px"
            p="14px 16px"
            borderRadius="18px"
            shadow="rgba(20, 48, 31, 0.06) 0px 6px 20px"
          >
            <IconTile
              icone={RiNumber1}
              backgroundColor="#E1EFE6"
              iconColor="#1C6B43"
            />
            <Text fontWeight="medium">
              Publique o que precisa, com valor e data
            </Text>
          </HStack>
          <HStack
            background="#fff"
            minW="100%"
            gap="14px"
            p="14px 16px"
            borderRadius="18px"
            shadow="rgba(20, 48, 31, 0.06) 0px 6px 20px"
          >
            <IconTile
              icone={RiNumber2}
              backgroundColor="#E3ECFB"
              iconColor="#2B4E8C"
            />
            <Text fontWeight="medium">
              Escolha entre quem demonstrou interesse
            </Text>
          </HStack>
          <HStack
            background="#fff"
            minW="100%"
            gap="14px"
            p="14px 16px"
            borderRadius="18px"
            shadow="rgba(20, 48, 31, 0.06) 0px 6px 20px"
          >
            <IconTile
              icone={RiNumber3}
              backgroundColor="#F6EFD2"
              iconColor="#6C5812"
            />
            <Text fontWeight="medium">
              Combine pelo WhatsApp e avaliem um ao outro
            </Text>
          </HStack>
        </VStack>
      </VStack>

      {/* Formulário */}
      <Flex
        flex="1"
        direction="column"
        align="center"
        justify="center"
        p={{ base: "40px 20px", md: "48px" }}
      >
        <VStack w="100%" maxW="md" align="stretch" gap="28px">
          {/* Logo só no mobile */}
          <VStack hideFrom="md" align="flex-start" gap="14px">
            <Logo />
            <Text fontSize="15px" fontWeight="lighter">
              Todo mundo precisa de uma.
            </Text>
          </VStack>

          {/*Botão de voltar */}
          <BackButton to="login" />

          <VStack align="flex-start" gap="8px">
            <Heading size="3xl" fontWeight="bolder">
              Recuperar acesso
            </Heading>
            <Text fontWeight="lighter" fontSize="16px">
              Informe o e-mail da sua conta. Vamos enviar um link para você
              criar uma senha nova.
            </Text>
          </VStack>

          <Fieldset.Root size="lg">
            <Field.Root gap="8px">
              <Field.Label>E-mail</Field.Label>
              <Input
                placeholder="me@example.com"
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
              />
            </Field.Root>

            <Button
              borderRadius="16px"
              height="56px"
              background="#1F7A50"
              fontWeight="bold"
            >
              Enviar link
            </Button>
          </Fieldset.Root>
        </VStack>
      </Flex>
    </Flex>
  );
}
