import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Button, Flex, Heading, HStack, Icon, SimpleGrid, Text, VStack, Spinner } from "@chakra-ui/react";
import { MdCalendarToday, MdLocationOn, MdPerson, MdArrowBack, MdOutlineCategory } from "react-icons/md";
import { DefaultLayout } from "../../layouts/DefaultLayout";

import { serviceService, type IServicoDetalhes } from "../../services/serviceService";

export function DetalhesServico() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [servico, setServico] = useState<IServicoDetalhes | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [mensagemErro, setMensagemErro] = useState("");

  useEffect(() => {
    async function carregarDetalhes() {
      try {
        setCarregando(true);
        setMensagemErro("");

        if(!id) {
          setMensagemErro("ID do serviço não fornecido.");
          return;
        }

        const dados = await serviceService.getServicoPorId(Number(id));
        setServico(dados);
      } catch (error: any) {
        setMensagemErro("Erro ao carregar detalhes do serviço.");
        setMensagemErro(error.response?.data?.detail || error.response?.data?.message || "Não foi possível carregar os detalhes do serviço.");
      } finally {
        setCarregando(false);
      }
    }

    carregarDetalhes();
  }, [id]);

  const formatarData = (data: string) => {
    return new Date(`${data}T00:00:00`).toLocaleDateString("pt-BR");
  };

  const formatarValor = (valor: number) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const statusFormatado: Record<string, string> = {
    ABERTO: "Aberto",
    SELECIONADO: "Profissional selecionado",
    EM_ANDAMENTO: "Em andamento",
    CONCLUIDO: "Concluído",
    CANCELADO: "Cancelado",
  };

  const coresStatus: Record<string, { bg: string; color: string }> = {
    ABERTO: { bg: "#DDF1E4", color: "#197B50" },
    SELECIONADO: { bg: "#E3ECFB", color: "#315B9A" },
    EM_ANDAMENTO: { bg: "#FBEBD9", color: "#98601C" },
    CONCLUIDO: { bg: "#DDF1E4", color: "#197B50" },
    CANCELADO: { bg: "#FCE4E4", color: "#B42318" },
  };

  return (
    <DefaultLayout titulo="Detalhes do Serviço">
      <Box width="100%" maxW="1000px" mx="auto" pt={6} pb={{ base: 12, md: 6 }} px={{ base: 1, md: 0 }}>
        {carregando ? (
          <VStack py={16} gap={4}>
            <Spinner size="xl" color="#197B50" />
            <Text color="gray.600">
              Carregando detalhes do serviço...
            </Text>
          </VStack>
        ) : mensagemErro ? (
          <VStack
            p={8}
            gap={4}
            bg="white"
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.200"
            textAlign="center"
          >
            <Heading size="lg" color="#202722">
              Não foi possível abrir o serviço
            </Heading>

            <Text color="gray.600">{mensagemErro}</Text>

            <Button
              bg="#197B50"
              color="white"
              onClick={() => navigate(-1)}
              _hover={{ bg: "#185B3E" }}
            >
              Voltar
            </Button>
          </VStack>
        ) : servico ? (
          <VStack align="stretch" gap={5}>
            <Button
              variant="ghost"
              alignSelf="flex-start"
              color="#197B50"
              onClick={() => navigate(-1)}
              _hover={{ bg: "#EAF4ED" }}
            >
              <Icon as={MdArrowBack} />
              Voltar
            </Button>

            {/* Cabeçalho do serviço */}
            <Box
              bg="white"
              p={{ base: 5, md: 8 }}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="sm"
            >
              <Flex
                justify="space-between"
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                gap={3}
                mb={5}
              >
                <HStack
                  bg="#EAF4ED"
                  color="#197B50"
                  px={3}
                  py={2}
                  borderRadius="full"
                  gap={2}
                >
                  <Icon as={MdOutlineCategory} />
                  <Text fontSize="sm" fontWeight="semibold">
                    {servico.categoryName}
                  </Text>
                </HStack>

                <Box
                  px={4}
                  py={2}
                  borderRadius="full"
                  bg={coresStatus[servico.status]?.bg || "gray.100"}
                  color={coresStatus[servico.status]?.color || "gray.600"}
                >
                  <Text fontSize="sm" fontWeight="semibold">
                    {statusFormatado[servico.status] || servico.status}
                  </Text>
                </Box>
              </Flex>

              <Heading
                size={{ base: "xl", md: "2xl" }}
                color="#202722"
                mb={4}
              >
                {servico.title}
              </Heading>

              <Text
                color="gray.600"
                fontSize="md"
                lineHeight="1.8"
                whiteSpace="pre-wrap"
              >
                {servico.description}
              </Text>
            </Box>

            {/* Valor e informações */}
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              <Box
                bg="#EAF4ED"
                p={6}
                borderRadius="2xl"
                border="1px solid"
                borderColor="#D1E8D8"
              >
                <Text
                  color="#58665D"
                  fontSize="sm"
                  fontWeight="medium"
                  mb={2}
                >
                  Valor oferecido
                </Text>

                <Heading size="2xl" color="#185B3E">
                  {formatarValor(servico.value)}
                </Heading>
              </Box>

              <Box
                bg="white"
                p={6}
                borderRadius="2xl"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="sm"
              >
                <Heading size="md" color="#202722" mb={4}>
                  Localização e data
                </Heading>

                <VStack align="stretch" gap={4}>
                  <HStack align="flex-start" gap={3}>
                    <Icon
                      as={MdLocationOn}
                      color="#197B50"
                      boxSize={5}
                    />
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        Localização
                      </Text>
                      <Text fontWeight="medium" color="#303B34">
                        {servico.neighborhood}, {servico.city}
                      </Text>
                    </Box>
                  </HStack>

                  <HStack align="flex-start" gap={3}>
                    <Icon
                      as={MdCalendarToday}
                      color="#197B50"
                      boxSize={5}
                    />
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        Data do serviço
                      </Text>
                      <Text fontWeight="medium" color="#303B34">
                        {formatarData(servico.serviceDate)}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
            </SimpleGrid>

            {/* Solicitante */}
            <Box
              bg="white"
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="sm"
            >
              <Heading size="md" color="#202722" mb={5}>
                Sobre o solicitante
              </Heading>

              <HStack gap={4}>
                <Flex
                  w="52px"
                  h="52px"
                  borderRadius="full"
                  bg="#DDEEE3"
                  align="center"
                  justify="center"
                >
                  <Icon as={MdPerson} color="#197B50" boxSize={7} />
                </Flex>

                <Box>
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    color="#202722"
                  >
                    {servico.requesterName}
                  </Text>

                  <Text color="gray.500" fontSize="sm">
                    Solicitante do serviço
                  </Text>
                </Box>
              </HStack>
            </Box>
          </VStack>
        ) : null}
      </Box>
    </DefaultLayout>
  );

  //<DefaultLayout titulo="Detalhes do Servicos">
    // <></>
  //</DefaultLayout>
}
