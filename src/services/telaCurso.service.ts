import axios from "axios";

const API_URL = "http://localhost:3000/";

const listarSlides = () => {
  return axios.get(API_URL + "telaCurso/");
};

const criarSlide = async (
    texto: string,
    midia: File,
    resposta: string,
    fk_Curso_id: number,
    posicao: string,
    alternativas: string,
    feedbacks: string,
    tipo: string,
    ) => {
  return axios.post(API_URL + "telaCurso/criar", {
    texto,
    midia,
    resposta,
    fk_Curso_id,
    posicao,
    alternativas,
    feedbacks,
    tipo,
  });
};

// INSERT INTO TelaCurso (
//     texto,
//     midia,
//     resposta,
//     fk_Curso_id,
//     posicao,
//     alternativas,
//     feedbacks,
//     tipo
//   ) VALUES (
//     '${cursoData.texto}',
//     '${cursoData.midia}',
//     '${cursoData.resposta}',
//     ${cursoData.cursoID}
//   )
// `);

const telaCursoService = {
  listarSlides,
  criarSlide,
};

export default telaCursoService;
