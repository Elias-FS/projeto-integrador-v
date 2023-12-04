import { Slide } from "@/models/slide";
import axios from "axios";

const API_URL = "http://localhost:3000/";

const listarSlides = () => {
  return axios.get(API_URL + "telaCurso/");
};

const criarSlide = async (
  slides: Slide[],
  cursoId: number
) => {
  const json = JSON.stringify(slides);
  return axios.post(API_URL + "telaCurso/criar", {
    json,
    cursoId
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
