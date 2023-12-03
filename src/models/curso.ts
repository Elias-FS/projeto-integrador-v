export class Curso {
  data_nascimento: string;
  id: string;
  titulo: string;
  capa: string;
  descricao: string;
  academia: string;
  valido?: boolean;

  constructor(
    data_nascimento: string,
    id: string,
    titulo: string,
    capa: string,
    descricao: string,
    academia: string,
    valido: boolean
  ) {
    this.data_nascimento = data_nascimento;
    this.id = id;
    this.titulo = titulo;
    this.capa = capa;
    this.descricao = descricao;
    this.academia = academia;
    this.valido = valido;
  }

  static fromJson(json: any): Curso {
    const {
      data_nascimento,
      id,
      titulo,
      imagem,
      descricao,
      academia,
      valido,
    } = json;

    return new Curso(
      data_nascimento,
      id,
      titulo,
      imagem,
      descricao,
      academia,
      valido
    );
  }
}
