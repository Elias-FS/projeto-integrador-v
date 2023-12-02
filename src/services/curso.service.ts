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
    console.log(telasCursoJson)
    return axios.post(API_URL + "cursos/criar", {
      titulo,
      descricao,
      usuarioId,
      academiaId,
      //imagem,
      telasCursoJson
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