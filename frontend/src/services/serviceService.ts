import { api } from "./api";
export interface IServico {
    id: string;
    titulo: string;
    descricao: string;
    categoriaId: number;
    valor: number;
    cidade: string;
    bairro: string;
    dataServicoPostado: string;
    status: "disponivel" | "em_andamento" | "concluido" | "cancelado";
    usuarioId: string;
    nomeUsuario: string;
}

export interface ICriarServico {
  title: string;
  description: string;
  categoryId: number;
  value: number;
  city: string;
  neighborhood: string;
  serviceDate: string;
}

export interface IServicoDetalhes {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  value: number;
  city: string;
  neighborhood: string;
  serviceDate: string;
  status: "EM ABERTO" | "SELECIONADO" | "EM ANDAMENTO" | "CONCLUÍDO" | "CANCELADO";
  requesterId: number;
  requesterName: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAtualizarServico {
  title: string;
  description: string;
  categoryId: number;
  value: number;
  city: string;
  neighborhood: string;
  serviceDate: string;
  status: IServicoDetalhes["status"];
}

//export interface ICancelarServico {}

// Simulação de dados de serviços para teste da listagem na forma inicial
let servicos: IServico[] = [
    {
    id: "1",
    titulo: "Montagem de guarda-roupa",
    descricao: "Preciso de ajuda para montar um guarda-roupa de duas portas.",
    categoriaId: 1,
    valor: 120,
    bairro: "Cohama",
    cidade: "São Luís",
    dataServicoPostado: "2026-10-25",
    status: "disponivel",
    usuarioId: "usuario-1",
    nomeUsuario: "Ana Paula",
  },
  {
    id: "2",
    titulo: "Configuração de notebook",
    descricao: "Preciso configurar meu notebook e instalar os programas básicos.",
    categoriaId: 2,
    valor: 80,
    bairro: "Renascença",
    cidade: "São Luís",
    dataServicoPostado: "2026-10-22",
    status: "disponivel",
    usuarioId: "usuario-2",
    nomeUsuario: "Carlos Mendes",
  },
  {
    id: "3",
    titulo: "Limpeza de quintal",
    descricao: "Procuro alguém para limpar um quintal pequeno e retirar folhas.",
    categoriaId: 4,
    valor: 100,
    bairro: "Turu",
    cidade: "São Luís",
    dataServicoPostado: "2026-10-28",
    status: "disponivel",
    usuarioId: "usuario-3",
    nomeUsuario: "Mariana Costa",
  },
];

export const serviceService = {
    getServicos: async (): Promise<IServico[]> => {
        return servicos;
    },
    
    createServico: async (dados: ICriarServico) => {
      //console.log("Dados enviados:", dados); DEBUG
      const response = await api.post("/services", dados);
      return response.data;
    },

    getServicoPorId: async (id: number): Promise<IServicoDetalhes> => {
      const response = await api.get<IServicoDetalhes>(`/services/${id}`);
      return response.data;
    },

    //getServicos

    updateServico: async (id: number, dados: IAtualizarServico) => {
      const response = await api.put(`/services/${id}`, dados);
      return response.data;
    },

    cancelarServico: async (id: string | number) => {
      await api.delete(`/services/${id}`);
    },
}