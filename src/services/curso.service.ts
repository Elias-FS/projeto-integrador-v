import axios from "axios";

const API_URL = "http://localhost:3000/"

const listarCursos= () => {
    return axios.get(API_URL + "cursos/")
}

const criarCurso = (
    titulo: string,
    descricao: string,
    usuarioId: string,
    academiaId: string,
    imagem: string,
    telasCursoJson: string,
  ) => {
    return axios.post(API_URL + "cursos/criar", {
      titulo,
      descricao,
      usuarioId,
      academiaId,
      //imagem,
      telasCursoJson
    });
  };

const CursoService = { 
    listarCursos,
    criarCurso,
}

export default CursoService