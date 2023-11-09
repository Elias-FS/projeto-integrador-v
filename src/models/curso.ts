import { Slide } from "./slide";

export class Curso {
  data_nascimento: string;
  id: string;
  titulo: string;
  capa: string;
  descricao: string;
  academia: string;
  listaDeSlides: Slide[];

  constructor(
    data_nascimento: string,
    id: string,
    titulo: string,
    capa: string,
    descricao: string,
    academia: string,
    listaDeSlides: Slide[]
  ) {
    this.data_nascimento = data_nascimento;
    this.id = id;
    this.titulo = titulo;
    this.capa = capa;
    this.descricao = descricao;
    this.academia = academia;
    this.listaDeSlides = listaDeSlides;
  }
}
