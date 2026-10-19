export const buscarLocalPorCep = async (cep: string) => {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length !== 8) {
    throw new Error("CEP inválido");
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

    const data = await response.json();

    if (data.erro) {
      throw new Error("CEP não encontrado");
    }

    return {
      bairro: data.bairro,
      cidade: data.localidade,
      uf: data.uf,
    };
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    throw error;
  }
};
