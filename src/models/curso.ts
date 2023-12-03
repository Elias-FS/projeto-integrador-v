export class Curso {
  data_nascimento: string;
  id: string;
  titulo: string;
  capa: string;
  descricao: string;
  valido?: boolean;
  fk_Academia_id: number;
  fk_Usuario_id: number;

  constructor(
    data_nascimento: string,
    id: string,
    titulo: string,
    capa: string,
    descricao: string,
    valido: boolean,
    fk_Academia_id: number,
    fk_Usuario_id: number

  ) {
    this.data_nascimento = data_nascimento;
    this.id = id;
    this.titulo = titulo;
    this.capa = capa;
    this.descricao = descricao;
    this.valido = valido;
    this.fk_Academia_id = fk_Academia_id;
    this.fk_Usuario_id = fk_Usuario_id;
  }

  static fromJson(json: any): Curso {
    const {
      data_criacao,
      id,
      titulo,
      imagem,
      descricao,
      validado,
      fk_Academia_id,
      fk_Usuario_id
    } = json;

    return new Curso(
      data_criacao,
      id,
      titulo,
      imagem,
      descricao,
      validado,
      fk_Academia_id,
      fk_Usuario_id
    );
  }
}
