import axios from "axios";

const API_URL = "http://localhost:3000/"

const listarUsuarios = () => {
    return axios.get(API_URL + "usuarios")
}

const findById = (id:number) => {
  return axios.get(API_URL + `usuarios/findById/${id}`)
}

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
    findById
}

export default UsuarioService