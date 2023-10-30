import { Slide } from "./slide";

export class Curso {
    data_nascimento: Date;
    id: number;
    listaDeSlides: Slide[];
  
    constructor(
      data_nascimento: Date,
      id: number,
      listaDeSlides: Slide[],
    ) {
      this.data_nascimento = data_nascimento;
      this.id = id;
      this.listaDeSlides = listaDeSlides;
    }
  }