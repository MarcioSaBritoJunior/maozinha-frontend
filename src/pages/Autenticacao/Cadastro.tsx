import { IconTile } from "@/components/IconTile";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Alert,
  Button,
  Field,
  Fieldset,
  Flex,
  Group,
  Heading,
  HStack,
  Input,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { Logo } from "@/components/Logo";
import { BackButton } from "@/components/BackButton";
import { withMask } from "use-mask-input";
import { MdLockOutline, MdSearch } from "react-icons/md";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { buscarLocalPorCep } from "@/services/cepService";
import { register } from "@/services/authService";

export function Cadastro() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [password, setPassword] = useState("");

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorEmptyField, setErrorEmptyField] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCepBlur = async (cepDigitado: string) => {
    try {
      const endereco = await buscarLocalPorCep(cepDigitado);

      setNeighborhood(endereco.bairro);
      setCity(endereco.cidade);
      setError("");
    } catch (error) {
      setError("Não foi possível buscar o endereço. Verifique o CEP.");
      setNeighborhood("");
      setCity("");
    }
  };

  const handleRegister = async () => {
    setHasSubmitted(true);

    if (
      !email.trim() ||
      !name.trim() ||
      !whatsapp.trim() ||
      !cep.trim() ||
      !city.trim() ||
      !neighborhood.trim() ||
      !password.trim()
    ) {
      setErrorEmptyField("Preencha os campos obrigatórios.");
      return;
    }

    setLoading(true);
    setErrorEmptyField("");

    try {
      const userData = {
        name: name.trim(),
        email: email.trim(),
        password,
        whatsapp: whatsapp.trim(),
        city: city.trim(),
        neighborhood: neighborhood.trim(),
      };

      const isRegistted = await register(userData);
      if (isRegistted) {
        setSuccess("Conta criada com sucesso.");
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1500);
      } else {
        setErrorEmptyField("Confira suas informações.");
      }
    } catch (error) {
      setErrorEmptyField("Ocorreu um erro ao cadastrar.");
    } finally {
      setLoading(false);
    }
  };

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
          <BackButton to="login" />

          {success && (
            <Alert.Root status="success" title="This is the alert title">
              <Alert.Indicator />
              <Alert.Title>{success}</Alert.Title>
            </Alert.Root>
          )}

          {errorEmptyField && (
            <Alert.Root status="error" title="This is the alert title">
              <Alert.Indicator />
              <Alert.Title>{errorEmptyField}</Alert.Title>
            </Alert.Root>
          )}

          <VStack align="flex-start" gap="8px">
            <Heading size="3xl" fontWeight="bolder">
              Crie sua conta
            </Heading>
            <Text fontWeight="lighter" fontSize="16px">
              É grátis. Com uma conta você pode pedir e oferecer ajuda.
            </Text>
          </VStack>

          <Fieldset.Root size="lg" invalid={hasSubmitted && !name.trim()}>
            <Field.Root gap="8px">
              <Field.Label>
                Nome completo
                <Field.RequiredIndicator />
                {"*"}
              </Field.Label>
              <Input
                placeholder="Ex.: João Silva"
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Field.Root>

            <Field.Root gap="8px" invalid={hasSubmitted && !email.trim()}>
              <Field.Label>
                E-mail <Field.RequiredIndicator />
                {"*"}
              </Field.Label>
              <Input
                placeholder="nome@email.com"
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field.Root>

            <Field.Root gap="8px" invalid={hasSubmitted && !whatsapp.trim()}>
              <HStack justify="space-between" w="100%">
                <Field.Label>
                  WhatsApp <Field.RequiredIndicator />
                  {"*"}
                </Field.Label>
              </HStack>
              <Input
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                placeholder="(99) 99999-9999"
                ref={withMask("(99) 99999-9999", { placeholder: "_" })}
                required
                onChange={(e) => setWhatsapp(e.target.value)}
              />
              <HStack align="flex-start" gap="1" width="full">
                <MdLockOutline width="full" />
                <Field.HelperText>
                  Só aparece para quem você escolher (ou quem te escolher) em um
                  serviço.
                </Field.HelperText>
              </HStack>
            </Field.Root>

            {/*ENDEREÇO */}

            <Field.Root gap="8px" invalid={hasSubmitted && !cep.trim()}>
              <HStack justify="space-between" w="100%">
                <Field.Label>
                  Buscar por CEP
                  <Field.RequiredIndicator />
                  {"*"}
                </Field.Label>
              </HStack>
              {error && (
                <Alert.Root status="error" title="This is the alert title">
                  <Alert.Indicator />
                  <Alert.Title>{error}</Alert.Title>
                </Alert.Root>
              )}

              <Group attached w="full" maxW="lg">
                <Input
                  variant="subtle"
                  background="#fff"
                  rounded="14px"
                  height="54px"
                  px="16px"
                  placeholder="99999-999"
                  ref={withMask("99999-999", { placeholder: "_" })}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                />
                <Button
                  bg="bg.subtle"
                  variant="outline"
                  rounded="8px"
                  height="54px"
                  px="16px"
                  onClick={() => handleCepBlur(cep)}
                >
                  Buscar
                </Button>
              </Group>

              <HStack align="flex-start" gap="1" width="full">
                <MdSearch width="full" />
                <Field.HelperText>
                  Busque seu bairro e cidade através do seu CEP.
                </Field.HelperText>
              </HStack>
            </Field.Root>

            <Field.Root gap="8px" invalid={hasSubmitted && !city.trim()}>
              <Field.Label>
                Cidade
                <Field.RequiredIndicator />
                {"*"}
              </Field.Label>
              <Input
                placeholder="Aguardando o CEP ser preenchido"
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                disabled
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </Field.Root>

            <Field.Root
              gap="8px"
              invalid={hasSubmitted && !neighborhood.trim()}
            >
              <Field.Label>
                Bairro
                <Field.RequiredIndicator />
                {"*"}
              </Field.Label>
              <Input
                placeholder="Aguardando o CEP ser preenchido"
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                disabled
                value={neighborhood}
                required
                onChange={(e) => setNeighborhood(e.target.value)}
              />
            </Field.Root>

            {/*SENHA */}
            <Field.Root gap="8px" invalid={hasSubmitted && !password.trim()}>
              <HStack justify="space-between" w="100%">
                <Field.Label>
                  Crie uma senha
                  <Field.RequiredIndicator />
                  {"*"}
                </Field.Label>
              </HStack>
              <PasswordInput
                variant="subtle"
                background="#fff"
                rounded="14px"
                height="54px"
                px="16px"
                placeholder="Pelo menos 6 caracteres"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field.Root>

            <Button
              borderRadius="16px"
              height="56px"
              background="#1F7A50"
              fontWeight="bold"
              disabled={loading}
              loading={loading}
              onClick={handleRegister}
            >
              Cadastrar
            </Button>
            <Separator />
            <HStack fontSize="15px" justify="center">
              <Text fontWeight="lighter">Já tem conta?</Text>
              <RouterLink to="/login">
                <Text color="#1F7A50" fontWeight="medium">
                  Entrar
                </Text>
              </RouterLink>
            </HStack>
          </Fieldset.Root>
        </VStack>
      </Flex>
    </Flex>
  );
}
