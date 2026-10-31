import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Box, Button, Flex, Heading, Input, Text, Textarea, VStack, NativeSelect, Spinner } from "@chakra-ui/react";
import { DefaultLayout } from "../../layouts/DefaultLayout";

import { serviceService, type IAtualizarServico, type IServicoDetalhes } from "../../services/serviceService";
import { categoryService, type IServiceCategory } from "../../services/categoryService";

export function EditarServico() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<IServiceCategory[]>([]);
  const [servico, setServico] = useState<IServicoDetalhes | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [valor, setValor] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [dataServico, setDataServico] = useState("");

  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  
  useEffect(() => {
    const carregarCategorias = async () => {
      try { 
        setCarregando(true);
        setMensagemErro("");

        if(!id || Number(id) <= 0) {
          setMensagemErro("ID de serviço é inválido. Tente novamente.");
          return;
        }

        const [dadosServico, dadosCategorias] = await Promise.all([
          serviceService.getServicoPorId(Number(id)),
          categoryService.getCategories()
        ]);

        setServico(dadosServico);
        setCategorias(dadosCategorias);

        setTitulo(dadosServico.title);
        setDescricao(dadosServico.description);
        setCategoriaId(String(dadosServico.categoryId));
        setValor(String(dadosServico.value));
        setCidade(dadosServico.city);
        setBairro(dadosServico.neighborhood);
        setDataServico(dadosServico.serviceDate);

      } catch (error: any) {
        console.error("Erro ao carregar dados do serviço:", error);
        setMensagemErro( error.response?.data?.detail || error.response?.data?.message || "Não foi possível carregar os dados do serviço. Tente novamente.");
      } finally {
        setCarregando(false);
      }
    };

    carregarCategorias();
  }, [id]);

  const hoje = new Date();
  const dataValida = [
    hoje.getFullYear(),
    String(hoje.getMonth() + 1).padStart(2, "0"),
    String(hoje.getDate()).padStart(2, "0"),
  ].join("-");

  const handleAtualizarServico = async () => {
    setMensagemSucesso("");
    setMensagemErro("");

    if(!titulo.trim()|| !descricao.trim() || !categoriaId || !valor || !cidade.trim() || !bairro.trim() || !dataServico.trim() ) {
        setMensagemErro("Todos os campos são obrigatórios. Preencha-os corretamente.");
        return;
    }

    if (Number(valor) <= 0 || !Number.isFinite(Number(valor))) {
        setMensagemErro("Informe um número válido para precificar o serviço.");
        return;
    }

    if (dataServico < dataValida) {
        setMensagemErro("A data do serviço não pode ser anterior à data atual.");
        return;
    }

    if (!servico || !id) {
        setMensagemErro("Não foi possível identificar o serviço.");
        return;
    }

    const dadosAtualizados: IAtualizarServico = {
        title: titulo.trim(),
        description: descricao.trim(),
        categoryId: Number(categoriaId),
        value: Number(valor),
        city: cidade.trim(),
        neighborhood: bairro.trim(),
        serviceDate: dataServico,
        status: servico.status
    };

    try {
      setEnviando(true);
      await serviceService.updateServico(Number(id), dadosAtualizados);

      setMensagemSucesso("Serviço atualizado com sucesso!");
      setTimeout (() => {
        navigate(`/detalhe-servico/${id}`);
      }, 1800);
    } catch (error: any) {
      console.error("Erro ao atualizar serviço:", error);
      setMensagemErro(error.response?.data?.detail || error.response?.data?.message || "Não foi possível atualizar o serviço. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <DefaultLayout titulo="Edite as informações do seu serviço.">
      <Box maxW="750px" mx="auto" w="100%">
        {carregando ? (
          <Flex justify="center" align="center" py={12} direction="column" gap={3}>
            <Spinner size="xl" color="#197B50" />
            <Text color="#58665D">Carregando serviço...</Text>
          </Flex>
        ) : mensagemErro && !servico ? (
          <VStack align="stretch" gap={4}>
            <Box bg="red.50" borderRadius="lg" p={4}>
              <Text color="red.700">{mensagemErro}</Text>
            </Box>

            <Button
              variant="outline"
              borderRadius="lg"
              onClick={() => navigate(-1)}
            >
              Voltar
            </Button>
          </VStack>
        ) : (
          <VStack align="stretch" gap={6}>
            <Box>
              <Heading size="lg" color="#202722">
                Editar serviço
              </Heading>

              <Text color="#58665D" mt={2}>
                Atualize as informações do serviço publicado.
              </Text>
            </Box>

            <VStack align="stretch" gap={4}>
              <Box>
                <Text fontWeight="medium" mb={2} color="#303B34">
                  Título do serviço
                </Text>

                <Input
                  placeholder="Ex.: Montagem de guarda-roupa"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  borderRadius="lg"
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="#303B34">
                  Descrição
                </Text>

                <Textarea
                  placeholder="Descreva o serviço que você precisa..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  minH="120px"
                  borderRadius="lg"
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="#303B34">
                  Categoria
                </Text>

                <NativeSelect.Root disabled={categorias.length === 0}>
                  <NativeSelect.Field
                    value={categoriaId}
                    onChange={(e) => setCategoriaId(e.target.value)}
                    borderRadius="lg"
                  >
                    <option value="">Selecione uma categoria</option>

                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.name}
                      </option>
                    ))}
                  </NativeSelect.Field>

                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Box>

              <Flex gap={4} direction={{ base: "column", md: "row" }}>
                <Box flex="1">
                  <Text fontWeight="medium" mb={2} color="#303B34">
                    Valor (R$)
                  </Text>

                  <Input
                    type="number"
                    placeholder="120,00"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    min={0.01}
                    step="0.01"
                    borderRadius="lg"
                  />
                </Box>

                <Box flex="1">
                  <Text fontWeight="medium" mb={2} color="#303B34">
                    Data do serviço
                  </Text>

                  <Input
                    type="date"
                    value={dataServico}
                    onChange={(e) => setDataServico(e.target.value)}
                    min={dataValida}
                    borderRadius="lg"
                  />
                </Box>
              </Flex>

              <Box>
                <Text fontWeight="medium" mb={2} color="#303B34">
                  Cidade
                </Text>

                <Input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Sua cidade"
                  borderRadius="lg"
                />
              </Box>

              <Box>
                <Text fontWeight="medium" mb={2} color="#303B34">
                  Bairro
                </Text>

                <Input
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Seu bairro"
                  borderRadius="lg"
                />
              </Box>
            </VStack>

            {mensagemErro && (
              <Box
                bg="red.50"
                borderRadius="lg"
                p={3}
                border="1px solid"
                borderColor="red.200"
              >
                <Text color="red.700" fontSize="sm">
                  {mensagemErro}
                </Text>
              </Box>
            )}

            {mensagemSucesso && (
              <Box bg="#DDEEE3" borderRadius="lg" p={3}>
                <Text color="#185B3E" fontSize="sm" fontWeight="medium">
                  {mensagemSucesso}
                </Text>
              </Box>
            )}

            <Flex gap={3} direction={{ base: "column", sm: "row" }}>
              <Button
                flex="1"
                variant="outline"
                borderRadius="lg"
                size="lg"
                onClick={() => navigate(`/detalhe-servico/${id}`)}
                disabled={enviando}
              >
                Cancelar
              </Button>

              <Button
                flex="1"
                bg="#1F7A50"
                color="white"
                _hover={{ bg: "#185B3E" }}
                borderRadius="lg"
                size="lg"
                onClick={handleAtualizarServico}
                loading={enviando}
                disabled={enviando || !servico}
              >
                Salvar alterações
              </Button>
            </Flex>
          </VStack>
        )}
      </Box>
    </DefaultLayout>
  );
}
