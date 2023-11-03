import axios from "axios";

const API_URL = "http://localhost:3000/"

const listarUsuarios = () => {
    return axios.get(API_URL + "usuarios")
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
    colaboradorSelecionado: string,
    profissaoSelecionado: string
  ) => {
    return axios.post(API_URL + "usuario", {
      nome,
      email,
      senha,
      celular,
      estado: estadoSelecionado,
      cep,
      bairro,
      rua,
      data_nascimento: new Date(data),
      colaborador: Number(colaboradorSelecionado),
      profissao: profissaoSelecionado,
      cargo: 1, // Exemplo de ID de cargo
    });
  };

const UsuarioService = { 
    listarUsuarios,
    registrarUsuario
}

export default UsuarioService