import axios from "axios";

const API_URL = "http://localhost:3000/";

const listarUsuarios = () => {
  return axios.get(API_URL + "usuarios");
};

const promoverUsuario = (id: number, cargoId: number) => {
  return axios.put(API_URL + `usuarios/promover/`, {
    id: id,
    cargoId: cargoId,
  });
};

const registrarUsuario = (
  nome: string,
  email: string,
  senha: string,
  celular: string,
  cep: string,
  bairro: string,
  rua: string,
  data: string,
  estadoSelecionado: string,
  colaboradorSelecionado: boolean,
  profissaoSelecionado: string
) => {
  return axios.post(API_URL + "usuarios/registrar", {
    nome,
    email,
    senha,
    celular,
    estado: estadoSelecionado,
    cep,
    bairro,
    rua,
    dataNascimento: data,
    colaborador: colaboradorSelecionado,
    profissao: profissaoSelecionado,
  });
};

const UsuarioService = {
  listarUsuarios,
  registrarUsuario,
  promoverUsuario,
};

export default UsuarioService;
