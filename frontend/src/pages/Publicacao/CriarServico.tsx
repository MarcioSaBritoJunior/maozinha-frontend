import { useContext, useEffect, useState } from "react";

import { Box, Button, Flex, Heading, Input, Text, Textarea, VStack, NativeSelect, } from "@chakra-ui/react";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import { serviceService, type ICriarServico } from "../../services/serviceService";
import { categoryService, type IServiceCategory } from "../../services/categoryService";

export function CriarServico() {
  const auth = useContext(AuthContext);

  const [categorias, setCategorias] = useState<IServiceCategory[]>([]);
  const [carregandoCategorias, setCarregandoCategorias] = useState(true);
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
        const response = await categoryService.getCategories();
        setCategorias(response);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      } finally {
        setCarregandoCategorias(false);
      }
    };

    carregarCategorias();
  }, []);

  useEffect(() => {
    if (auth.user) {
      setCidade((atual) => auth.user!.city || atual);
      setBairro((atual) => auth.user!.neighborhood || atual);
    }
  }, [auth.user]);

  const hoje = new Date();
  const dataValida = [hoje.getFullYear(), String(hoje.getMonth() + 1).padStart(2,"0"), String(hoje.getDate()).padStart(2, "0")].join("-");

  const handleSubmit = async () => {
    setMensagemSucesso("");
    setMensagemErro("");

    if(!titulo.trim() || !descricao.trim() || !categoriaId || !valor || !cidade || !bairro || !dataServico) {
      setMensagemErro("Por favor, preencha todos os campos.");
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

    const dados: ICriarServico = {
      title: titulo.trim(),
      description: descricao.trim(),
      categoryId: Number(categoriaId),
      value: Number(valor),
      city: cidade.trim(),
      neighborhood: bairro.trim(),
      serviceDate: dataServico,
    };

    try {
      setEnviando(true);

      await serviceService.createServico(dados);

      setMensagemSucesso("Serviço publicado com sucesso!");
      setTitulo("");
      setDescricao("");
      setCategoriaId("");
      setValor("");
      setCidade(auth.user?.city || "");
      setBairro(auth.user?.neighborhood || "");
      setDataServico("");
    } catch (error: any) {
      console.error("Erro ao publicar serviço:", error);
      setMensagemErro(error.response?.data?.detail || error.response?.data?.message || "Não foi possível publicar seu serviço. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <DefaultLayout titulo="Precisa de uma mãozinha em algo? Publique um serviço e encontre alguém que possa ajudar.">
      <Box maxW="750px" mx="auto" w="100%">
        <VStack align="stretch" gap={6}>
          <Box>
            <Heading size="lg" color="#202722">
              Publique um serviço
            </Heading>

            <Text color="#58665D" mt={2}>
              Conte o que você precisa e encontre alguém que possa ajudar.
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

              <NativeSelect.Root disabled={carregandoCategorias}>
                <NativeSelect.Field
                  value={categoriaId}
                  onChange={(e) => setCategoriaId(e.target.value)}
                  borderRadius="lg"
                >
                  <option value="">
                    {carregandoCategorias
                      ? "Carregando categorias..."
                      : "Selecione uma categoria"}
                  </option>

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
            <Box
              bg="#DDEEE3"
              borderRadius="lg"
              p={3}
            >
              <Text color="#185B3E" fontSize="sm" fontWeight="medium">
                {mensagemSucesso}
              </Text>
            </Box>
          )}

          <Button
            bg="#1F7A50"
            color="white"
            _hover={{ bg: "#185B3E" }}
            borderRadius="lg"
            size="lg"
            onClick={handleSubmit}
            loading={enviando}
            disabled={enviando || carregandoCategorias}
          >
            Publicar serviço
          </Button>
        </VStack>
      </Box>
    </DefaultLayout>
  );

  //return <h1>MCriar Serviços</h1>; STUB DO ARQUIVO ORIGINAL
}
