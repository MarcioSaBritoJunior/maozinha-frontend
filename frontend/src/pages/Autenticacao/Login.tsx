import { IconTile } from "@/components/IconTile";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdFrontHand, MdNumbers } from "react-icons/md";

function Logo() {
  return (
    <HStack gap="10px">
      <IconTile
        icone={MdFrontHand}
        backgroundColor="#1F7A50"
        iconColor="#fff"
        size="40px"
        borderRadius="12px"
      />
      <Heading fontWeight="bold" size="xl">
        mãozinha
      </Heading>
    </HStack>
  );
}

export function Login() {
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
            <IconTile icone={MdNumbers} backgroundColor="#E1EFE6" />
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
            <IconTile icone={MdNumbers} backgroundColor="#E3ECFB" />
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
            <IconTile icone={MdNumbers} backgroundColor="#F6EFD2" />
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

          <VStack align="flex-start" gap="8px">
            <Heading size="3xl" fontWeight="bolder">
              Que bom te ver de novo
            </Heading>
            <Text fontWeight="lighter" fontSize="16px">
              Entre para pedir ou oferecer uma mãozinha.
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

            <Field.Root gap="8px">
              <HStack justify="space-between" w="100%">
                <Field.Label>Senha</Field.Label>
                <Link color="#1F7A50" fontSize="14px">
                  Esqueci minha senha
                </Link>
              </HStack>
              <PasswordInput
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                placeholder="******"
              />
            </Field.Root>

            <Button
              borderRadius="16px"
              height="56px"
              background="#1F7A50"
              fontWeight="bold"
            >
              Entrar
            </Button>
            <Separator />
            <HStack fontSize="15px" justify="center">
              <Text fontWeight="lighter">Ainda não tem conta?</Text>
              <Link color="#1F7A50" fontWeight="medium">
                Criar conta grátis
              </Link>
            </HStack>
          </Fieldset.Root>
        </VStack>
      </Flex>
    </Flex>
  );
}
