import axios from "axios";

const API_URL = "http://localhost:3000";

const listarAcademias = () => {
  return axios.get(API_URL + "/academias", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const criarAcademias = (
  nome: string,
  descricao: string,
  usuarioId: number,
  imagem: File
) => {
  console.log(usuarioId);
  return axios.post(
    API_URL + "/academias",
    {
      nome,
      descricao,
      usuarioId,
      imagem,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

const AcademiaService = {
  listarAcademias,
  criarAcademias,
};

export default AcademiaService;
