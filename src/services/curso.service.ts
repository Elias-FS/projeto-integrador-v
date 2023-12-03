import axios from "axios";

const API_URL = "http://localhost:3000/"

const listarCursos= () => {
    return axios.get(API_URL + "cursos/")
}

const criarCurso = async (
    titulo: string,
    descricao: string,
    usuarioId: number,
    academiaId: number,
    imagem: File,
  ) => {
    return axios.post(API_URL + "cursos/criar", {
      titulo,
      descricao,
      usuarioId,
      academiaId,
      imagem,
    });
  };
const validarCurso = (id: any) => {
  return axios.patch(API_URL + `cursos/update/${id}`, {
     id,
  })
}

const CursoService = {
    listarCursos,
    criarCurso,
    validarCurso
}

export default CursoService