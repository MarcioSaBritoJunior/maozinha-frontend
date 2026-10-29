export interface IServico {
    id: string;
    titulo: string;
    descricao: string;
    categoriaId: number;
    valor: number;
    bairro: string;
    cidade: string;
    dataServicoPostado: string;
    status: "disponivel" | "em_andamento" | "concluido" | "cancelado";
    usuarioId: string;
    nomeUsuario: string;
}

// Simulação de dados de serviços para teste da listagem
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
    }
}