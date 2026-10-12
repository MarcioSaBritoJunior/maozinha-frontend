import { Login } from "../pages/Autenticacao/Login";
import { Cadastro } from "../pages/Autenticacao/Cadastro";
import { RecuperarAcesso } from "../pages/Autenticacao/RecuperarAcesso";
import { Inicio } from "../pages/Principal/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetalhesServico } from "../pages/Principal/DetalhesServico";
import { BuscaServicos } from "../pages/Principal/BuscaServicos";
import { MeuPerfil } from "../pages/Perfil/MeuPerfil";
import { EditarPerfil } from "../pages/Perfil/EditarPerfil";
import { PerfilPublicoUsuario } from "../pages/Perfil/PerfilPublicoUsuario";
import { ServicoConcluido } from "../pages/Execucao/ServicoConcluido";
import { ServicoEmAndamento } from "../pages/Execucao/ServicoEmAndamento";
import { ServicoSelecionado } from "../pages/Execucao/ServicoSelecionado";
import { CriarServico } from "../pages/Publicacao/CriarServico";
import { EditarServico } from "../pages/Publicacao/EditarServico";
import { GerenciarServicoPublicado } from "../pages/Publicacao/GerenciarServicoPublicado";
import { ListaInteressados } from "../pages/Publicacao/ListaInteressados";
import { MeusServicos } from "../pages/Publicacao/MeusServicos";
import { ServicoCancelado } from "../pages/Publicacao/ServicoCancelado";
import { SelecaoInteressados } from "../pages/Publicacao/SelecaoInteressados";
import { AvaliarUsuario } from "../pages/Avaliacao/AvaliarUsuario";
import { Reputacao } from "../pages/Avaliacao/Reputação";
import { AvaliacaoRealizada } from "../pages/Avaliacao/AvaliacaoRealizada";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/*Autenticação*/}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-acesso" element={<RecuperarAcesso />} />

        {/*Principal*/}
        <Route path="/" element={<Inicio />} />
        <Route path="/explorar" element={<BuscaServicos />} />
        <Route path="/detalhe-servico" element={<DetalhesServico />} />

        {/*Perfil*/}
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/perfil" element={<PerfilPublicoUsuario />} />

        {/*Execução*/}
        <Route
          path="/servico-concluido-perfil"
          element={<ServicoConcluido />}
        />
        <Route path="/servico-em-andamento" element={<ServicoEmAndamento />} />
        <Route path="/servico-selecionado" element={<ServicoSelecionado />} />

        {/*Publicação*/}
        <Route path="/criar" element={<CriarServico />} />
        <Route path="/editar-servico" element={<EditarServico />} />
        <Route
          path="gerenciar-servico-publicado"
          element={<GerenciarServicoPublicado />}
        />
        <Route path="lista-interessados" element={<ListaInteressados />} />
        <Route path="meus-servicos" element={<MeusServicos />} />
        <Route path="selecao-interessados" element={<SelecaoInteressados />} />
        <Route path="servico-cancelado" element={<ServicoCancelado />} />

        {/*Avaliação*/}
        <Route path="/avaliar-usuario" element={<AvaliarUsuario />} />
        <Route path="/avaliacao-realizada" element={<AvaliacaoRealizada />} />
        <Route path="/reputacao" element={<Reputacao />} />

        {/*Administração*/}
      </Routes>
    </Router>
  );
}
